---
sidebar_position: 3
---

# Confirm customer order

Learn how to confirm customer orders with Hajorah.

## Request

- **Method**: PUT
- **Endpoint**: `/api/delivery/confirm/{orderCode}`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Path Parameters
- **Order Code**: User special order code

Here's an example request parameter with user order code:

```jsx title="user order code"
{
  "orderCode": "IQ0S5OYE8IL0",
}
```
:::tip Order tip

Get order code from user order

:::
[Get Order Code](../User%20Order%20APIs/get-order.md#success)

## Reponses
### Success
User order retrieved successfully

```jsx title="code 201:  success"
User order details
```


### Errors
```jsx title="code 401:  Authentication error"
User token is not valid or does not exist
```

```jsx title="code 404:  user order not found"
User code provided is not valid or does not exist
```

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```