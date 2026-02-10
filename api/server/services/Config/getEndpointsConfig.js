const { loadCustomEndpointsConfig, listDapiProxies, isDapiEnabled, getDapiProxyEndpointNameWithPrefix } = require('@librechat/api');
const {
  CacheKeys,
  EModelEndpoint,
  isAgentsEndpoint,
  orderEndpointsConfig,
  defaultAgentCapabilities,
} = require('librechat-data-provider');
const loadDefaultEndpointsConfig = require('./loadDefaultEConfig');
const getLogStores = require('~/cache/getLogStores');
const { getAppConfig } = require('./app');

/**
 *
 * @param {ServerRequest} req
 * @returns {Promise<TEndpointsConfig>}
 */
async function getEndpointsConfig(req) {
  const cache = getLogStores(CacheKeys.CONFIG_STORE);
  const cachedEndpointsConfig = await cache.get(CacheKeys.ENDPOINT_CONFIG);
  if (cachedEndpointsConfig) {
    if (cachedEndpointsConfig.gptPlugins) {
      await cache.delete(CacheKeys.ENDPOINT_CONFIG);
    } else {
      return cachedEndpointsConfig;
    }
  }

  const appConfig = req.config ?? (await getAppConfig({ role: req.user?.role }));
  const defaultEndpointsConfig = await loadDefaultEndpointsConfig(appConfig);
  const customEndpointsConfig = loadCustomEndpointsConfig(appConfig?.endpoints?.custom);

  /** @type {TEndpointsConfig} */
  const mergedConfig = {
    ...defaultEndpointsConfig,
    ...customEndpointsConfig,
  };

  // DAPI proxy endpoints are applied dynamically per-request via applyDapiEndpoints

  if (appConfig.endpoints?.[EModelEndpoint.azureOpenAI]) {
    /** @type {Omit<TConfig, 'order'>} */
    mergedConfig[EModelEndpoint.azureOpenAI] = {
      userProvide: false,
    };
  }

  // Enable Anthropic endpoint when Vertex AI is configured in YAML
  if (appConfig.endpoints?.[EModelEndpoint.anthropic]?.vertexConfig?.enabled) {
    /** @type {Omit<TConfig, 'order'>} */
    mergedConfig[EModelEndpoint.anthropic] = {
      userProvide: false,
    };
  }

  if (appConfig.endpoints?.[EModelEndpoint.azureOpenAI]?.assistants) {
    /** @type {Omit<TConfig, 'order'>} */
    mergedConfig[EModelEndpoint.azureAssistants] = {
      userProvide: false,
    };
  }

  if (
    mergedConfig[EModelEndpoint.assistants] &&
    appConfig?.endpoints?.[EModelEndpoint.assistants]
  ) {
    const { disableBuilder, retrievalModels, capabilities, version, ..._rest } =
      appConfig.endpoints[EModelEndpoint.assistants];

    mergedConfig[EModelEndpoint.assistants] = {
      ...mergedConfig[EModelEndpoint.assistants],
      version,
      retrievalModels,
      disableBuilder,
      capabilities,
    };
  }
  if (mergedConfig[EModelEndpoint.agents] && appConfig?.endpoints?.[EModelEndpoint.agents]) {
    const { disableBuilder, capabilities, allowedProviders, ..._rest } =
      appConfig.endpoints[EModelEndpoint.agents];

    mergedConfig[EModelEndpoint.agents] = {
      ...mergedConfig[EModelEndpoint.agents],
      allowedProviders,
      disableBuilder,
      capabilities,
    };
  }

  if (
    mergedConfig[EModelEndpoint.azureAssistants] &&
    appConfig?.endpoints?.[EModelEndpoint.azureAssistants]
  ) {
    const { disableBuilder, retrievalModels, capabilities, version, ..._rest } =
      appConfig.endpoints[EModelEndpoint.azureAssistants];

    mergedConfig[EModelEndpoint.azureAssistants] = {
      ...mergedConfig[EModelEndpoint.azureAssistants],
      version,
      retrievalModels,
      disableBuilder,
      capabilities,
    };
  }

  if (mergedConfig[EModelEndpoint.bedrock] && appConfig?.endpoints?.[EModelEndpoint.bedrock]) {
    const { availableRegions } = appConfig.endpoints[EModelEndpoint.bedrock];
    mergedConfig[EModelEndpoint.bedrock] = {
      ...mergedConfig[EModelEndpoint.bedrock],
      availableRegions,
    };
  }

  const endpointsConfig = orderEndpointsConfig(mergedConfig);

  await cache.set(CacheKeys.ENDPOINT_CONFIG, endpointsConfig);
  return endpointsConfig;
}

/**
 * Applies DAPI proxy endpoints to the endpoint config dynamically per-request.
 * Each proxy becomes its own endpoint with the format `{configName}:proxy-name`.
 * The configName defaults to 'dapi' but can be customized via librechat.yaml.
 * @param {ServerRequest} req
 * @param {TEndpointsConfig} endpointsConfig
 * @returns {Promise<TEndpointsConfig>}
 */
async function applyDapiEndpoints(req, endpointsConfig) {
  if (!isDapiEnabled()) {
    return endpointsConfig;
  }

  try {
    const appConfig = req.config ?? (await getAppConfig({ role: req.user?.role }));
    if (!req.config) {
      req.config = appConfig;
    }
    const dapiConfig = appConfig?.endpoints?.dapi;
    const configName = dapiConfig?.name;
    const iconURL = dapiConfig?.iconURL ?? process.env.DAPI_ICON_URL;

    const proxies = await listDapiProxies({ req });
    if (!proxies || proxies.length === 0) {
      return endpointsConfig;
    }

    const result = { ...endpointsConfig };
    for (const proxy of proxies) {
      const endpointName = getDapiProxyEndpointNameWithPrefix(proxy, configName);
      result[endpointName] = {
        type: EModelEndpoint.custom,
        userProvide: false,
        modelDisplayLabel: proxy.name,
        ...(iconURL && { iconURL }),
      };
    }

    return result;
  } catch (error) {
    return endpointsConfig;
  }
}

/**
 * @param {ServerRequest} req
 * @param {import('librechat-data-provider').AgentCapabilities} capability
 * @returns {Promise<boolean>}
 */
const checkCapability = async (req, capability) => {
  const isAgents = isAgentsEndpoint(req.body?.endpointType || req.body?.endpoint);
  const endpointsConfig = await getEndpointsConfig(req);
  const capabilities =
    isAgents || endpointsConfig?.[EModelEndpoint.agents]?.capabilities != null
      ? (endpointsConfig?.[EModelEndpoint.agents]?.capabilities ?? [])
      : defaultAgentCapabilities;
  return capabilities.includes(capability);
};

module.exports = { getEndpointsConfig, checkCapability, applyDapiEndpoints };
