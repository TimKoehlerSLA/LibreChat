# Provider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**provider_type** | [**ProviderType**](ProviderType.md) |  | [default to undefined]
**base_url** | **string** |  | [default to undefined]
**api_key** | **string** |  | [default to undefined]
**tenant_id** | **string** |  | [optional] [default to undefined]
**user_id** | **string** |  | [optional] [default to undefined]
**project_id** | **string** |  | [optional] [default to undefined]
**organization** | **string** |  | [optional] [default to undefined]
**api_version** | **string** |  | [optional] [default to undefined]
**is_managed** | **boolean** |  | [optional] [default to false]
**id** | **string** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]

## Example

```typescript
import { Provider } from './api';

const instance: Provider = {
    name,
    provider_type,
    base_url,
    api_key,
    tenant_id,
    user_id,
    project_id,
    organization,
    api_version,
    is_managed,
    id,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
