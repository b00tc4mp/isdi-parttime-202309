import logic from "../logic"


import { Button, Form, Link, Field, Container } from '../library'

function Login(props) {
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
                props.onSuccess()
            })

        } catch (error) {
            alert(error.message)

        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()
        props.onRegisterClick()
    }


    return <Container>
        <h2>Neverland Island</h2>

        <Form className="form" onSubmit={handleSubmit}>
            <Field forId="email-input" id="email-input" type="email">E-mail</Field>
            <Field forId="password-input" id="password-input" type="password">Password</Field>
            <Button type="submit">Login</Button>
        </Form>
        <Link onClick={handleRegisterClick}>Register</Link>
    </Container>
}

export default Login