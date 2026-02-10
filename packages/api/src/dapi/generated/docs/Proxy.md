# Proxy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**llm_judge_config** | [**LlmJudgeConfig**](LlmJudgeConfig.md) |  | [default to undefined]
**spotlighting_config** | [**SpotlightingConfig**](SpotlightingConfig.md) |  | [default to undefined]
**system_prompt_check_config** | [**SystemPromptCheckConfig**](SystemPromptCheckConfig.md) |  | [default to undefined]
**privacy_config** | [**PrivacyConfigOutput**](PrivacyConfigOutput.md) |  | [optional] [default to undefined]
**is_managed** | **boolean** |  | [optional] [default to false]
**id** | **string** |  | [default to undefined]
**tenant_id** | **string** |  | [default to undefined]
**proxy_oapi_url** | **string** |  | [default to undefined]
**proxy_oapi_key** | **string** |  | [default to undefined]
**created_at** | **string** |  | [default to undefined]
**providers** | [**Array&lt;Provider&gt;**](Provider.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Proxy } from './api';

const instance: Proxy = {
    name,
    llm_judge_config,
    spotlighting_config,
    system_prompt_check_config,
    privacy_config,
    is_managed,
    id,
    tenant_id,
    proxy_oapi_url,
    proxy_oapi_key,
    created_at,
    providers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
