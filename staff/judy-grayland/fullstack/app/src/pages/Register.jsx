import logic from '../logic'
import { Button, Link, Form, Field, Container } from '../library'

import { useContext } from '../hooks'

function Register(props) {
  console.log('Register')

  const context = useContext

  function handleSubmit(event) {
    event.preventDefault()

    const nameInput = event.target.querySelector('#name-input')
    const emailInput = event.target.querySelector('#email-input')
    const passwordInput = event.target.querySelector('#password-input')

    const name = nameInput.value
    const email = emailInput.value
    const password = passwordInput.value

    // console.log(name, email, password)

    try {
      logic.registerUser(name, email, password, (error) => {
        if (error) {
          //alert(error.message)
          context.handleError(error)

          return
        }

        props.onSuccess()
      })
    } catch (error) {
      // alert(error.message)
      context.handleError(error)
    }
  }

  {
    //if we didn't need to do event.preventDefault() - because the button/link doesn't navigate - then we could pass props.onLoginClic directly into onClick. without () because we're not actually calling the function yet. handleLoginClick is a callback function (the second parameter in an event listener, the first being 'click')
  }

  function handleLoginClick(event) {
    event.preventDefault()

    // console.log('login click')

    props.onLoginClick()
  }
  return (
    <Container>
      <h1>Register</h1>
      {
        // the functions that are passed to onSubmit, onClick etc. are callback functions that are passed into corresponing event handlers. By JS standard they will receive and event object when the event is triggered. The event object has a lot of properties, including target, which is a reference to the element where the event has happened (eg. the form).
      }

      <Form onSubmit={handleSubmit}>
        <Field id="name-input">Name</Field>

        <Field id="email-input" type="email">
          Email
        </Field>
        {/*   ¿QUÉ PASA CON EL TYPE DEL INPUT?     <input className = "input" type="email" id="email-input" />*/}

        <Field id="password-input" type="password">
          Password
        </Field>

        <Button type="submit">Register</Button>
      </Form>

      <Link onClick={handleLoginClick}>Login</Link>
    </Container>
  )
}

export default Register
