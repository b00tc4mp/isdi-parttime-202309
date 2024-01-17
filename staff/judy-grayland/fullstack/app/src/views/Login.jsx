import logic from '../logic'

import { Button, Link, Form, Field, Container } from '../library'

// function SubmitButton(props){
//     function handleClick(event) {
//         if(props.clickHandler) {
//         event.preventDefault()
//         props.clickHandler()
//         }
//     }
//     return <button type="submit" onClick={handleClick}>{props.label}</button>
// }

// props es un objeto que tiene como propiedades todo lo que le asignes en la app: en este caso serían onRegisterClick y onSuccess
function Login(props) {
  console.log('Login')

  function handleSubmit(event) {
    event.preventDefault()

    const emailInput = event.target.querySelector('#email-input')
    const passwordInput = event.target.querySelector('#password-input')

    const email = emailInput.value
    const password = passwordInput.value

    try {
      logic.loginUser(email, password, (error) => {
        if (error) {
          alert(error.message)

          return
        }
        props.onSuccess()
      })
    } catch (error) {
      alert(error.message)
    }
  }

  function handleRegisterClick(event) {
    event.preventDefault()

    // console.log('register click')
    props.onRegisterClick() // Here we ACCESS the onRegisterClick attribute of props object. It is a function that it receives from the parent component and we call that function by adding ()
  }

  return (
    <Container>
      <h1>Log in</h1>

      <Form onSubmit={handleSubmit}>
        <Field id="email-input" type="email">
          Email:
        </Field>

        <Field id="password-input" type="password">
          Password:
        </Field>

        <Button type="submit">Log in</Button>
      </Form>

      <Link onClick={handleRegisterClick}>Register</Link>
    </Container>
  )
}

export default Login
