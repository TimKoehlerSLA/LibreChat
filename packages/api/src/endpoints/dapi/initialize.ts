import type { BaseInitializeParams, InitializeResultBase, OpenAIConfigOptions } from '~/types';
import { getOpenAIConfig } from '~/endpoints/openai/config';
import { isDapiEnabled, listDapiProxies, resolveDapiProxy, getDapiProxyById } from '~/dapi';

/**
 * Extract proxy identifier from endpoint name.
 * Handles both default format (dapi:proxy-name) and custom prefix format (custom:proxy-name).
 */
const extractProxyIdentifier = (endpoint: string): string | null => {
  const colonIndex = endpoint.indexOf(':');
  if (colonIndex === -1 || colonIndex === endpoint.length - 1) {
    return null;
  }
  return endpoint.slice(colonIndex + 1);
};

export async function initializeDapi({
  req,
  endpoint,
  model_parameters,
}: BaseInitializeParams): Promise<InitializeResultBase> {
  if (!isDapiEnabled()) {
    throw new Error('DAPI is not configured');
  }

  // Extract proxy identifier from endpoint name (prefix:proxy-name format)
  const proxyIdentifier = extractProxyIdentifier(endpoint);
  if (!proxyIdentifier) {
    throw new Error('Invalid DAPI endpoint format');
  }

  const modelName = model_parameters?.model as string | undefined;
  if (!modelName) {
    throw new Error('Model not selected');
  }

  const proxies = await listDapiProxies({ req, requireToken: true });
  const proxy = resolveDapiProxy(proxies, proxyIdentifier);

  if (!proxy) {
    throw new Error(`DAPI proxy not found: ${proxyIdentifier}`);
  }

  let resolvedProxy = proxy;
  if (!resolvedProxy.proxy_oapi_key || !resolvedProxy.proxy_oapi_url) {
    const hydrated = await getDapiProxyById({ req, proxyId: resolvedProxy.id });
    if (hydrated) {
      resolvedProxy = {
        ...resolvedProxy,
        ...hydrated,
      };
    }
  }

  const apiKey = resolvedProxy.proxy_oapi_key ?? resolvedProxy.api_key;
  const baseURL = resolvedProxy.proxy_oapi_url ?? resolvedProxy.api_url;

  if (!apiKey || !baseURL) {
    throw new Error('DAPI proxy credentials missing');
  }

  const clientOptions: OpenAIConfigOptions = {
    proxy: process.env.PROXY ?? undefined,
    reverseProxyUrl: baseURL,
    streaming: true,
  };

  const modelOptions = {
    ...(model_parameters ?? {}),
    model: modelName,
    user: req.user?.id,
  };

  const finalClientOptions: OpenAIConfigOptions = {
    ...clientOptions,
    modelOptions,
  };

  const options = getOpenAIConfig(apiKey, finalClientOptions, endpoint);
  (options as InitializeResultBase).useLegacyContent = true;
  return options;
}
