
# ProviderUpdate


## Properties

Name | Type
------------ | -------------
`name` | string
`providerType` | [ProviderType](ProviderType.md)
`baseUrl` | string
`apiKey` | string
`projectId` | string
`organization` | string
`apiVersion` | string

## Example

```typescript
import type { ProviderUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "providerType": null,
  "baseUrl": null,
  "apiKey": null,
  "projectId": null,
  "organization": null,
  "apiVersion": null,
} satisfies ProviderUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


