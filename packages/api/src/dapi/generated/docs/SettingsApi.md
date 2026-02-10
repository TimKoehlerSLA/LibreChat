# SettingsApi

All URIs are relative to */api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createMembership**](#createmembership) | **POST** /settings/memberships | Create membership|
|[**createProfile**](#createprofile) | **POST** /settings/profile | Create profile|
|[**createTenant**](#createtenant) | **POST** /settings/tenants | Create tenant|
|[**deleteMembership**](#deletemembership) | **DELETE** /settings/memberships/{membership_id} | Delete membership|
|[**deleteTenant**](#deletetenant) | **DELETE** /settings/tenants/{tenant_id} | Delete tenant|
|[**getProfile**](#getprofile) | **GET** /settings/profile | Get profile|
|[**getTenantMemberships**](#gettenantmemberships) | **GET** /settings/memberships | Get memberships of tenant|
|[**getTenants**](#gettenants) | **GET** /settings/tenants | Get tenants of user|
|[**updateMemberships**](#updatememberships) | **POST** /settings/memberships/{membership_id} | Update membership|
|[**updateProfile**](#updateprofile) | **PUT** /settings/profile | Update profile of current user|
|[**updateTenant**](#updatetenant) | **PUT** /settings/tenants/{tenant_id} | Update tenant|

# **createMembership**
> Membership createMembership(membershipCreate)


### Example

```typescript
import {
    SettingsApi,
    Configuration,
    MembershipCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let membershipCreate: MembershipCreate; //

const { status, data } = await apiInstance.createMembership(
    membershipCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipCreate** | **MembershipCreate**|  | |


### Return type

**Membership**

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

# **createProfile**
> any createProfile(profileCreate)


### Example

```typescript
import {
    SettingsApi,
    Configuration,
    ProfileCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let profileCreate: ProfileCreate; //

const { status, data } = await apiInstance.createProfile(
    profileCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileCreate** | **ProfileCreate**|  | |


### Return type

**any**

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

# **createTenant**
> any createTenant(tenantCreate)


### Example

```typescript
import {
    SettingsApi,
    Configuration,
    TenantCreate
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let tenantCreate: TenantCreate; //

const { status, data } = await apiInstance.createTenant(
    tenantCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantCreate** | **TenantCreate**|  | |


### Return type

**any**

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

# **deleteMembership**
> any deleteMembership()


### Example

```typescript
import {
    SettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let membershipId: string; //Membership ID (default to undefined)

const { status, data } = await apiInstance.deleteMembership(
    membershipId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipId** | [**string**] | Membership ID | defaults to undefined|


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

# **deleteTenant**
> any deleteTenant()


### Example

```typescript
import {
    SettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let tenantId: string; //Tenant ID (default to undefined)

const { status, data } = await apiInstance.deleteTenant(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] | Tenant ID | defaults to undefined|


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

# **getProfile**
> Profile getProfile()


### Example

```typescript
import {
    SettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let userId: string; //User Id (optional) (default to undefined)

const { status, data } = await apiInstance.getProfile(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] | User Id | (optional) defaults to undefined|


### Return type

**Profile**

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

# **getTenantMemberships**
> Array<Membership> getTenantMemberships()


### Example

```typescript
import {
    SettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let tenantId: string; //Tenant ID (default to undefined)

const { status, data } = await apiInstance.getTenantMemberships(
    tenantId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantId** | [**string**] | Tenant ID | defaults to undefined|


### Return type

**Array<Membership>**

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

# **getTenants**
> Array<Tenant> getTenants()


### Example

```typescript
import {
    SettingsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

const { status, data } = await apiInstance.getTenants();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Tenant>**

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

# **updateMemberships**
> any updateMemberships(membershipUpdate)


### Example

```typescript
import {
    SettingsApi,
    Configuration,
    MembershipUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let membershipId: string; //Membership ID (default to undefined)
let membershipUpdate: MembershipUpdate; //

const { status, data } = await apiInstance.updateMemberships(
    membershipId,
    membershipUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipUpdate** | **MembershipUpdate**|  | |
| **membershipId** | [**string**] | Membership ID | defaults to undefined|


### Return type

**any**

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

# **updateProfile**
> any updateProfile(profileUpdate)


### Example

```typescript
import {
    SettingsApi,
    Configuration,
    ProfileUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let profileUpdate: ProfileUpdate; //

const { status, data } = await apiInstance.updateProfile(
    profileUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileUpdate** | **ProfileUpdate**|  | |


### Return type

**any**

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

# **updateTenant**
> Tenant updateTenant(tenantUpdate)


### Example

```typescript
import {
    SettingsApi,
    Configuration,
    TenantUpdate
} from './api';

const configuration = new Configuration();
const apiInstance = new SettingsApi(configuration);

let tenantId: string; //Tenant ID (default to undefined)
let tenantUpdate: TenantUpdate; //

const { status, data } = await apiInstance.updateTenant(
    tenantId,
    tenantUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tenantUpdate** | **TenantUpdate**|  | |
| **tenantId** | [**string**] | Tenant ID | defaults to undefined|


### Return type

**Tenant**

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

