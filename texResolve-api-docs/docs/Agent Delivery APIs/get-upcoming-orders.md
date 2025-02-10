---
sidebar_position: 1
---

# Retrieve Upcoming Orders

Learn how to get upcoming Orders for a pickupCenter with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `/api/agent/delivery/{location}`

### Path Parameter

- **location**: Name of the pickupCenter

:::tip Data tip

You can get a pickupCenter from a  list of orders in `api/orders`

:::

Here's an example request parameter with user details:

```json
  "location": "Corona Secondary School"

```
## Responses
### Success

```jsx title="code 201:  success"
{
  // upcoming orders
}
```

### Errors

```jsx title="code 404:  location not found"
Pickup Center is not valid or does not exist
```

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```
