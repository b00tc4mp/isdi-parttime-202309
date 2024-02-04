import logic from "../logic"
const isLoginPage = true


import { Button, Form, Link, Field, Container } from '../library'

import { useContext } from '../hooks'

function Login(props) {
    console.log('Login')
    const contextApp = useContext()

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
                    contextApp.handleError(error)
                    return
                }
                props.onSuccess()
            })

        } catch (error) {
            contextApp.handleError(error)

        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()
        props.onRegisterClick()
    }


    return <div className="container-login-principal">
        <Container className="container-body-login">
            <h1 id="login-tittle">Neverland Island</h1>

            <Form onSubmit={handleSubmit} id="form-login">
                <Field forId="email-input" id="email-input" type="email">E-mail</Field>
                <Field forId="password-input" id="password-input" type="password">Password</Field>
                <Button className="-login" type="submit">Login</Button>
            </Form>
            <Link id="register-link" onClick={handleRegisterClick}>Register</Link>
        </Container>
    </div>
}

export default Login