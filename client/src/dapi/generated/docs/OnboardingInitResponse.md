
# OnboardingInitResponse

Response model for onboarding initialization.

## Properties

Name | Type
------------ | -------------
`providersCreated` | boolean
`firewallCreated` | boolean
`message` | string

## Example

```typescript
import type { OnboardingInitResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "providersCreated": null,
  "firewallCreated": null,
  "message": null,
} satisfies OnboardingInitResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnboardingInitResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


