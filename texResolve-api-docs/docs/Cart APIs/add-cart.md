---
sidebar_position: 1
---

# Add to Cart

Learn how to add to cart with Hajorah.


## Request

- **Method**: POST
- **Endpoint**: `/api/cart/add`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Body Parameters

- **Cart details**: Enter cart details.
```jsx title="cart schema"

{
  product: string // product ID
  quantity: number
}
```
:::tip productId tip

Go to product listing to get productId

:::
[Get productId from product listing](../Product%20APIs/get-all-products.md)

Here's an example request body with cart details:

```jsx title="adding selected details"
{
   "product": "656b2c2bf8f03971649bb10f",
  "quantity": 5
}
```
## Reponses
### Succes

```jsx title="code 201:  success"
Cart added successfully
```

### Errors

```jsx title="code 401:  Authentication error"
User token is not valid or does not exist
```

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```
