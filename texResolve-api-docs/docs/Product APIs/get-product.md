---
sidebar_position: 2
---

# Get Product details

Learn how to get product details with Hajorah.

## Request

- **Method**: GET
- **Endpoint**: `/api/product/{productId}`

### Path Parameter
- **Product Name**: ID of the product

:::tip Item tip

Go back to `/api/products` to get a list of products

:::


## Responses
### Success

```jsx title="code 201:  success"
Product retrieved successfully
// product details
```


### Errors

```jsx title="code 404:  Not found"
 
Product does not exist

```

```jsx title="code 500:  Internal Server Error"
 
Try again or restart service

```
