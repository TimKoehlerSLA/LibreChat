
# ProfileCreate

ProfileCreate

## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`email` | string
`locale` | [Locale](Locale.md)
`isEmailVerified` | boolean
`tenants` | Array&lt;string&gt;

## Example

```typescript
import type { ProfileCreate } from ''

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "email": null,
  "locale": null,
  "isEmailVerified": null,
  "tenants": null,
} satisfies ProfileCreate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProfileCreate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


