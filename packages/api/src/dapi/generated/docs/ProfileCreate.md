# ProfileCreate

ProfileCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** |  | [optional] [default to undefined]
**lastName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [default to undefined]
**locale** | [**Locale**](Locale.md) |  | [optional] [default to undefined]
**isEmailVerified** | **boolean** |  | [optional] [default to undefined]
**tenants** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { ProfileCreate } from './api';

const instance: ProfileCreate = {
    firstName,
    lastName,
    email,
    locale,
    isEmailVerified,
    tenants,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
