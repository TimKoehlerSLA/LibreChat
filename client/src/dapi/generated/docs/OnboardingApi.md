# OnboardingApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**initializeOnboarding**](OnboardingApi.md#initializeonboarding) | **POST** /onboarding/init | Initialize user onboarding |



## initializeOnboarding

> OnboardingInitResponse initializeOnboarding()

Initialize user onboarding

Creates default managed providers and firewall for the user if they don\&#39;t exist. Idempotent.

### Example

```ts
import {
  Configuration,
  OnboardingApi,
} from '';
import type { InitializeOnboardingRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OnboardingApi(config);

  try {
    const data = await api.initializeOnboarding();
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

[**OnboardingInitResponse**](OnboardingInitResponse.md)

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

