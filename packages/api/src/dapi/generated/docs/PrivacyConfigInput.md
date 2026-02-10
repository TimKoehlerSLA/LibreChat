# PrivacyConfigInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** |  | [optional] [default to false]
**score_threshold** | **number** |  | [optional] [default to undefined]
**entities** | [**Array&lt;PiiEntityType&gt;**](PiiEntityType.md) |  | [optional] [default to undefined]
**operator** | **string** |  | [optional] [default to OperatorEnum_Redact]
**operator_config** | [**OperatorConfig**](OperatorConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PrivacyConfigInput } from './api';

const instance: PrivacyConfigInput = {
    active,
    score_threshold,
    entities,
    operator,
    operator_config,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
