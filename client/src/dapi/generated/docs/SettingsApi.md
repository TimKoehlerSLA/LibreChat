# SettingsApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMembership**](SettingsApi.md#createmembership) | **POST** /settings/memberships | Create membership |
| [**createProfile**](SettingsApi.md#createprofile) | **POST** /settings/profile | Create profile |
| [**createTenant**](SettingsApi.md#createtenant) | **POST** /settings/tenants | Create tenant |
| [**deleteMembership**](SettingsApi.md#deletemembership) | **DELETE** /settings/memberships/{membership_id} | Delete membership |
| [**deleteTenant**](SettingsApi.md#deletetenant) | **DELETE** /settings/tenants/{tenant_id} | Delete tenant |
| [**getProfile**](SettingsApi.md#getprofile) | **GET** /settings/profile | Get profile |
| [**getTenantMemberships**](SettingsApi.md#gettenantmemberships) | **GET** /settings/memberships | Get memberships of tenant |
| [**getTenants**](SettingsApi.md#gettenants) | **GET** /settings/tenants | Get tenants of user |
| [**updateMemberships**](SettingsApi.md#updatememberships) | **POST** /settings/memberships/{membership_id} | Update membership |
| [**updateProfile**](SettingsApi.md#updateprofile) | **PUT** /settings/profile | Update profile of current user |
| [**updateTenant**](SettingsApi.md#updatetenant) | **PUT** /settings/tenants/{tenant_id} | Update tenant |



## createMembership

> Membership createMembership(membershipCreate)

Create membership

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { CreateMembershipRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // MembershipCreate
    membershipCreate: ...,
  } satisfies CreateMembershipRequest;

  try {
    const data = await api.createMembership(body);
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
| **membershipCreate** | [MembershipCreate](MembershipCreate.md) |  | |

### Return type

[**Membership**](Membership.md)

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


## createProfile

> any createProfile(profileCreate)

Create profile

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { CreateProfileRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // ProfileCreate
    profileCreate: ...,
  } satisfies CreateProfileRequest;

  try {
    const data = await api.createProfile(body);
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
| **profileCreate** | [ProfileCreate](ProfileCreate.md) |  | |

### Return type

**any**

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


## createTenant

> any createTenant(tenantCreate)

Create tenant

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { CreateTenantRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // TenantCreate
    tenantCreate: ...,
  } satisfies CreateTenantRequest;

  try {
    const data = await api.createTenant(body);
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
| **tenantCreate** | [TenantCreate](TenantCreate.md) |  | |

### Return type

**any**

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


## deleteMembership

> any deleteMembership(membershipId)

Delete membership

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { DeleteMembershipRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | Membership ID
    membershipId: membershipId_example,
  } satisfies DeleteMembershipRequest;

  try {
    const data = await api.deleteMembership(body);
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
| **membershipId** | `string` | Membership ID | [Defaults to `undefined`] |

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


## deleteTenant

> any deleteTenant(tenantId)

Delete tenant

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { DeleteTenantRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | Tenant ID
    tenantId: tenantId_example,
  } satisfies DeleteTenantRequest;

  try {
    const data = await api.deleteTenant(body);
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
| **tenantId** | `string` | Tenant ID | [Defaults to `undefined`] |

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


## getProfile

> Profile getProfile(userId)

Get profile

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { GetProfileRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | User Id (optional)
    userId: userId_example,
  } satisfies GetProfileRequest;

  try {
    const data = await api.getProfile(body);
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
| **userId** | `string` | User Id | [Optional] [Defaults to `undefined`] |

### Return type

[**Profile**](Profile.md)

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


## getTenantMemberships

> Array&lt;Membership&gt; getTenantMemberships(tenantId)

Get memberships of tenant

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { GetTenantMembershipsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | Tenant ID
    tenantId: tenantId_example,
  } satisfies GetTenantMembershipsRequest;

  try {
    const data = await api.getTenantMemberships(body);
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
| **tenantId** | `string` | Tenant ID | [Defaults to `undefined`] |

### Return type

[**Array&lt;Membership&gt;**](Membership.md)

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


## getTenants

> Array&lt;Tenant&gt; getTenants()

Get tenants of user

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { GetTenantsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  try {
    const data = await api.getTenants();
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

[**Array&lt;Tenant&gt;**](Tenant.md)

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


## updateMemberships

> any updateMemberships(membershipId, membershipUpdate)

Update membership

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { UpdateMembershipsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | Membership ID
    membershipId: membershipId_example,
    // MembershipUpdate
    membershipUpdate: ...,
  } satisfies UpdateMembershipsRequest;

  try {
    const data = await api.updateMemberships(body);
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
| **membershipId** | `string` | Membership ID | [Defaults to `undefined`] |
| **membershipUpdate** | [MembershipUpdate](MembershipUpdate.md) |  | |

### Return type

**any**

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


## updateProfile

> any updateProfile(profileUpdate)

Update profile of current user

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { UpdateProfileRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // ProfileUpdate
    profileUpdate: ...,
  } satisfies UpdateProfileRequest;

  try {
    const data = await api.updateProfile(body);
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
| **profileUpdate** | [ProfileUpdate](ProfileUpdate.md) |  | |

### Return type

**any**

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


## updateTenant

> Tenant updateTenant(tenantId, tenantUpdate)

Update tenant

### Example

```ts
import {
  Configuration,
  SettingsApi,
} from '';
import type { UpdateTenantRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SettingsApi(config);

  const body = {
    // string | Tenant ID
    tenantId: tenantId_example,
    // TenantUpdate
    tenantUpdate: ...,
  } satisfies UpdateTenantRequest;

  try {
    const data = await api.updateTenant(body);
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
| **tenantId** | `string` | Tenant ID | [Defaults to `undefined`] |
| **tenantUpdate** | [TenantUpdate](TenantUpdate.md) |  | |

### Return type

[**Tenant**](Tenant.md)

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

