import type { DapiClient, DapiProxy } from './types';

const normalizeBaseUrl = (baseUrl: string): string => baseUrl.replace(/\/+$/, '');

const buildDapiApiBaseUrl = (baseUrl: string): string => {
  const normalized = normalizeBaseUrl(baseUrl);
  if (normalized.endsWith('/api/v1')) {
    return normalized;
  }
  return `${normalized}/api/v1`;
};

export const createDapiClient = ({
  baseUrl,
  accessToken,
  fetchImpl = fetch,
}: {
  baseUrl: string;
  accessToken: string;
  fetchImpl?: typeof fetch;
}): DapiClient => {
  const apiBaseUrl = buildDapiApiBaseUrl(baseUrl);

  return {
    listProxies: async ({ limit }: { limit?: number } = {}): Promise<DapiProxy[]> => {
      const url = new URL(`${apiBaseUrl}/proxies`);
      if (limit) {
        url.searchParams.set('limit', String(limit));
      }

      const response = await fetchImpl(url.toString(), {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`DAPI request failed (${response.status})`);
      }

      return (await response.json()) as DapiProxy[];
    },
  };
};
