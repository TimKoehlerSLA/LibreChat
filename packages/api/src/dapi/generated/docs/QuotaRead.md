# QuotaRead

DTO for usage statistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_count** | **number** | Total number of requests to protected endpoints | [default to undefined]
**total_tokens** | **number** | Sum of all tokens used by protected endpoints | [default to undefined]
**request_quota** | **number** | Request limit | [default to undefined]
**token_quota** | **number** | Token limit | [default to undefined]
**restricted_endpoints** | **Array&lt;string&gt;** | List of protected endpoints | [default to undefined]
**tier** | [**Tier**](Tier.md) |  | [default to undefined]

## Example

```typescript
import { QuotaRead } from './api';

const instance: QuotaRead = {
    request_count,
    total_tokens,
    request_quota,
    token_quota,
    restricted_endpoints,
    tier,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
