---
sidebar_position: 3
---

# Retrieve Center profile

Learn how to get center profile with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `/api/center/profile`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as center to get user token

:::
[Login as Center](./login-center.md)

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
```jsx title="code 401:  Authentication failed"
 
Invalid user token, log in and try again

```

```jsx title="code 404:  Not found"
 
User details provided is not valid or does not exist

```

```jsx title="code 500:  Internal Server Error"
 
Try again or restart service

```
