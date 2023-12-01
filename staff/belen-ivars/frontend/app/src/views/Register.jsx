import logic from "../logic"

import { Button, Link, Form, Field, Container } from "../library"

function Register(props) {
    console.log('Register')

    function handleSubmit(event) {
        event.preventDefault()

        const name = event.target.querySelector('#name-input').value
        const email = event.target.querySelector('#email-input').value
        const password = event.target.querySelector('#password-input').value

        //console.log(name, email, password)

        try {
            logic.registerUser(name, email, password, error => {
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

    function handleLoginClick(event) {
        event.preventDefault()

        //console.log('login click')
        props.onLoginClick()
    }

    return <Container>
        <h1>Register</h1>

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