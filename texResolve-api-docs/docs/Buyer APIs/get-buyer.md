---
sidebar_position: 3
---

# Retrieve Buyer profile

Learn how to get buyer profile with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `https://hajorah-server.onrender.com/api/buyer/profile`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](./login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)
## Responses
### Success

```jsx title="code 201:  success"
{
  "email": "roronoa@gmail.com",
  // other user details
}
```

### Errors

```jsx title="code 404:  user not found"
User details provided is not valid or does not exist
```