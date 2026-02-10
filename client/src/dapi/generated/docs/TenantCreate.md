
# TenantCreate

TenantCreate

## Properties

Name | Type
------------ | -------------
`parentTenantId` | string
`name` | string
`phoneNumber` | string
`website` | string
`email` | string
`logo` | string

## Example

```typescript
import type { TenantCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "parentTenantId": null,
  "name": null,
  "phoneNumber": null,
  "website": null,
  "email": null,
  "logo": null,
} satisfies TenantCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


