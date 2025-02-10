---
sidebar_position: 4
---

# Update cart details

Learn how to update cart details with Hajorah.

## Request

- **Method**: PUT
- **Endpoint**: `/api/cart/update/{itemId}`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Path Parameter
- **Item ID**: Id of the cart item

:::tip Item id tip

Get item id from the user cart

:::

[Get itemID from user cart](./get-cart.md#success)

### Body Parameter
- **Cart details**: Enter new quantity
```jsx title="cart schema"

{
  quantity: number
}
```

Here's an example request body with cart details:

```jsx title="updating selected details"
{
  "quantity": 5
}
```

## Responses
### Success

```jsx title="code 201:  success"
Item updated successfully
```

### Errors

```jsx title="code 401:  Authentication error"
User token is not valid or does not exist
```


```jsx title="code 404:  Not found"
Item id invalid or does exists
```

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```