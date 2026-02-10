
# PrivacyConfigOutput


## Properties

Name | Type
------------ | -------------
`active` | boolean
`scoreThreshold` | number
`entities` | [Array&lt;PiiEntityType&gt;](PiiEntityType.md)
`operator` | string
`operatorConfig` | [OperatorConfig](OperatorConfig.md)

## Example

```typescript
import type { PrivacyConfigOutput } from ''

// TODO: Update the object below with actual values
const example = {
  "active": null,
  "scoreThreshold": null,
  "entities": null,
  "operator": null,
  "operatorConfig": null,
} satisfies PrivacyConfigOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrivacyConfigOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


