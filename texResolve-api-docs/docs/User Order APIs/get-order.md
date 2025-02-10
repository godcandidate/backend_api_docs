---
sidebar_position: 2
---

# Get Order details

Learn how to get user order details with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `/api/checkoout`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](../Buyer%20APIs/login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

## Reponses
### Success
User cart retrieved sucessfully

```jsx title="code 201:  success"
Order retrieved successfully
// Order details
{
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

```jsx title="code 404:  Not found" 
User has no orders
```

```jsx title="code 500:  Internal Server Error"
Try again or restart service
```