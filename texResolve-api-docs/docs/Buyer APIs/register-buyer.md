---
sidebar_position: 1
---

# Register a Buyer

Learn how to register a new buyer with Hajorah.

```jsx title="buyer schema"

{
  email: String,
  password: String,
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

## Request

- **Method**: POST
- **Endpoint**: `https://hajorah-server.onrender.com/api/buyer/register`

### Body Parameters

- **Email**: A valid email address, as a verification link will be sent to it.
- **Password**: A strong and secure password.

Here's an example request body with user details:

```json
{
  "email": "brockc22@lvintager.com",
  "password": "pass123"
}
```
## Responses

### Success
```jsx title="code 200:  success"
An email is sent to your account, please verify
```

:::tip Success tip

Congratulations, you have successfully registered a new buyer using the Buyer APIs!

:::

### Error
```jsx title="code 500:  Internal Server Error"
 Try again or restart service
```

## Verify Your Email

- Check your email for a verification link sent by Hajorah. 
- Click on the link to verify your account.

:::danger Take care
Without verifying your email account, you won't be able to access our services.

:::

## 
:::tip Ready tip

Now you're ready to get started with Hajorah as a registered buyer!

:::
