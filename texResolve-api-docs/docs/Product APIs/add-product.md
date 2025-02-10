---
sidebar_position: 1
---

# Add Product

Learn how to add product with Hajorah.


## Request

- **Method**: POST
- **Endpoint**: `/api/product/add`


### Body Parameters

- **Product data**: Enter product details.
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

```jsx title="add selected details"
{
  "productName": "Ramen",
  "productPrice": "300"
}
```

## Reponses
### Success
```jsx title="code 201:  success"
Product added successfully
```

[Get product](./get-product.md) to see product details


### Errors

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```
