import { logger } from '@librechat/data-schemas';
import { Time } from 'librechat-data-provider';
import type { ServerRequest } from '~/types';
import type { DapiProxy } from './types';
import { standardCache } from '~/cache';
import { extractOpenIDTokenInfo, isOpenIDTokenValid } from '~/utils/oidc';
import { createDapiClient, getDapiBaseUrl } from './client';

const DAPI_CACHE_NAMESPACE = 'DAPI_PROXIES';
const DAPI_MODELS_CACHE_NAMESPACE = 'DAPI_PROXY_MODELS';
const DAPI_DEFAULT_CACHE_TTL_MS = Time.FIVE_MINUTES;

export const DAPI_ENDPOINT_PREFIX = 'dapi:';

/** Get the DAPI endpoint prefix, optionally using a custom config name */
export const getDapiEndpointPrefix = (configName?: string): string =>
  configName ? `${configName}:` : DAPI_ENDPOINT_PREFIX;

export const isDapiProxyEndpoint = (endpoint: string): boolean =>
  endpoint.startsWith(DAPI_ENDPOINT_PREFIX);

/** Check if endpoint is a DAPI proxy endpoint with a configurable prefix */
export const isDapiProxyEndpointWithPrefix = (
  endpoint?: string | null,
  configName?: string,
): boolean => (endpoint ?? '').startsWith(getDapiEndpointPrefix(configName));

export const extractDapiProxyIdentifier = (endpoint: string): string | null =>
  isDapiProxyEndpoint(endpoint) ? endpoint.slice(DAPI_ENDPOINT_PREFIX.length) : null;

/** Extract DAPI proxy identifier with a configurable prefix */
export const extractDapiProxyIdentifierWithPrefix = (
  endpoint: string,
  configName?: string,
): string | null => {
  const prefix = getDapiEndpointPrefix(configName);
  return endpoint.startsWith(prefix) ? endpoint.slice(prefix.length) : null;
};

export const getDapiProxyEndpointName = (proxy: DapiProxy): string =>
  `${DAPI_ENDPOINT_PREFIX}${proxy.name}`;

/** Get DAPI proxy endpoint name with a configurable prefix */
export const getDapiProxyEndpointNameWithPrefix = (proxy: DapiProxy, configName?: string): string =>
  `${getDapiEndpointPrefix(configName)}${proxy.name}`;

const dapiProxyCache = standardCache(DAPI_CACHE_NAMESPACE, DAPI_DEFAULT_CACHE_TTL_MS);

const getDapiCacheConfig = (
  req?: ServerRequest,
): {
  enabled: boolean;
  ttlMs: number;
} => {
  const cacheConfig = req?.config?.endpoints?.dapi?.cache;
  const enabled = cacheConfig?.enabled !== false;
  const ttlMs =
    typeof cacheConfig?.ttlMs === 'number' ? cacheConfig.ttlMs : DAPI_DEFAULT_CACHE_TTL_MS;

  if (!enabled || !Number.isFinite(ttlMs) || ttlMs <= 0) {
    return { enabled: false, ttlMs: 0 };
  }

  return { enabled: true, ttlMs };
};

export const isDapiEnabled = (): boolean => {
  return !!getDapiBaseUrl();
};

const normalizeProxy = (proxy?: Partial<DapiProxy> | null): DapiProxy | null => {
  if (!proxy || typeof proxy.id !== 'string' || typeof proxy.name !== 'string') {
    return null;
  }

  const apiUrl =
    typeof proxy.proxy_oapi_url === 'string'
      ? proxy.proxy_oapi_url
      : typeof proxy.api_url === 'string'
        ? proxy.api_url
        : undefined;
  const apiKey =
    typeof proxy.proxy_oapi_key === 'string'
      ? proxy.proxy_oapi_key
      : typeof proxy.api_key === 'string'
        ? proxy.api_key
        : undefined;

  return {
    id: proxy.id,
    name: proxy.name,
    proxy_oapi_url: apiUrl,
    proxy_oapi_key: apiKey,
    api_url: typeof proxy.api_url === 'string' ? proxy.api_url : undefined,
    api_key: typeof proxy.api_key === 'string' ? proxy.api_key : undefined,
  };
};

