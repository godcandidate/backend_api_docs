---
sidebar_position: 1
---

# Place an Order

Learn how to place your order with Hajorah.


## Request

- **Method**: POST
- **Endpoint**: `/api/checkout/place`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Body Parameters

- **Order details**: Enter cart details.
```jsx title="required order schema"

{
  cartId: string,
  pickupCenter: string,
}
```

Here's an example request body with cart details:

```jsx title="updating selected details"
{
  "cartId": "672882gd62gqig272",
  "pickupCenter": "East Blue, Skypedia"
}
```
:::tip Cart id tip

Get cart id for the user cart

:::

[Get cartID for user cart](../Cart%20APIs/get-cart.md#success)

## Reponses
### Success

```jsx title="code 201:  success"
{
  "message": "Order created successfully",
  "order": {
    "orderCode": "QY940F4ZBTA9",
    //other order details
  }
}
```
:::tip Order code tip

This is required by Agent to verify and confirm user order

:::

### Errors

```jsx title="code 401:  Authentication error"
User token is not valid or does not exist
```

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```