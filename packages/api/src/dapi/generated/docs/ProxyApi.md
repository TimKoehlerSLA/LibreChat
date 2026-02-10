# ProxyApi

All URIs are relative to */api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**countProxies**](#countproxies) | **GET** /proxies/count | Count proxies|
|[**createProxy**](#createproxy) | **POST** /proxies | Create a proxy configuration|
|[**deleteProxyById**](#deleteproxybyid) | **DELETE** /proxies/{proxy_id} | Delete a proxy by ID|
|[**getProxies**](#getproxies) | **GET** /proxies | Get all proxy configurations|
|[**getProxyById**](#getproxybyid) | **GET** /proxies/{proxy_id} | Get a proxy by ID|
|[**getProxyByName**](#getproxybyname) | **GET** /proxies/by-name | Get a proxy by name|
|[**getProxyByProxyKey**](#getproxybyproxykey) | **GET** /proxies/by-proxy-key | Get a proxy by proxy key|
|[**updateProxy**](#updateproxy) | **PUT** /proxies/{proxy_id} | Update a proxy by ID|

# **countProxies**
> CountResponse countProxies()

Returns the total number of proxy configurations for the authenticated tenant.

### Example

```typescript
import {
    ProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

const { status, data } = await apiInstance.countProxies();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CountResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProxy**
> Proxy createProxy(proxyCreate)

Creates a new proxy configuration for the authenticated tenant

### Example

```typescript
import {
    ProxyApi,
    Configuration,
    ProxyCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

let proxyCreate: ProxyCreate; //

const { status, data } = await apiInstance.createProxy(
    proxyCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyCreate** | **ProxyCreate**|  | |


### Return type

**Proxy**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteProxyById**
> any deleteProxyById()

Deletes the proxy configuration with the given ID for the authenticated tenant

### Example

```typescript
import {
    ProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

let proxyId: string; //The ID of the proxy to delete (default to undefined)

const { status, data } = await apiInstance.deleteProxyById(
    proxyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyId** | [**string**] | The ID of the proxy to delete | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProxies**
> Array<Proxy> getProxies()

Returns all proxy configurations for the authenticated tenant

### Example

```typescript
import {
    ProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

let limit: number; //Maximum number of proxies to return (optional) (default to undefined)

const { status, data } = await apiInstance.getProxies(
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Maximum number of proxies to return | (optional) defaults to undefined|


### Return type

**Array<Proxy>**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProxyById**
> Proxy getProxyById()

Returns the proxy configuration with the given ID for the authenticated tenant

### Example

```typescript
import {
    ProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

let proxyId: string; //The ID of the proxy to get (default to undefined)

const { status, data } = await apiInstance.getProxyById(
    proxyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyId** | [**string**] | The ID of the proxy to get | defaults to undefined|


### Return type

**Proxy**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProxyByName**
> Proxy getProxyByName()

Returns a proxy configuration matching the provided name for the authenticated tenant

### Example

```typescript
import {
    ProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

let name: string; //The name of the proxy to get (default to undefined)

const { status, data } = await apiInstance.getProxyByName(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | The name of the proxy to get | defaults to undefined|


### Return type

**Proxy**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getProxyByProxyKey**
> Proxy getProxyByProxyKey()

Returns the proxy configuration matching the provided proxy key for the authenticated tenant

### Example

```typescript
import {
    ProxyApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

let proxyKey: string; //The proxy key to look up (default to undefined)

const { status, data } = await apiInstance.getProxyByProxyKey(
    proxyKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyKey** | [**string**] | The proxy key to look up | defaults to undefined|


### Return type

**Proxy**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateProxy**
> Proxy updateProxy(proxyUpdate)

Updates the proxy configuration with the given ID for the authenticated tenant

### Example

```typescript
import {
    ProxyApi,
    Configuration,
    ProxyUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new ProxyApi(configuration);

let proxyId: string; //The ID of the proxy to update (default to undefined)
let proxyUpdate: ProxyUpdate; //

const { status, data } = await apiInstance.updateProxy(
    proxyId,
    proxyUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyUpdate** | **ProxyUpdate**|  | |
| **proxyId** | [**string**] | The ID of the proxy to update | defaults to undefined|


### Return type

**Proxy**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

