import logic from '../logic'

import { Button, Link, Form, Field, Container } from '../library'



function Login(props) {
  // esto viene dde APP
  //las props las tenemos para manejar situaciones, de momento pueden pasar 2 cosas
  // cuando se haga click en el link de registro
  console.log('Login')

  function handleSubmit(event) {
    event.preventDefault()

    const emailInput = event.target.querySelector('#email-input')
    const passwordInput = event.target.querySelector('#password-input')

    const email = emailInput.value
    const password = passwordInput.value

    // console.log(email, password)
    try {
      logic.loginUser(email, password, error => {
        if (error) {
          alert(error.message)
          return
        }
        props.onSuccess() // la App que está por encima, hace esto (apagar Login y encender HOme)
      }) // el callback devuelve o bien el error o bien la ejecución del código que se le pasa. En este caso ejecuta props.OnSuccess

    } catch (error) {
      alert(error.message)
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