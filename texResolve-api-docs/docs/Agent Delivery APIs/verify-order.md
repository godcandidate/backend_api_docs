---
sidebar_position: 2
---

# Verify Customer Order

Learn how to verify customers order with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `/api/agent/order/{orderCode}`


### Path Parameters
- **Order Code**: User special order code

Here's an example request parameter with user order code:

```jsx title="user order code"
{
  "orderID": "IQ0S5OYE8IL0",
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

```jsx title="code 404:  user order not found"
 
User code provided is not valid or does not exist

```

:::danger Take care

Server errors have the code 500, a restart of the services can solve the issue

:::