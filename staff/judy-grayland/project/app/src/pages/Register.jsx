import { NavLink, useNavigate } from 'react-router-dom'
import logic from '../logic'
import { Button, Form, Field } from '../components'

// function handleOnClick() {
//   console.log('mooo')
// }

function Register(props) {
  const navigate = useNavigate()

  function handleRegisterSuccess() {
    console.log('user successfully registered')
    navigate('/login')
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
        .registerUser(data.name, data.email, data.password)
        .then(() => {
          handleRegisterSuccess()
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
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Field name="name" inputId="name-input">
          Nombre
        </Field>
        <Field name="email" inputId="email-input">
          Email
        </Field>
        <Field name="password" inputId="password-input">
          Contraseña
        </Field>
        <Button type="submit">Send</Button>
      </Form>
      ¿Ya estás registrado?<NavLink to="/login"> Accede a tu cuenta</NavLink>
    </>
  )
}

export default Register
