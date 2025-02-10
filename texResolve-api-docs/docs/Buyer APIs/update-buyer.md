---
sidebar_position: 4
---

# Update buyer details

Learn how to update buyer details with Hajorah.


## Request

- **Method**: PUT
- **Endpoint**: `/api/buyer/update`
- **Authentication**: Bearer token in the `Authorization` header

:::tip Token tip

Log in as buyer to get user token

:::
[Login as Buyer](./login-buyer.md)

[How to get user token for Authentication](../intro.md#get-user-token-for-bearer-authentication)

### Body Parameters

- **User details**: Enter user details to update.
```jsx title="other user schema"

{
  fullname: String,
  contact: String,
  address: object 
  {
    street: String,
    city: String,
    state: String,
    country: String
  }
}
```
Here's an example request body with user details:

```jsx title="updating selected details"
{
  "fullname": "Roronoa Zoro",
  "contact": "23456671671",
  "address.street": "East Blue",
  "address.city": "Umuahia",
  "address.state": "Abia",
  "address.country": "Nigeria",
}
```
## Reponses
### Success
```jsx title="code 200:  success"
User Info updated successfully
```

[Get Buyer details to see updates](./get-buyer.md)


### Errors
```jsx title="code 401:  Authentication failed"
Invalid user token, log in and try again
```

```jsx title="code 404:  user not found"
User details provided is not valid or does not exist
```