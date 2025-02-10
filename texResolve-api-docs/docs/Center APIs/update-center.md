---
sidebar_position: 4
---

# Update Center details

Learn how to update center details with Hajorah.

## Request

- **Method**: PUT
- **Endpoint**: `/api/center/update`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as center to get user token

:::
[Login as center](./login-center.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Body Parameters
- **User details**: Enter center details to update.
```jsx title="other user schema"

{
  name: String
  fullName: String,
  phoneNumber: String,
  address.street: String,
  address.city: String,
  address.state: String,
  address.country: String,
  profile: String
}
```
Here's an example request body with user details:

```jsx title="updating selected details"
{
  "name" : "Model High School",
  "fullName": "Sasuke Uchina",
  "phoneNumber": "23456671671",
  "profile": ""
}
```
## Reponses
### Success on update
User details updated sucessfully

```jsx title="code 201:  success"
User Info updated successfully
```

[Get center details to see updates](./get-center.md)

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