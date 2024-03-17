import logic from '../logic'
import { Button, Form, Field } from '../components'
import { NavLink } from 'react-router-dom'

function Login(props) {
  function authenticateUser(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = {}

    for (let [key, val] of formData.entries()) {
      data[key] = val
    }
    try {
      logic
        .authenticateUser(email, password)
        .then(() => {
          props.onSuccess()
        })
        .catch((error) => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={authenticateUser}>
        <Field name="email" inputId="email-input"></Field>
        <Field name="password" inputId="password-input"></Field>
        <Button type="submit">Log in</Button>
      </Form>
      <NavLink to="/register">Regístrate</NavLink>
    </>
  )
}

export default Login
