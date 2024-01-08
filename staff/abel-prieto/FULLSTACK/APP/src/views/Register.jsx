import logic from "../logic"

import { Button, Link, Field, Form, Container } from "../librery"

// REGISTER

function Register(props) {
    console.log('Register')

    // LOGIN LINK
    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
        // Pasamos el elemento 'props' con el método de click de Login

    }

    // FORM
    function handleSubmit(event) {
        event.preventDefault()

        const name = event.target.querySelector('#name').value
        const email = event.target.querySelector('#email').value
        const password = event.target.querySelector('#password').value

        try {
            logic.registerUser(name, email, password, error => {
                if (error) {
                    alert(error.message)
                    // Nos traemos todos los errores recogidos de los callback mediante ALERT

                    return
                }

                props.onSuccess()
                // Nos redirige a la vista de 'login' en APP
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // TEMPLATE
    return <Container>
        <h1>Register</h1>

        <Form onSubmit={handleSubmit}>
            <Field id="name">Username</Field>
            <Field id="email" type="email">Email</Field>
            <Field id="password" type="password">Password</Field>
            <Button type="submit">Register</Button>
        </Form>

        <p>Go back to login!</p>
        <Link href="" onClick={handleLoginClick}>Login</Link>
    </Container>
}

export default Register