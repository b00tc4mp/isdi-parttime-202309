import logic from '../logic'
import { Button, Form, Field } from '../components'
import { NavLink, useNavigate } from 'react-router-dom'

function Login(props) {
  const navigate = useNavigate()
  function authenticateUserSuccess() {
    console.log('user logged in successfuly')
    navigate('/')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = {}

    for (let [key, val] of formData.entries()) {
      data[key] = val
    }
    try {
      logic
        .authenticateUser(data.email, data.password)
        .then((data) => {
          console.log(data)
          authenticateUserSuccess()
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
      <h1>Inicia sesión</h1>
      <Form onSubmit={handleSubmit}>
        <Field name="email" inputId="email-input"></Field>
        <Field name="password" inputId="password-input"></Field>
        <Button type="submit">Iniciar sesión</Button>
      </Form>
      <NavLink to="/register">Regístrate</NavLink>
    </>
  )
}

export default Login
