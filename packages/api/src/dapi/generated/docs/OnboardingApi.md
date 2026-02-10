# OnboardingApi

All URIs are relative to */api/v1*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**initializeOnboarding**](#initializeonboarding) | **POST** /onboarding/init | Initialize user onboarding|

# **initializeOnboarding**
> OnboardingInitResponse initializeOnboarding()

Creates default managed providers and firewall for the user if they don\'t exist. Idempotent.

### Example

```typescript
import {
    OnboardingApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new OnboardingApi(configuration);

const { status, data } = await apiInstance.initializeOnboarding();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**OnboardingInitResponse**

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

