import type { DapiProxy } from './types';

// Store the mock cache instance so we can access it in tests
let mockCacheInstance: { get: jest.Mock; set: jest.Mock };

jest.mock('~/cache', () => {
  const cache = {
    get: jest.fn(),
    set: jest.fn(),
  };
  // This allows tests to access the mock instance
  (global as Record<string, unknown>).__mockCacheInstance = cache;
  return {
    standardCache: jest.fn(() => cache),
  };
});

jest.mock('./client', () => ({
  createDapiClient: jest.fn(),
  getDapiBaseUrl: jest.fn(),
}));

import { listDapiProxies, mapDapiProxiesToModels, resolveDapiProxy } from './service';
import { createDapiClient, getDapiBaseUrl } from './client';

// Get reference to the mock cache after module loads
mockCacheInstance = (global as Record<string, unknown>).__mockCacheInstance as {
  get: jest.Mock;
  set: jest.Mock;
};

const baseProxy: DapiProxy = {
  id: 'proxy-1',
  name: 'Proxy One',
  proxy_oapi_url: 'https://proxy.example.com/v1',
  proxy_oapi_key: 'proxy-key',
};

const buildJwt = (header: Record<string, unknown>, payload: Record<string, unknown>): string => {
  const encode = (value: Record<string, unknown>) =>
    Buffer.from(JSON.stringify(value)).toString('base64url');
  return `${encode(header)}.${encode(payload)}.sig`;
};

describe('DAPI service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCacheInstance.get.mockResolvedValue(undefined);
    mockCacheInstance.set.mockResolvedValue(true);
    (getDapiBaseUrl as jest.Mock).mockReturnValue('https://dapi.example.com');
  });

  it('returns empty list when DAPI is disabled', async () => {
    (getDapiBaseUrl as jest.Mock).mockReturnValue(null);

    const result = await listDapiProxies({
      req: { user: { id: 'user-1' } } as any,
    });

    expect(result).toEqual([]);
    expect(createDapiClient).not.toHaveBeenCalled();
  });

  it('uses federated access token when present', async () => {
    const listProxies = jest.fn().mockResolvedValue([baseProxy]);
    (createDapiClient as jest.Mock).mockReturnValue({ listProxies });

    const req = {
      user: {
        id: 'user-1',
        provider: 'openid',
        openidId: 'oidc-1',
        federatedTokens: {
          access_token: 'token-123',
          expires_at: Math.floor(Date.now() / 1000) + 3600,
        },
      },
    };

    const result = await listDapiProxies({ req: req as any });

    expect(createDapiClient).toHaveBeenCalledWith({
      baseUrl: 'https://dapi.example.com',
      accessToken: 'token-123',
    });
    expect(listProxies).toHaveBeenCalledWith({ limit: 1000 });
    expect(result).toEqual([baseProxy]);
  });

  it('returns cached proxies when available', async () => {
    mockCacheInstance.get.mockResolvedValueOnce([baseProxy]);

    const req = {
      user: {
        id: 'user-1',
        provider: 'openid',
        openidId: 'oidc-1',
        federatedTokens: {
          access_token: 'token-123',
          expires_at: Math.floor(Date.now() / 1000) + 3600,
        },
      },
    };

    const result = await listDapiProxies({ req: req as any });

    expect(result).toEqual([baseProxy]);
    expect(createDapiClient).not.toHaveBeenCalled();
  });

  it('bypasses cache when DAPI cache is disabled', async () => {
    mockCacheInstance.get.mockResolvedValueOnce([baseProxy]);
    const listProxies = jest.fn().mockResolvedValue([baseProxy]);
    (createDapiClient as jest.Mock).mockReturnValue({ listProxies });

    const req = {
      user: {
        id: 'user-1',
        provider: 'openid',
        openidId: 'oidc-1',
        federatedTokens: {
          access_token: 'token-123',
          expires_at: Math.floor(Date.now() / 1000) + 3600,
        },
      },
      config: {
        endpoints: {
          dapi: {
            cache: {
              enabled: false,
            },
          },
        },
      },
    };

    const result = await listDapiProxies({ req: req as any });

    expect(mockCacheInstance.get).not.toHaveBeenCalled();
    expect(createDapiClient).toHaveBeenCalledWith({
      baseUrl: 'https://dapi.example.com',
      accessToken: 'token-123',
    });
    expect(mockCacheInstance.set).not.toHaveBeenCalled();
    expect(result).toEqual([baseProxy]);
  });

  it('maps proxy names and resolves proxies by id or name', () => {
    const proxies: DapiProxy[] = [
      baseProxy,
      {
        id: 'proxy-2',
        name: 'Proxy One',
        proxy_oapi_url: 'https://proxy2.example.com/v1',
        proxy_oapi_key: 'proxy-key-2',
      },
      {
        id: 'proxy-3',
        name: 'Proxy Three',
        proxy_oapi_url: 'https://proxy3.example.com/v1',
        proxy_oapi_key: 'proxy-key-3',
      },
    ];

    expect(mapDapiProxiesToModels(proxies)).toEqual(['Proxy One', 'Proxy Three']);
    expect(resolveDapiProxy(proxies, 'proxy-3')?.id).toBe('proxy-3');
    expect(resolveDapiProxy(proxies, 'Proxy One')?.id).toBe('proxy-1');
  });

  it('ignores non-OpenID bearer tokens from headers', async () => {
    const listProxies = jest.fn().mockResolvedValue([baseProxy]);
    (createDapiClient as jest.Mock).mockReturnValue({ listProxies });

    const jwt = buildJwt({ alg: 'HS256', typ: 'JWT' }, { id: 'user-1', username: 'test' });
    const req = {
      user: { id: 'user-1', provider: 'openid' },
      headers: { authorization: `Bearer ${jwt}` },
    };

    const result = await listDapiProxies({ req: req as any });

    expect(result).toEqual([]);
    expect(createDapiClient).not.toHaveBeenCalled();
  });

  it('accepts OpenID-style bearer tokens from headers', async () => {
    const listProxies = jest.fn().mockResolvedValue([baseProxy]);
    (createDapiClient as jest.Mock).mockReturnValue({ listProxies });

    const jwt = buildJwt(
      { alg: 'RS256', typ: 'JWT' },
      { iss: 'https://issuer.example.com', sub: 'user-1', typ: 'Bearer' },
    );
    const req = {
      user: { id: 'user-1', provider: 'openid' },
      headers: { authorization: `Bearer ${jwt}` },
    };

    const result = await listDapiProxies({ req: req as any });

    expect(createDapiClient).toHaveBeenCalledWith({
      baseUrl: 'https://dapi.example.com',
      accessToken: jwt,
    });
    expect(result).toEqual([baseProxy]);
  });
});
