---
sidebar_position: 5
---

# Retrieve Manufacturer Orders

Learn how to get all orders made by customers to manufacturer  with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `/api/manufacturer/orders`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as manufacturer to get user token

:::
[Login as Manufacturer](./login-manufacturer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

## Responses
### Success

```jsx title="code 201:  success"
{
  // all orders grouped by manufacturer supplies
}
```

### Errors
```jsx title="code 401:  Authentication failed"
 
Invalid user token, log in and try again

```

```jsx title="code 404:  Not found"
 
No orders available for manufacturers

```

```jsx title="code 500:  Internal Server Error"
 
Try again or restart service

```
