/* import logic from '../logic'
import Button from '../library/Button'
/* import Input from '../library/Input' 
import Form from '../library/Form.JSX'
/* import Label from '../library/Label' 
import Field from '../library/Field.JSX' */

import logic from '../logic'
import { Button, Link, Form, Field, Container } from '../library'

// The Login component is one of the views rendered by the App component based on the current state (view === 'login').

function Login(props) {
    console.log('Login')

    // The handleSubmit function is a callback for the form's onSubmit event.
    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.loginUser(email, password, error => {
                if (error) {
                    props.onError(error)

                    return
                }
                // If the login is successful, the onSuccess callback (passed as a prop) is executed
                props.onSuccess()
            })
        } catch (error) {
            props.onError(error)
        }
    }
    // The handleRegisterClick function is a callback for the onClick event of the Link component
    function handleRegisterClick(event) {
        event.preventDefault()

        // The onRegisterClick callback (passed as a prop) is executed, allowing the App component to handle the navigation or state change to the registration view
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