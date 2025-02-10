---
sidebar_position: 3
---

# Update product details

Learn how to update product details with Hajorah.

## Request

- **Method**: PUT
- **Endpoint**: `/api/product/update/{productId}`

### Path Parameter
- **Product ID**: ID of the product

:::tip Item tip

Go back to `/api/products` to get a list of products

:::

### Body Parameter
- **Product details**: Details of the product.
```jsx title="product schema"

{
  name: string,
  price: number,
  category: string,
  description: string,
  imageUrl: string
}
```

Here's an example request body with product details:

```jsx title="update selected details"
{
  "description": "Ramen Instant Noodles",
  "category": "Noodles"
}
```
[Get Product details to see updates](./get-product.md)

## Responses
### Successful 

```jsx title="code 201:  success"
Item updated successfully
```

### Errors

```jsx title="code 404:  Not found"
 
Product does not exist

```

```jsx title="code 500:  Internal Server Error"
 
Try again or restart service

```