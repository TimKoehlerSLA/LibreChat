
# SpotlightingConfig


## Properties

Name | Type
------------ | -------------
`delimiter` | string
`encoding` | [SpotlightingEncoding](SpotlightingEncoding.md)
`marking` | string
`method` | [SpotlightingMethod](SpotlightingMethod.md)
`proxyId` | string
`active` | boolean

## Example

```typescript
import type { SpotlightingConfig } from ''

// TODO: Update the object below with actual values
const example = {
  "delimiter": null,
  "encoding": null,
  "marking": null,
  "method": null,
  "proxyId": null,
  "active": null,
} satisfies SpotlightingConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpotlightingConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


