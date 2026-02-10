# AnalyticsApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**analyzeGuardRequests**](AnalyticsApi.md#analyzeguardrequests) | **GET** /analytics/guard-requests | Analyze Guard Requests |
| [**analyzePrivacyProtections**](AnalyticsApi.md#analyzeprivacyprotections) | **GET** /analytics/privacy-protections | Analyze PrivacyProtections |
| [**analyzeSystemPromptChecks**](AnalyticsApi.md#analyzesystempromptchecks) | **GET** /analytics/system-prompt-checks | Analyze System Prompt Checks |
| [**getQuotas**](AnalyticsApi.md#getquotas) | **GET** /analytics/quotas | Get Quotas |
| [**listSpotlightingRequests**](AnalyticsApi.md#listspotlightingrequests) | **GET** /analytics/spotlighting-requests | List SpotlightingRequests |



## analyzeGuardRequests

> GuardAnalyseResponse analyzeGuardRequests(proxyId, startDate, endDate)

Analyze Guard Requests

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '';
import type { AnalyzeGuardRequestsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string (optional)
    proxyId: proxyId_example,
    // Date (optional)
    startDate: 2013-10-20,
    // Date (optional)
    endDate: 2013-10-20,
  } satisfies AnalyzeGuardRequestsRequest;

  try {
    const data = await api.analyzeGuardRequests(body);
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
| **proxyId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **startDate** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**GuardAnalyseResponse**](GuardAnalyseResponse.md)

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


## analyzePrivacyProtections

> PrivacyProtectionAnalyseResponse analyzePrivacyProtections(proxyId, startDate, endDate)

Analyze PrivacyProtections

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '';
import type { AnalyzePrivacyProtectionsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string (optional)
    proxyId: proxyId_example,
    // Date (optional)
    startDate: 2013-10-20,
    // Date (optional)
    endDate: 2013-10-20,
  } satisfies AnalyzePrivacyProtectionsRequest;

  try {
    const data = await api.analyzePrivacyProtections(body);
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
| **proxyId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **startDate** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**PrivacyProtectionAnalyseResponse**](PrivacyProtectionAnalyseResponse.md)

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


## analyzeSystemPromptChecks

> SystemPromptCheckAnalyseResponse analyzeSystemPromptChecks(proxyId, startDate, endDate)

Analyze System Prompt Checks

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '';
import type { AnalyzeSystemPromptChecksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string (optional)
    proxyId: proxyId_example,
    // Date (optional)
    startDate: 2013-10-20,
    // Date (optional)
    endDate: 2013-10-20,
  } satisfies AnalyzeSystemPromptChecksRequest;

  try {
    const data = await api.analyzeSystemPromptChecks(body);
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
| **proxyId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **startDate** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SystemPromptCheckAnalyseResponse**](SystemPromptCheckAnalyseResponse.md)

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


## getQuotas

> QuotaRead getQuotas()

Get Quotas

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '';
import type { GetQuotasRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  try {
    const data = await api.getQuotas();
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

[**QuotaRead**](QuotaRead.md)

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


## listSpotlightingRequests

> SpotlightingAnalyseResponse listSpotlightingRequests(proxyId, startDate, endDate)

List SpotlightingRequests

### Example

```ts
import {
  Configuration,
  AnalyticsApi,
} from '';
import type { ListSpotlightingRequestsRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: HTTPBearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AnalyticsApi(config);

  const body = {
    // string (optional)
    proxyId: proxyId_example,
    // Date (optional)
    startDate: 2013-10-20,
    // Date (optional)
    endDate: 2013-10-20,
  } satisfies ListSpotlightingRequestsRequest;

  try {
    const data = await api.listSpotlightingRequests(body);
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
| **proxyId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **startDate** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**SpotlightingAnalyseResponse**](SpotlightingAnalyseResponse.md)

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

