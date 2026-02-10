
# LlmJudgeConfig


## Properties

Name | Type
------------ | -------------
`active` | boolean
`judgeOutput` | boolean
`judgeLevel` | [JudgeLevel](JudgeLevel.md)
`blockedCategories` | [Array&lt;Category&gt;](Category.md)

## Example

```typescript
import type { LlmJudgeConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "judgeOutput": null,
  "judgeLevel": null,
  "blockedCategories": null,
} satisfies LlmJudgeConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LlmJudgeConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


