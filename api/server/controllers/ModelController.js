const { logger } = require('@librechat/data-schemas');
const { CacheKeys } = require('librechat-data-provider');
const {
  isDapiEnabled,
  listDapiProxies,
  getDapiProxyEndpointNameWithPrefix,
  fetchDapiProxyModels,
} = require('~/server/services/DapiService');
const { loadDefaultModels, loadConfigModels, getAppConfig } = require('~/server/services/Config');
const { getLogStores } = require('~/cache');

/**
 * @param {ServerRequest} req
 * @returns {Promise<TModelsConfig>} The models config.
 */
const getModelsConfig = async (req) => {
  return loadModels(req);
};

/**
 * Loads the models from the config.
 * @param {ServerRequest} req - The Express request object.
 * @returns {Promise<TModelsConfig>} The models config.
 */
async function loadBaseModels(req) {
  const cache = getLogStores(CacheKeys.CONFIG_STORE);
  const cachedModelsConfig = await cache.get(CacheKeys.MODELS_CONFIG);
  if (cachedModelsConfig) {
    return cachedModelsConfig;
  }
  const defaultModelsConfig = await loadDefaultModels(req);
  const customModelsConfig = await loadConfigModels(req);

  const modelConfig = { ...defaultModelsConfig, ...customModelsConfig };

  await cache.set(CacheKeys.MODELS_CONFIG, modelConfig);
  return modelConfig;
}

const normalizeModelList = (models) =>
  (models ?? []).map((model) => (typeof model === 'string' ? model : model.name));

async function applyDapiModels(req, modelConfig) {
  if (!isDapiEnabled()) {
    return modelConfig;
  }

  try {
    const appConfig = req.config ?? (await getAppConfig({ role: req.user?.role }));
    if (!req.config) {
      req.config = appConfig;
    }
    const dapiConfig = appConfig?.endpoints?.dapi;
    const configName = dapiConfig?.name;
    const defaultModels = dapiConfig?.models?.default ?? [];
    const fallbackModels = normalizeModelList(defaultModels);
    const shouldFetchModels = dapiConfig?.models?.fetch !== false;

    const proxies = await listDapiProxies({ req });
    if (!proxies || proxies.length === 0) {
      return modelConfig;
    }

    const result = { ...modelConfig };

    if (!shouldFetchModels) {
      for (const proxy of proxies) {
        const endpointName = getDapiProxyEndpointNameWithPrefix(proxy, configName);
        result[endpointName] = fallbackModels;
      }
      return result;
    }

    // Fetch models from each proxy in parallel
    const modelPromises = proxies.map(async (proxy) => {
      const endpointName = getDapiProxyEndpointNameWithPrefix(proxy, configName);
      const models = await fetchDapiProxyModels({ proxy, req });
      return { endpointName, models };
    });

    const proxyModels = await Promise.all(modelPromises);

    for (const { endpointName, models } of proxyModels) {
      if (!models || models.length === 0) {
        // Apply default models as fallback
        result[endpointName] = fallbackModels;
      } else {
        result[endpointName] = models;
      }
    }

    return result;
  } catch (error) {
    logger.error('Error fetching DAPI proxy models:', error);
    return modelConfig;
  }
}

async function loadModels(req) {
  const baseModels = await loadBaseModels(req);
  return applyDapiModels(req, baseModels);
}

async function modelController(req, res) {
  try {
    const modelConfig = await loadModels(req);
    res.send(modelConfig);
  } catch (error) {
    logger.error('Error fetching models:', error);
    res.status(500).send({ error: error.message });
  }
}

/**
 * Controller that returns only base models (fast, cached).
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 */
async function modelControllerBase(req, res) {
  try {
    const modelConfig = await loadBaseModels(req);
    res.send(modelConfig);
  } catch (error) {
    logger.error('Error fetching base models:', error);
    res.status(500).send({ error: error.message });
  }
}

/**
 * Controller that returns only DAPI models.
 * @param {ServerRequest} req
 * @param {ServerResponse} res
 */
async function modelControllerDapi(req, res) {
  try {
    const dapiModels = await getDapiModels(req);
    res.send(dapiModels);
  } catch (error) {
    logger.error('Error fetching DAPI models:', error);
    res.status(500).send({ error: error.message });
  }
}

/**
 * Fetches only DAPI models without base models.
 * @param {ServerRequest} req - The Express request object.
 * @returns {Promise<TModelsConfig>} The DAPI models config.
 */
async function getDapiModels(req) {
  if (!isDapiEnabled()) {
    return {};
  }

  try {
    const appConfig = req.config ?? (await getAppConfig({ role: req.user?.role }));
    if (!req.config) {
      req.config = appConfig;
    }
    const dapiConfig = appConfig?.endpoints?.dapi;
    const configName = dapiConfig?.name;
    const defaultModels = dapiConfig?.models?.default ?? [];
    const fallbackModels = normalizeModelList(defaultModels);
    const shouldFetchModels = dapiConfig?.models?.fetch !== false;

    const proxies = await listDapiProxies({ req });
    if (!proxies || proxies.length === 0) {
      return {};
    }

    const result = {};

    if (!shouldFetchModels) {
      for (const proxy of proxies) {
        const endpointName = getDapiProxyEndpointNameWithPrefix(proxy, configName);
        result[endpointName] = fallbackModels;
      }
      return result;
    }

    // Fetch models from each proxy in parallel
    const modelPromises = proxies.map(async (proxy) => {
      const endpointName = getDapiProxyEndpointNameWithPrefix(proxy, configName);
      const models = await fetchDapiProxyModels({ proxy, req });
      return { endpointName, models };
    });

    const proxyModels = await Promise.all(modelPromises);

    for (const { endpointName, models } of proxyModels) {
      if (!models || models.length === 0) {
        // Apply default models as fallback
        result[endpointName] = fallbackModels;
      } else {
        result[endpointName] = models;
      }
    }

    return result;
  } catch (error) {
    logger.error('Error fetching DAPI proxy models:', error);
    return {};
  }
}

module.exports = {
  modelController,
  modelControllerBase,
  modelControllerDapi,
  loadModels,
  getModelsConfig,
};