const decodeJwtPart = (value: string): Record<string, unknown> | null => {
  try {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const json = Buffer.from(normalized, 'base64').toString('utf8');
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
};

const isLikelyOpenIdAccessToken = (token: string): boolean => {
  const parts = token.split('.');
  if (parts.length < 2) {
    return false;
  }

  const payload = decodeJwtPart(parts[1]);
  if (!payload) {
    return false;
  }

  return Boolean(
    payload.iss ||
      payload.aud ||
      payload.azp ||
      payload.sub ||
      payload.typ === 'Bearer' ||
      payload.scope,
  );
};

const getDapiAccessToken = (req: ServerRequest): string | null => {
  const tokenInfo = extractOpenIDTokenInfo(req.user);
  if (tokenInfo && isOpenIDTokenValid(tokenInfo) && tokenInfo.accessToken) {
    return tokenInfo.accessToken;
  }

  const reqAny = req as ServerRequest & {
    session?: { openidTokens?: { accessToken?: string; access_token?: string } };
    cookies?: Record<string, string>;
    headers?: Record<string, string | string[] | undefined>;
  };

  const sessionToken =
    reqAny.session?.openidTokens?.accessToken || reqAny.session?.openidTokens?.access_token;
  if (sessionToken) {
    return sessionToken;
  }

  const cookieToken = reqAny.cookies?.openid_access_token;
  if (cookieToken) {
    return cookieToken;
  }

  const authHeader = reqAny.headers?.authorization;
  if (typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
    const token = authHeader.slice('Bearer '.length);
    if (isLikelyOpenIdAccessToken(token)) {
      return token;
    }
  }

  return null;
};

const getDapiCacheKey = (req: ServerRequest): string | null => {
  const userId = req.user?.id;
  if (!userId) {
    return null;
  }
  return `user:${userId}`;
};

export const listDapiProxies = async ({
  req,
  limit = 1000,
  force = false,
  requireToken = false,
}: {
  req: ServerRequest;
  limit?: number;
  force?: boolean;
  requireToken?: boolean;
}): Promise<DapiProxy[]> => {
  const baseUrl = getDapiBaseUrl();
  if (!baseUrl) {
    return [];
  }

  const accessToken = getDapiAccessToken(req);
  if (!accessToken) {
    if (requireToken) {
      throw new Error('DAPI access token not available for request');
    }
    return [];
  }

  const cacheKey = getDapiCacheKey(req);
  const cacheConfig = getDapiCacheConfig(req);
  if (cacheConfig.enabled && !force && cacheKey) {
    const cached = await dapiProxyCache.get(cacheKey);
    if (cached) {
      return cached as DapiProxy[];
    }
  }

  try {
    const client = createDapiClient({ baseUrl, accessToken });
    const proxies = await client.listProxies({ limit });
    const normalized = proxies
      .map((proxy) => normalizeProxy(proxy))
      .filter((proxy): proxy is DapiProxy => proxy !== null);

    if (cacheConfig.enabled && cacheKey) {
      await dapiProxyCache.set(cacheKey, normalized, cacheConfig.ttlMs);
    }

    return normalized;
  } catch (error) {
    logger.error('[DAPI] Failed to fetch proxies:', error);
    if (requireToken) {
      throw error;
    }
    return [];
  }
};

export const mapDapiProxiesToModels = (proxies: DapiProxy[]): string[] => {
  const names = proxies
    .map((proxy) => proxy?.name)
    .filter((name): name is string => typeof name === 'string' && name.trim().length > 0);
  return Array.from(new Set(names));
};

export const resolveDapiProxy = (
  proxies: DapiProxy[],
  identifier?: string | null,
): DapiProxy | undefined => {
  if (!identifier) {
    return undefined;
  }

  const byId = proxies.find((proxy) => proxy.id === identifier);
  if (byId) {
    return byId;
  }

  const byName = proxies.find((proxy) => proxy.name === identifier);
  if (byName) {
    return byName;
  }

  const normalized = identifier.toLowerCase();
  return proxies.find((proxy) => proxy.name.toLowerCase() === normalized);
};

export const getDapiProxyById = async ({
  req,
  proxyId,
}: {
  req: ServerRequest;
  proxyId: string;
}): Promise<DapiProxy | null> => {
  const baseUrl = getDapiBaseUrl();
  if (!baseUrl) {
    return null;
  }

  const accessToken = getDapiAccessToken(req);
  if (!accessToken) {
    return null;
  }

  try {
    const client = createDapiClient({ baseUrl, accessToken });
    const proxy = await client.getProxy({ proxyId });
    return normalizeProxy(proxy);
  } catch (error) {
    logger.error('[DAPI] Failed to fetch proxy details:', error);
    return null;
  }
};

const dapiModelsCache = standardCache(DAPI_MODELS_CACHE_NAMESPACE, DAPI_DEFAULT_CACHE_TTL_MS);

export const fetchDapiProxyModels = async ({
  proxy,
  force = false,
  req,
}: {
  proxy: DapiProxy;
  force?: boolean;
  req?: ServerRequest;
}): Promise<string[]> => {
  const baseURL = proxy.proxy_oapi_url ?? proxy.api_url;
  const apiKey = proxy.proxy_oapi_key ?? proxy.api_key;

  if (!baseURL) {
    logger.warn(`[DAPI] No API URL for proxy ${proxy.name}`);
    return [];
  }

  const cacheKey = `proxy:${proxy.id}`;
  const cacheConfig = getDapiCacheConfig(req);
  if (cacheConfig.enabled && !force) {
    const cached = await dapiModelsCache.get(cacheKey);
    if (cached) {
      return cached as string[];
    }
  }

  try {
    // Append /models to the base URL (base URL typically already includes /v1)
    const normalizedBase = baseURL.replace(/\/+$/, '');
    const url = `${normalizedBase}/models`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      logger.warn(`[DAPI] Failed to fetch models from proxy ${proxy.name}: ${response.status}`);
      return [];
    }

    const data = (await response.json()) as { data?: Array<{ id?: string }> };
    const models = (data.data ?? [])
      .map((model) => model.id)
      .filter((id): id is string => typeof id === 'string' && id.trim().length > 0);

    if (cacheConfig.enabled) {
      await dapiModelsCache.set(cacheKey, models, cacheConfig.ttlMs);
    }
    return models;
  } catch (error) {
    logger.error(`[DAPI] Error fetching models from proxy ${proxy.name}:`, error);
    return [];
  }
};
