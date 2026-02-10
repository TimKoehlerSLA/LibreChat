jest.mock('~/server/services/Config', () => ({
  loadDefaultModels: jest.fn(),
  loadConfigModels: jest.fn(),
  getAppConfig: jest.fn(),
}));

jest.mock('~/cache', () => ({
  getLogStores: jest.fn(),
}));

jest.mock('~/server/services/DapiService', () => ({
  isDapiEnabled: jest.fn(),
  listDapiProxies: jest.fn(),
  getDapiProxyEndpointNameWithPrefix: jest.fn(),
  fetchDapiProxyModels: jest.fn(),
}));

const { CacheKeys, DAPI_ENDPOINT_PREFIX } = require('librechat-data-provider');
const { loadModels } = require('./ModelController');
const { loadDefaultModels, loadConfigModels, getAppConfig } = require('~/server/services/Config');
const { getLogStores } = require('~/cache');
const {
  isDapiEnabled,
  listDapiProxies,
  getDapiProxyEndpointNameWithPrefix,
  fetchDapiProxyModels,
} = require('~/server/services/DapiService');

describe('ModelController DAPI models', () => {
  const cacheStore = new Map();
  const mockCache = {
    get: jest.fn(async (key) => cacheStore.get(key)),
    set: jest.fn(async (key, value) => {
      cacheStore.set(key, value);
      return true;
    }),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    cacheStore.clear();
    getLogStores.mockReturnValue(mockCache);
    getAppConfig.mockResolvedValue({ endpoints: {} });
  });

  it('adds DAPI models per user without caching user-specific data', async () => {
    loadDefaultModels.mockResolvedValue({ openAI: ['gpt-4'] });
    loadConfigModels.mockResolvedValue({ Custom: ['custom-1'] });
    isDapiEnabled.mockReturnValue(true);

    const proxyOne = { id: 'proxy-1', name: 'Proxy One' };
    const proxyTwo = { id: 'proxy-2', name: 'Proxy Two' };
    const dapiEndpoint = `${DAPI_ENDPOINT_PREFIX}test-proxy`;

    // First request returns proxy-1, second returns proxy-2
    listDapiProxies
      .mockResolvedValueOnce([proxyOne])
      .mockResolvedValueOnce([proxyTwo]);

    getDapiProxyEndpointNameWithPrefix.mockReturnValue(dapiEndpoint);

    fetchDapiProxyModels
      .mockResolvedValueOnce(['model-1'])
      .mockResolvedValueOnce(['model-2']);

    const reqOne = { user: { id: 'user-1' } };
    const reqTwo = { user: { id: 'user-2' } };

    const modelsOne = await loadModels(reqOne);
    const modelsTwo = await loadModels(reqTwo);

    expect(modelsOne[dapiEndpoint]).toEqual(['model-1']);
    expect(modelsTwo[dapiEndpoint]).toEqual(['model-2']);

    expect(loadDefaultModels).toHaveBeenCalledTimes(1);
    expect(loadConfigModels).toHaveBeenCalledTimes(1);
    expect(mockCache.set).toHaveBeenCalledWith(CacheKeys.MODELS_CONFIG, {
      openAI: ['gpt-4'],
      Custom: ['custom-1'],
    });
  });

  it('uses default DAPI models when fetch is disabled', async () => {
    loadDefaultModels.mockResolvedValue({ openAI: ['gpt-4'] });
    loadConfigModels.mockResolvedValue({});
    isDapiEnabled.mockReturnValue(true);
    getAppConfig.mockResolvedValue({
      endpoints: {
        dapi: {
          name: 'myapi',
          models: {
            fetch: false,
            default: ['model-a', { name: 'model-b' }],
          },
        },
      },
    });

    const proxy = { id: 'proxy-1', name: 'Proxy One' };
    const dapiEndpoint = 'myapi:Proxy One';
    listDapiProxies.mockResolvedValue([proxy]);
    getDapiProxyEndpointNameWithPrefix.mockReturnValue(dapiEndpoint);
    fetchDapiProxyModels.mockResolvedValue(['ignored-model']);

    const result = await loadModels({ user: { id: 'user-1' } });

    expect(result[dapiEndpoint]).toEqual(['model-a', 'model-b']);
    expect(fetchDapiProxyModels).not.toHaveBeenCalled();
  });

  it('skips DAPI models when DAPI is disabled', async () => {
    loadDefaultModels.mockResolvedValue({ openAI: ['gpt-4'] });
    loadConfigModels.mockResolvedValue({ Custom: ['custom-1'] });
    isDapiEnabled.mockReturnValue(false);

    const result = await loadModels({ user: { id: 'user-1' } });

    // No DAPI endpoint should be added when DAPI is disabled
    const dapiKeys = Object.keys(result).filter((k) => k.startsWith(DAPI_ENDPOINT_PREFIX));
    expect(dapiKeys).toHaveLength(0);
    expect(listDapiProxies).not.toHaveBeenCalled();
  });
});
