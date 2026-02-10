# PublicApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthCheck**](PublicApi.md#healthcheck) | **GET** /health | Health check |



## healthCheck

> HealthResponse healthCheck()

Health check

Returns the health status of the API

### Example

```ts
import {
  Configuration,
  PublicApi,
} from '';
import type { HealthCheckRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PublicApi();

  try {
    const data = await api.healthCheck();
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

[**HealthResponse**](HealthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

