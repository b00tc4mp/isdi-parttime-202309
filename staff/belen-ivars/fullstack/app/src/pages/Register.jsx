import logic from "../logic"

import { Button, Link, Form, Field, Container } from "../library"

import { useContext } from '../hooks'

function Register(props) {
    console.log('Register')

    const context = useContext()

    function handleSubmit(event) {
        event.preventDefault()

        const name = event.target.querySelector('#name-input').value
        const email = event.target.querySelector('#email-input').value
        const password = event.target.querySelector('#password-input').value

        try {
            logic.registerUser(name, email, password, error => {
                if (error) {
                    context.handleError(error)

                    return
                }
                props.onSuccess()
            })
        } catch (error) {
            context.handleError(error)
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }

    return <Container>
        <h1 class='text-2xl italic underline underline-offset-auto'>Start enjoying</h1>

        <Form onSubmit={handleSubmit}>
            <Field id="name-input">Name</Field>
            <Field id="email-input" type="email" >E-mail</Field>
            <Field id="password-input" type="password" >Password</Field>

            <Button type="submit">Register</Button>
        </Form>

        <Link onClick={handleLoginClick}>Login</Link>
    </Container>
}

export default Register