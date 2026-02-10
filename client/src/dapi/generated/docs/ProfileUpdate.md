
# ProfileUpdate

ProfileUpdate

## Properties

Name | Type
------------ | -------------
`firstName` | string
`lastName` | string
`locale` | [Locale](Locale.md)

## Example

```typescript
import type { ProfileUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "firstName": null,
  "lastName": null,
  "locale": null,
} satisfies ProfileUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProfileUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


