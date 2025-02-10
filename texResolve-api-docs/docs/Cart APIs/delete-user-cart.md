---
sidebar_position: 5
---

# Delete cart 

Learn how to delete a user cart with Hajorah.

## Request

- **Method**: DELETE
- **Endpoint**: `/api/cart/delete`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

## Responses
### Success

```jsx title="code 201:  success"
Cart removed successfully
```

### Errors

```jsx title="code 401:  Authentication error"
User token is not valid or does not exist
```


```jsx title="code 404:  Not found"
User cart invalid or does exists
```

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```
