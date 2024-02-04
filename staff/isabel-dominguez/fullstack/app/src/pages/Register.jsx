import logic from "../logic"
import { Button, Link, Form, Field, Container } from "../library"

import { useContext } from '../hooks'

function Register(props) {

    const context = useContext()

    function handleSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector("#name-input")
        const emailInput = event.target.querySelector("#email-input")
        const passwordInput = event.target.querySelector("#password-input")

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.registerUser(name, email, password, error => {
                if (error) {
                    // alert(error.message)
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

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }

    return <Container>
        <h1>Register</h1>

        <Form onSubmit={handleSubmit}>
            <Field id="name-input">Name</Field>
            <Field id="email-input" type="email">E-mail</Field>
            <Field id="password-input" type="password">Password</Field>

            <Button type="submit">Register</Button>
        </Form>

        <p>Go back to <Link onClick={handleLoginClick}>Login</Link></p>
    </Container>
}

export default Register