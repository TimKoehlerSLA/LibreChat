
# MembershipCreate

MembershipCreate

## Properties

Name | Type
------------ | -------------
`userId` | string
`email` | string
`tenantId` | string
`roles` | [Array&lt;MemberRole&gt;](MemberRole.md)

## Example

```typescript
import type { MembershipCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "email": null,
  "tenantId": null,
  "roles": null,
} satisfies MembershipCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MembershipCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


