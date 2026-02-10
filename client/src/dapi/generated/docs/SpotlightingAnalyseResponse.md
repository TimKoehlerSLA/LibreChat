
# SpotlightingAnalyseResponse

Response for Spotlighting analysis.

## Properties

Name | Type
------------ | -------------
`meta` | [AnalyseMetaInformation](AnalyseMetaInformation.md)
`data` | Array&lt;number&gt;
`labels` | Array&lt;Date&gt;

## Example

```typescript
import type { SpotlightingAnalyseResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
  "labels": null,
} satisfies SpotlightingAnalyseResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpotlightingAnalyseResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


