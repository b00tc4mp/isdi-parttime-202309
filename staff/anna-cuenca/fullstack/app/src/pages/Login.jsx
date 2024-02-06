import logic from '../logic'

import { Button, Link, Form, Field, Container } from '../library'

import { useContext } from '../hooks'



function Login(props) {
  // esto viene dde APP
  //las props las tenemos para manejar situaciones, de momento pueden pasar 2 cosas
  // cuando se haga click en el link de registro
  console.log('Login')

  const context = useContext()

  function handleSubmit(event) {
    event.preventDefault()

    const emailInput = event.target.querySelector('#email-input')
    const passwordInput = event.target.querySelector('#password-input')

    const email = emailInput.value
    const password = passwordInput.value

    // console.log(email, password)
    try {
      logic.loginUser(email, password)
        .then(() => props.onSuccess())
        .catch(error => context.handleError(error))
      // el callback devuelve o bien el error o bien la ejecución del código que se le pasa. En este caso ejecuta props.OnSuccess

    } catch (error) {
      //alert(error.message)
      context.handleError(error)
    }
  }

  function handleRegisterClick(event) {
    event.preventDefault()

    // console.log('register click')
    props.onRegisterClick()
  }

  return <Container>
    <h1>Login</h1>

    <Form onSubmit={handleSubmit}>
      <Field id="email-input" type="email">E-mail</Field>
      <Field id="password-input" type="password">Password</Field>

      <Button type="submit">Login</Button>
    </Form>

    <Link onClick={handleRegisterClick}>Register</Link>
  </Container>
}



export default Login