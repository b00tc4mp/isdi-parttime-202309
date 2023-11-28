import logic from "../logic"

import {Button, Field, Form, Link, Container} from '../library'

//REGISTER
function Register(props) {
    console.log('Register')

    //FORM
    function handleSubmit(event) {
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
                    alert(error.message)
//LOS ERRORES DE CALLBACKS NOS LOS TRAEMOS CON UN ALERT
                    return
                }

                props.onSuccess()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    //LOGIN
    function handleLoginClick(event) {
        event.preventDefault()

        //pasamos el (props) con el el método de click de Login
        props.onLoginClick()
    }

    return <Container>
        <h1>Register</h1>

        <Form onSubmit={handleSubmit}>
            <Field id="name-input">Name</Field>
            <Field id="email-input">E-mail</Field>
            <Field id="password-input " type="password">Password</Field>

            <Button type="submit">Register</Button>
        </Form>

        <Link onClick={handleLoginClick}>Login</Link>
    </Container>
}

export default Register