---
sidebar_position: 1
---

# Retrieve all Products

Learn how to retrieve all products with Hajorah.


## Request

- **Method**: GET
- **Endpoint**: `/api/products`

### Query Parameters

- `price`: Enter price with comparator (e.g., [gte]=100, [gt]=150, [lt]=200)
- `sort`: Enter property to sort by
- `fields`: Enter the limiting fields
- `page`: Enter page number
- `limit`: Enter limit number

```jsx title="example queries"
    {
    // all items with price greater than 1000
    `/api/products?price[gte]=1000`
    // retrieve items by name only and display 20 items
    `/api/products?limit=20&fields=name`
    },
    // other products
``` 



## Reponses
### Success
```jsx title="code 201 success"
    {
        "_id": "656210b2b06fde9b1c67a462",
        "name": "PHILIPS RICE COOKER 5L DIGITAL HD4515/55",
        "price": 1249,
        "imageUrl": "https://melcom.com/media/catalog/product/cache/8757aa1374eaaf34b9fd32f9e760ba0b/1/4/145348.jpg",
        "__v": 0
    },
    // other products
``` 

### Errors

```jsx title="code 500:  Internal Server Error" 
Try again or restart service
```
