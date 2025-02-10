---
sidebar_position: 2
---

# Login as Center

Learn how to login as center with Hajorah.

## Request

- **Method**: POST
- **Endpoint**: `/api/center/login`

### Body Parameters

- **Email**: User email address.
- **Password**: User password.

:::tip Data tip

You can get a list of registered centers in `api/centers`

:::

Here's an example request body with user details:

```json
{
  "email": "shibuya@gmail.com",
  "password": "pass3a"
}
```
## Responses
### Success

```jsx title="code 200:  success"
{
  "msg": "Logged in successfully",
  "email":"shibuya@gmail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQ2NWE1YTdlYjFiYmU4ZDMyYjI1ZDciLCJlbWFpbCI6InJvcm9ub2FAZ21haWwuY29tIiwiaWF0IjoxNjk5MTA5NDg2LCJleHAiOjE2OTkxOTU4ODZ9.axRUZ4Rw_9J5WqXvDSI8lC6E5oX-_Kw9SPghDLLGKH4"
}
```

:::tip Info tip

User token would be used to authenticate other user services

:::

```jsx title="code 201:  Unverified account"
  An email is sent to your account, please verify before login
```


### Errors

```jsx title="code 404:  Not found"
User details provided is not valid or does not exist
```

```jsx title="code 500:  Internal Server Error"
Try again or restart service
```

