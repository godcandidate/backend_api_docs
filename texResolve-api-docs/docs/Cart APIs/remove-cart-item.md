---
sidebar_position: 3
---

# Remove cart item

Learn how to remove an item from cartwith Hajorah.

## Request

- **Method**: DELETE
- **Endpoint**: `/api/cart/remove/{itemId}`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Path Parameter

- **Item ID**: Enter id of the cart item

:::tip Item id tip

Get item id from the user cart

:::

[Get itemID from user cart](./get-cart.md#success)


## Responses
### Success
```jsx title="code 201:  success"
Item removed successfully
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
