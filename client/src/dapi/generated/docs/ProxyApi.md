# ProxyApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**countProxies**](ProxyApi.md#countproxies) | **GET** /proxies/count | Count proxies |
| [**createProxy**](ProxyApi.md#createproxy) | **POST** /proxies | Create a proxy configuration |
| [**deleteProxyById**](ProxyApi.md#deleteproxybyid) | **DELETE** /proxies/{proxy_id} | Delete a proxy by ID |
| [**getProxies**](ProxyApi.md#getproxies) | **GET** /proxies | Get all proxy configurations |
| [**getProxyById**](ProxyApi.md#getproxybyid) | **GET** /proxies/{proxy_id} | Get a proxy by ID |
| [**getProxyByName**](ProxyApi.md#getproxybyname) | **GET** /proxies/by-name | Get a proxy by name |
| [**getProxyByProxyKey**](ProxyApi.md#getproxybyproxykey) | **GET** /proxies/by-proxy-key | Get a proxy by proxy key |
| [**updateProxy**](ProxyApi.md#updateproxy) | **PUT** /proxies/{proxy_id} | Update a proxy by ID |



## countProxies

> CountResponse countProxies()

Count proxies

Returns the total number of proxy configurations for the authenticated tenant.

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { CountProxiesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  try {
    const data = await api.countProxies();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createProxy

> Proxy createProxy(proxyCreate)

Create a proxy configuration

Creates a new proxy configuration for the authenticated tenant

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { CreateProxyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  const body = {
    // ProxyCreate
    proxyCreate: ...,
  } satisfies CreateProxyRequest;

  try {
    const data = await api.createProxy(body);
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
| **proxyCreate** | [ProxyCreate](ProxyCreate.md) |  | |

### Return type

[**Proxy**](Proxy.md)

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


## deleteProxyById

> any deleteProxyById(proxyId)

Delete a proxy by ID

Deletes the proxy configuration with the given ID for the authenticated tenant

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { DeleteProxyByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  const body = {
    // string | The ID of the proxy to delete
    proxyId: proxyId_example,
  } satisfies DeleteProxyByIdRequest;

  try {
    const data = await api.deleteProxyById(body);
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
| **proxyId** | `string` | The ID of the proxy to delete | [Defaults to `undefined`] |

### Return type

**any**

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


## getProxies

> Array&lt;Proxy&gt; getProxies(limit)

Get all proxy configurations

Returns all proxy configurations for the authenticated tenant

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { GetProxiesRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  const body = {
    // number | Maximum number of proxies to return (optional)
    limit: 56,
  } satisfies GetProxiesRequest;

  try {
    const data = await api.getProxies(body);
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
| **limit** | `number` | Maximum number of proxies to return | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Proxy&gt;**](Proxy.md)

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


## getProxyById

> Proxy getProxyById(proxyId)

Get a proxy by ID

Returns the proxy configuration with the given ID for the authenticated tenant

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { GetProxyByIdRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  const body = {
    // string | The ID of the proxy to get
    proxyId: proxyId_example,
  } satisfies GetProxyByIdRequest;

  try {
    const data = await api.getProxyById(body);
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
| **proxyId** | `string` | The ID of the proxy to get | [Defaults to `undefined`] |

### Return type

[**Proxy**](Proxy.md)

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


## getProxyByName

> Proxy getProxyByName(name)

Get a proxy by name

Returns a proxy configuration matching the provided name for the authenticated tenant

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { GetProxyByNameRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  const body = {
    // string | The name of the proxy to get
    name: name_example,
  } satisfies GetProxyByNameRequest;

  try {
    const data = await api.getProxyByName(body);
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
| **name** | `string` | The name of the proxy to get | [Defaults to `undefined`] |

### Return type

[**Proxy**](Proxy.md)

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


## getProxyByProxyKey

> Proxy getProxyByProxyKey(proxyKey)

Get a proxy by proxy key

Returns the proxy configuration matching the provided proxy key for the authenticated tenant

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { GetProxyByProxyKeyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  const body = {
    // string | The proxy key to look up
    proxyKey: proxyKey_example,
  } satisfies GetProxyByProxyKeyRequest;

  try {
    const data = await api.getProxyByProxyKey(body);
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
| **proxyKey** | `string` | The proxy key to look up | [Defaults to `undefined`] |

### Return type

[**Proxy**](Proxy.md)

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


## updateProxy

> Proxy updateProxy(proxyId, proxyUpdate)

Update a proxy by ID

Updates the proxy configuration with the given ID for the authenticated tenant

### Example

```ts
import {
  Configuration,
  ProxyApi,
} from '';
import type { UpdateProxyRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProxyApi(config);

  const body = {
    // string | The ID of the proxy to update
    proxyId: proxyId_example,
    // ProxyUpdate
    proxyUpdate: ...,
  } satisfies UpdateProxyRequest;

  try {
    const data = await api.updateProxy(body);
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
| **proxyId** | `string` | The ID of the proxy to update | [Defaults to `undefined`] |
| **proxyUpdate** | [ProxyUpdate](ProxyUpdate.md) |  | |

### Return type

[**Proxy**](Proxy.md)

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

