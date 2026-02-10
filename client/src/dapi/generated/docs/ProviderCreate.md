
# ProviderCreate


## Properties

Name | Type
------------ | -------------
`name` | string
`providerType` | [ProviderType](ProviderType.md)
`baseUrl` | string
`apiKey` | string
`tenantId` | string
`userId` | string
`projectId` | string
`organization` | string
`apiVersion` | string
`isManaged` | boolean

## Example

```typescript
import type { ProviderCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "providerType": null,
  "baseUrl": null,
  "apiKey": null,
  "tenantId": null,
  "userId": null,
  "projectId": null,
  "organization": null,
  "apiVersion": null,
  "isManaged": null,
} satisfies ProviderCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


