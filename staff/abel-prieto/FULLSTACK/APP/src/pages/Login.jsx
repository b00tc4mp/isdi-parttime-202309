import logic from "../logic"

import { Button, Link, Field, Form, Container } from "../librery"


// LOGIN

function Login(props) {
    console.log('Login')

    // REGISTER LINK
    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
        // Pasamos el elemento 'props' con el método de click de Register
    }

    // FORM
    function handleSubmit(event) {
        event.preventDefault()

        const email = event.target.querySelector('#email').value
        const password = event.target.querySelector('#password').value
        // Usamos 'target' porque todo (event) del DOM apunta a un sitio, en este caso, al formulario del componente Login

        try {
            logic.loginUser(email, password, error => {
                if (error) {
                    props.onError()
                    // Nos traemos todos los errores recogidos de los callback mediante ALERT

                    return
                }

                props.onSuccess()
                // Nos redirige a la vista de 'home' en APP
            })

        } catch (error) {
            props.onError()
        }
    }

    // TEMPLATE
    return <Container>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
            <Field id="email" type="email">Email</Field>
            <Field id="password" type="password">Password</Field>
            <Button type="submit">Login</Button>
        </Form>

        <p>Don't have an account yet?</p>
        <Link href="" onClick={(handleRegisterClick)}>Create one here!</Link>
    </Container>
}

export default Login