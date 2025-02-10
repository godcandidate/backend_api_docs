---
sidebar_position: 4
---

# Update manufacturer details

Learn how to update manufacturer details with Hajorah.

## Request

- **Method**: PUT
- **Endpoint**: `/api/manufacturer/update`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as manufacturer to get user token

:::
[Login as manufacturer](./login-manufacturer)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Body Parameters
- **User details**: Enter user details to update.
```jsx title="other user schema"

{
  fullName: String,
  phoneNumber: String,
  address.street: String,
  address.city: String,
  address.state: String,
  address.country: String,
  companyName: String,
  registerNumber: String,
  supplies: [String, ...],
  warehouse : {
    number : Number,
    location : [String, ...]
  }
}
```
Here's an example request body with user details:

```jsx title="updating selected details"
{
  "fullName": "Sasuke Uchina",
  "phoneNumber": "23456671671",
  "supplies": "Cindy Rice",
  "profile": ""
}
```
## Reponses
### Success on update
User details updated sucessfully

```jsx title="code 201:  success"
User Info updated successfully
```

[Get manufacturer details to see updates](./get-manufacturer)

### Errors
```jsx title="code 401:  Authentication failed"
Invalid user token, log in and try again
```

```jsx title="code 404:  Not found"
User details provided is not valid or does not exist
```

```jsx title="code 500:  Internal Server Error"
Try again or restart service
```