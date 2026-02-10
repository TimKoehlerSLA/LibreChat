# ProviderApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addProviderProxyRelation**](ProviderApi.md#addproviderproxyrelation) | **POST** /providers/{provider_id}/proxies/{proxy_id} | Link provider to proxy |
| [**countProviders**](ProviderApi.md#countproviders) | **GET** /providers/count | Count providers |
| [**createProviderGlobal**](ProviderApi.md#createproviderglobal) | **POST** /providers | Create provider |
| [**deleteProviderGlobal**](ProviderApi.md#deleteproviderglobal) | **DELETE** /providers/{provider_id} | Delete provider |
| [**getProvider**](ProviderApi.md#getprovider) | **GET** /providers/{provider_id} | Get provider by ID |
| [**listProviders**](ProviderApi.md#listproviders) | **GET** /providers | List providers |
| [**removeProviderProxyRelation**](ProviderApi.md#removeproviderproxyrelation) | **DELETE** /providers/{provider_id}/proxies/{proxy_id} | Unlink provider from proxy |
| [**setProviderDefaultForProxy**](ProviderApi.md#setproviderdefaultforproxy) | **PUT** /providers/{provider_id}/proxies/{proxy_id}/set-default | Set provider as default for a proxy |
| [**updateProviderGlobal**](ProviderApi.md#updateproviderglobal) | **PUT** /providers/{provider_id} | Update provider |



## addProviderProxyRelation

> Provider addProviderProxyRelation(providerId, proxyId)

Link provider to proxy

Creates a relation between a provider and a proxy configuration.

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { AddProviderProxyRelationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | Provider ID
    providerId: providerId_example,
    // string | Proxy ID
    proxyId: proxyId_example,
  } satisfies AddProviderProxyRelationRequest;

  try {
    const data = await api.addProviderProxyRelation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **providerId** | `string` | Provider ID | [Defaults to `undefined`] |
| **proxyId** | `string` | Proxy ID | [Defaults to `undefined`] |

### Return type

[**Provider**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## countProviders

> CountResponse countProviders(proxyId)

Count providers

Returns the total number of provider configurations for the authenticated tenant. Optionally filter by proxy_id to count only providers linked to a given proxy.

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { CountProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | Optional proxy ID to filter providers by relationship (optional)
    proxyId: proxyId_example,
  } satisfies CountProvidersRequest;

  try {
    const data = await api.countProviders(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **proxyId** | `string` | Optional proxy ID to filter providers by relationship | [Optional] [Defaults to `undefined`] |

### Return type

[**CountResponse**](CountResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createProviderGlobal

> Provider createProviderGlobal(providerCreate)

Create provider

Creates a new provider configuration independent of any proxy.

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { CreateProviderGlobalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // ProviderCreate
    providerCreate: ...,
  } satisfies CreateProviderGlobalRequest;

  try {
    const data = await api.createProviderGlobal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **providerCreate** | [ProviderCreate](ProviderCreate.md) |  | |

### Return type

[**Provider**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteProviderGlobal

> Provider deleteProviderGlobal(providerId)

Delete provider

Deletes a provider configuration. Any relations to proxies are removed automatically via cascading deletes.

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { DeleteProviderGlobalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | The ID of the provider to delete
    providerId: providerId_example,
  } satisfies DeleteProviderGlobalRequest;

  try {
    const data = await api.deleteProviderGlobal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **providerId** | `string` | The ID of the provider to delete | [Defaults to `undefined`] |

### Return type

[**Provider**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProvider

> Provider getProvider(providerId, proxyId)

Get provider by ID

Returns a provider configuration by ID. Optionally provide proxy_id to ensure the provider is linked to that proxy (proxy must belong to the authenticated tenant).

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { GetProviderRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | The ID of the provider to get
    providerId: providerId_example,
    // string | Optional proxy ID to filter providers by relationship (optional)
    proxyId: proxyId_example,
  } satisfies GetProviderRequest;

  try {
    const data = await api.getProvider(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **providerId** | `string` | The ID of the provider to get | [Defaults to `undefined`] |
| **proxyId** | `string` | Optional proxy ID to filter providers by relationship | [Optional] [Defaults to `undefined`] |

### Return type

[**Provider**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listProviders

> Array&lt;Provider&gt; listProviders(proxyId, limit)

List providers

Returns provider configurations for the authenticated tenant. Optionally filter by proxy_id to return only providers linked to a given proxy. You can also limit the number of returned items.

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { ListProvidersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | Optional proxy ID to filter providers by relationship (optional)
    proxyId: proxyId_example,
    // number | Maximum number of providers to return (optional)
    limit: 56,
  } satisfies ListProvidersRequest;

  try {
    const data = await api.listProviders(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **proxyId** | `string` | Optional proxy ID to filter providers by relationship | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of providers to return | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Provider&gt;**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeProviderProxyRelation

> Provider removeProviderProxyRelation(providerId, proxyId)

Unlink provider from proxy

Removes the relation between a provider and a proxy configuration.

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { RemoveProviderProxyRelationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | Provider ID
    providerId: providerId_example,
    // string | Proxy ID
    proxyId: proxyId_example,
  } satisfies RemoveProviderProxyRelationRequest;

  try {
    const data = await api.removeProviderProxyRelation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **providerId** | `string` | Provider ID | [Defaults to `undefined`] |
| **proxyId** | `string` | Proxy ID | [Defaults to `undefined`] |

### Return type

[**Provider**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setProviderDefaultForProxy

> Provider setProviderDefaultForProxy(providerId, proxyId)

Set provider as default for a proxy

Marks the provider as the default for the given proxy (enforces one default per proxy).

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { SetProviderDefaultForProxyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | Provider ID
    providerId: providerId_example,
    // string | Proxy ID
    proxyId: proxyId_example,
  } satisfies SetProviderDefaultForProxyRequest;

  try {
    const data = await api.setProviderDefaultForProxy(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **providerId** | `string` | Provider ID | [Defaults to `undefined`] |
| **proxyId** | `string` | Proxy ID | [Defaults to `undefined`] |

### Return type

[**Provider**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateProviderGlobal

> Provider updateProviderGlobal(providerId, providerUpdate)

Update provider

Updates a provider configuration independent of any proxy.

### Example

```ts
import {
  Configuration,
  ProviderApi,
} from '';
import type { UpdateProviderGlobalRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProviderApi(config);

  const body = {
    // string | The ID of the provider to update
    providerId: providerId_example,
    // ProviderUpdate
    providerUpdate: ...,
  } satisfies UpdateProviderGlobalRequest;

  try {
    const data = await api.updateProviderGlobal(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **providerId** | `string` | The ID of the provider to update | [Defaults to `undefined`] |
| **providerUpdate** | [ProviderUpdate](ProviderUpdate.md) |  | |

### Return type

[**Provider**](Provider.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

