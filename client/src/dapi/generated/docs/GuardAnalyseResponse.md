
# GuardAnalyseResponse

Response for System Prompt Check analysis.

## Properties

Name | Type
------------ | -------------
`meta` | [AnalyseMetaInformation](AnalyseMetaInformation.md)
`safe` | Array&lt;number&gt;
`controversial` | Array&lt;number&gt;
`unsafe` | Array&lt;number&gt;
`labels` | Array&lt;Date&gt;

## Example

```typescript
import type { GuardAnalyseResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "safe": null,
  "controversial": null,
  "unsafe": null,
  "labels": null,
} satisfies GuardAnalyseResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GuardAnalyseResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


