import axios from 'axios';
import type { DapiClient, DapiProxy } from './types';

const DEFAULT_TIMEOUT_MS = 10000;

export const getDapiBaseUrl = (): string | null => {
  const baseUrl = process.env.DAPI_BASE_URL;
  if (!baseUrl) {
    return null;
  }
  return baseUrl.replace(/\/+$/, '');
};

export const buildDapiApiBaseUrl = (baseUrl: string): string => {
  const normalized = baseUrl.replace(/\/+$/, '');
  if (normalized.endsWith('/api/v1')) {
    return normalized;
  }
  return `${normalized}/api/v1`;
};

export const createDapiClient = ({
  baseUrl,
  accessToken,
  timeoutMs = DEFAULT_TIMEOUT_MS,
}: {
  baseUrl: string;
  accessToken: string;
  timeoutMs?: number;
}): DapiClient => {
  const instance = axios.create({
    baseURL: buildDapiApiBaseUrl(baseUrl),
    timeout: timeoutMs,
  });

  return {
    listProxies: async ({ limit }: { limit?: number } = {}): Promise<DapiProxy[]> => {
      const response = await instance.get('/proxies', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: limit ? { limit } : undefined,
      });
      return response.data as DapiProxy[];
    },
    getProxy: async ({ proxyId }: { proxyId: string }): Promise<DapiProxy> => {
      const response = await instance.get(`/proxies/${proxyId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data as DapiProxy;
    },
  };
};
