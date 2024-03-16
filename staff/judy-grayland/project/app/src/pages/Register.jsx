import { NavLink } from 'react-router-dom'
import logic from '../logic'
import Button from '../components/Button'
import Form from '../components/Form'
import Field from '../components/Field'

// function handleOnClick() {
//   console.log('mooo')
// }

function Register(props) {
  function registerNewUser(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = {}

    for (let [key, val] of formData.entries()) {
      data[key] = val
    }

    // try {
    //   logic.registerUser(data.name, data.email, data.password, (error) => {
    //     if (error) {
    //       console.error(error)

    //       return
    //     }
    //     props.onSuccess()
    //   })
    // } catch (error) {
    //   console.error(error)
    // }

    try {
      logic
        .registerUser(data.name, data.email, data.password)
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
      <h1>Register</h1>
      <Form onSubmit={registerNewUser}>
        <Field name="name" inputId="name-input">
          Name
        </Field>
        <Field name="email" inputId="email-input">
          Email
        </Field>
        <Field name="password" inputId="password-input">
          Password
        </Field>
        <Button type="submit">Send</Button>
      </Form>
      Already registered?<NavLink to="login"> Log in</NavLink>
    </>
  )
}

export default Register
