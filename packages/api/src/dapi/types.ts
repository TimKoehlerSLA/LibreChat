export type DapiProxy = {
  id: string;
  name: string;
  proxy_oapi_url?: string;
  proxy_oapi_key?: string;
  api_url?: string;
  api_key?: string;
};

export type DapiClient = {
  listProxies: (params?: { limit?: number }) => Promise<DapiProxy[]>;
  getProxy: (params: { proxyId: string }) => Promise<DapiProxy>;
};
