
# ProxyCreate


## Properties

Name | Type
------------ | -------------
`name` | string
`llmJudgeConfig` | [LlmJudgeConfig](LlmJudgeConfig.md)
`spotlightingConfig` | [SpotlightingConfig](SpotlightingConfig.md)
`systemPromptCheckConfig` | [SystemPromptCheckConfig](SystemPromptCheckConfig.md)
`privacyConfig` | [PrivacyConfigInput](PrivacyConfigInput.md)
`isManaged` | boolean
`id` | string

## Example

```typescript
import type { ProxyCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "llmJudgeConfig": null,
  "spotlightingConfig": null,
  "systemPromptCheckConfig": null,
  "privacyConfig": null,
  "isManaged": null,
  "id": null,
} satisfies ProxyCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProxyCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


