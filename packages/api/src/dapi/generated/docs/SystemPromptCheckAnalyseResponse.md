# SystemPromptCheckAnalyseResponse

Response for System Prompt Check analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**AnalyseMetaInformation**](AnalyseMetaInformation.md) |  | [default to undefined]
**blocked** | **Array&lt;number&gt;** |  | [default to undefined]
**approved** | **Array&lt;number&gt;** |  | [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { SystemPromptCheckAnalyseResponse } from './api';

const instance: SystemPromptCheckAnalyseResponse = {
    meta,
    blocked,
    approved,
    labels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
