import logic from "../logic"
import { Button, Form, Link, Field, Container } from '../library'

import { ContentError, DuplicityError } from '../logic/errors'

function Register(props) {
    function handleSubmit(event) {
        console.log('Register')
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.registerUser(name, email, password, error => {
                if (error) {
                    props.onError(error)
                    return
                }
            })

            props.onSuccess()

        } catch (error) {
            props.onError(error)
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()
        props.onLoginClick()
    }

    return <Container>
        <h1>Register</h1>

        <Form onSubmit={handleSubmit}>
            <Field forId="name-input" id="name-input" type="text">Name</Field>
            <Field id="email-input" type="email" forId="email-input">E-mail</Field>
            <Field type="password" id="password-input" forId="password-input">Password</Field>
            <Button type="submit">Register</Button>
        </Form>
        <Link onClick={handleLoginClick}>Login</Link>
    </Container>

}

export default Register