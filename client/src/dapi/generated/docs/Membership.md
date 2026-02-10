
# Membership

Membership

## Properties

Name | Type
------------ | -------------
`id` | string
`userId` | string
`tenant` | string
`roles` | [Array&lt;MemberRole&gt;](MemberRole.md)

## Example

```typescript
import type { Membership } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "userId": null,
  "tenant": null,
  "roles": null,
} satisfies Membership

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Membership
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


