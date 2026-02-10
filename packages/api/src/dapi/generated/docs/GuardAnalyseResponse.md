# GuardAnalyseResponse

Response for System Prompt Check analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**AnalyseMetaInformation**](AnalyseMetaInformation.md) |  | [default to undefined]
**safe** | **Array&lt;number&gt;** |  | [default to undefined]
**controversial** | **Array&lt;number&gt;** |  | [default to undefined]
**unsafe** | **Array&lt;number&gt;** |  | [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { GuardAnalyseResponse } from './api';

const instance: GuardAnalyseResponse = {
    meta,
    safe,
    controversial,
    unsafe,
    labels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
