# ProxyUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**llm_judge_config** | [**LlmJudgeConfig**](LlmJudgeConfig.md) |  | [optional] [default to undefined]
**spotlighting_config** | [**SpotlightingConfig**](SpotlightingConfig.md) |  | [optional] [default to undefined]
**system_prompt_check_config** | [**SystemPromptCheckConfig**](SystemPromptCheckConfig.md) |  | [optional] [default to undefined]
**privacy_config** | [**PrivacyConfigInput**](PrivacyConfigInput.md) |  | [optional] [default to undefined]
**is_managed** | **boolean** |  | [optional] [default to false]
**id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProxyUpdate } from './api';

const instance: ProxyUpdate = {
    name,
    llm_judge_config,
    spotlighting_config,
    system_prompt_check_config,
    privacy_config,
    is_managed,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
