---
sidebar_position: 4
---

# Delete product

Learn how to delete a product with Hajorah.

## Request

- **Method**: DELETE
- **Endpoint**: `/api/product/delete/{productId}`

### Path Parameter
- **Product Name**: Id of the product

:::tip Item tip

Go back to `/api/products` to get a list of products

:::


## Responses
### Success

```jsx title="code 201:  success"
Product deleted successfully
```


### Errors

```jsx title="code 404:  Not found"
 
Product does not exist

```

```jsx title="code 500:  Internal Server Error"
 
Try again or restart service

```
