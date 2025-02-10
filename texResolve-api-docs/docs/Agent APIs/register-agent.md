---
sidebar_position: 1
---

# Register an Agent

Learn how to register a new agent with Hajorah.

## Request

- **Method**: POST
- **Endpoint**: `/api/agent/register`

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
## Registration Success

```jsx title="code 201:  success"
An email is sent to your account, please verify
```

:::tip Success tip

Congratulations, you have successfully registered a new buyer using the Buyer APIs!

:::

## Verify Your Email

- Check your email for a verification link sent by Hajorah. 
- Click on the link to verify your account.

:::danger Take care
Without verifying your email account, you won't be able to access our services.

Server errors have the code 500, a restart of the services can solve the issue

:::

## 
:::tip Ready tip

Now you're ready to get started with Hajorah as a registered agent!

:::
