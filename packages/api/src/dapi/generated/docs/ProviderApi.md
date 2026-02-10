# ProviderApi

All URIs are relative to */api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addProviderProxyRelation**](#addproviderproxyrelation) | **POST** /providers/{provider_id}/proxies/{proxy_id} | Link provider to proxy|
|[**countProviders**](#countproviders) | **GET** /providers/count | Count providers|
|[**createProviderGlobal**](#createproviderglobal) | **POST** /providers | Create provider|
|[**deleteProviderGlobal**](#deleteproviderglobal) | **DELETE** /providers/{provider_id} | Delete provider|
|[**getProvider**](#getprovider) | **GET** /providers/{provider_id} | Get provider by ID|
|[**listProviders**](#listproviders) | **GET** /providers | List providers|
|[**removeProviderProxyRelation**](#removeproviderproxyrelation) | **DELETE** /providers/{provider_id}/proxies/{proxy_id} | Unlink provider from proxy|
|[**setProviderDefaultForProxy**](#setproviderdefaultforproxy) | **PUT** /providers/{provider_id}/proxies/{proxy_id}/set-default | Set provider as default for a proxy|
|[**updateProviderGlobal**](#updateproviderglobal) | **PUT** /providers/{provider_id} | Update provider|

# **addProviderProxyRelation**
> Provider addProviderProxyRelation()

Creates a relation between a provider and a proxy configuration.

### Example

```typescript
import {
    ProviderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let providerId: string; //Provider ID (default to undefined)
let proxyId: string; //Proxy ID (default to undefined)

const { status, data } = await apiInstance.addProviderProxyRelation(
    providerId,
    proxyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerId** | [**string**] | Provider ID | defaults to undefined|
| **proxyId** | [**string**] | Proxy ID | defaults to undefined|


### Return type

**Provider**

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

# **countProviders**
> CountResponse countProviders()

Returns the total number of provider configurations for the authenticated tenant. Optionally filter by proxy_id to count only providers linked to a given proxy.

### Example

```typescript
import {
    ProviderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let proxyId: string; //Optional proxy ID to filter providers by relationship (optional) (default to undefined)

const { status, data } = await apiInstance.countProviders(
    proxyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyId** | [**string**] | Optional proxy ID to filter providers by relationship | (optional) defaults to undefined|


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
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createProviderGlobal**
> Provider createProviderGlobal(providerCreate)

Creates a new provider configuration independent of any proxy.

### Example

```typescript
import {
    ProviderApi,
    Configuration,
    ProviderCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let providerCreate: ProviderCreate; //

const { status, data } = await apiInstance.createProviderGlobal(
    providerCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerCreate** | **ProviderCreate**|  | |


### Return type

**Provider**

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

# **deleteProviderGlobal**
> Provider deleteProviderGlobal()

Deletes a provider configuration. Any relations to proxies are removed automatically via cascading deletes.

### Example

```typescript
import {
    ProviderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let providerId: string; //The ID of the provider to delete (default to undefined)

const { status, data } = await apiInstance.deleteProviderGlobal(
    providerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerId** | [**string**] | The ID of the provider to delete | defaults to undefined|


### Return type

**Provider**

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

# **getProvider**
> Provider getProvider()

Returns a provider configuration by ID. Optionally provide proxy_id to ensure the provider is linked to that proxy (proxy must belong to the authenticated tenant).

### Example

```typescript
import {
    ProviderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let providerId: string; //The ID of the provider to get (default to undefined)
let proxyId: string; //Optional proxy ID to filter providers by relationship (optional) (default to undefined)

const { status, data } = await apiInstance.getProvider(
    providerId,
    proxyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerId** | [**string**] | The ID of the provider to get | defaults to undefined|
| **proxyId** | [**string**] | Optional proxy ID to filter providers by relationship | (optional) defaults to undefined|


### Return type

**Provider**

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

# **listProviders**
> Array<Provider> listProviders()

Returns provider configurations for the authenticated tenant. Optionally filter by proxy_id to return only providers linked to a given proxy. You can also limit the number of returned items.

### Example

```typescript
import {
    ProviderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let proxyId: string; //Optional proxy ID to filter providers by relationship (optional) (default to undefined)
let limit: number; //Maximum number of providers to return (optional) (default to undefined)

const { status, data } = await apiInstance.listProviders(
    proxyId,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **proxyId** | [**string**] | Optional proxy ID to filter providers by relationship | (optional) defaults to undefined|
| **limit** | [**number**] | Maximum number of providers to return | (optional) defaults to undefined|


### Return type

**Array<Provider>**

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

# **removeProviderProxyRelation**
> Provider removeProviderProxyRelation()

Removes the relation between a provider and a proxy configuration.

### Example

```typescript
import {
    ProviderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let providerId: string; //Provider ID (default to undefined)
let proxyId: string; //Proxy ID (default to undefined)

const { status, data } = await apiInstance.removeProviderProxyRelation(
    providerId,
    proxyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerId** | [**string**] | Provider ID | defaults to undefined|
| **proxyId** | [**string**] | Proxy ID | defaults to undefined|


### Return type

**Provider**

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

# **setProviderDefaultForProxy**
> Provider setProviderDefaultForProxy()

Marks the provider as the default for the given proxy (enforces one default per proxy).

### Example

```typescript
import {
    ProviderApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let providerId: string; //Provider ID (default to undefined)
let proxyId: string; //Proxy ID (default to undefined)

const { status, data } = await apiInstance.setProviderDefaultForProxy(
    providerId,
    proxyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerId** | [**string**] | Provider ID | defaults to undefined|
| **proxyId** | [**string**] | Proxy ID | defaults to undefined|


### Return type

**Provider**

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

# **updateProviderGlobal**
> Provider updateProviderGlobal(providerUpdate)

Updates a provider configuration independent of any proxy.

### Example

```typescript
import {
    ProviderApi,
    Configuration,
    ProviderUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new ProviderApi(configuration);

let providerId: string; //The ID of the provider to update (default to undefined)
let providerUpdate: ProviderUpdate; //

const { status, data } = await apiInstance.updateProviderGlobal(
    providerId,
    providerUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **providerUpdate** | **ProviderUpdate**|  | |
| **providerId** | [**string**] | The ID of the provider to update | defaults to undefined|


### Return type

**Provider**

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

