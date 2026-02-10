
# QuotaRead

DTO for usage statistics

## Properties

Name | Type
------------ | -------------
`requestCount` | number
`totalTokens` | number
`requestQuota` | number
`tokenQuota` | number
`restrictedEndpoints` | Array&lt;string&gt;
`tier` | [Tier](Tier.md)

## Example

```typescript
import type { QuotaRead } from ''

// TODO: Update the object below with actual values
const example = {
  "requestCount": null,
  "totalTokens": null,
  "requestQuota": null,
  "tokenQuota": null,
  "restrictedEndpoints": null,
  "tier": null,
} satisfies QuotaRead

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaRead
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


