---
sidebar_position: 2
---

# Get Cart details

Learn how to get user cart details with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `/api/cart/`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

## Responses
### Success

```jsx title="code 201:  success"
Cart retrieved successfully
// cart details
{
  "_id": "654b68e9c4ab84dcc26ad908", // cart id
  "items": [
     {
      // item 1
        "product": {
        "_id": "656b2c2bf8f03971649bb10e",
        "name": "CINDY VIETNAM RICE 1KG",
        "price": 25.49
      },
      "quantity": 5,
      "subtotal": 127.44999999999999,
      "_id": "656b2c4ff8f03971649bb144" // item id
    },
    // other items
  ],
  //other cart details
}
```

:::tip Cart Id tip

Cart id is required to [Place an Order](../User%20Order%20APIs/place-order.md)

:::

:::tip Item Id tip

Item id is required to [Remove Cart item](./remove-cart-item.md) and  [Update cart item](./update-cart-item.md)

:::


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