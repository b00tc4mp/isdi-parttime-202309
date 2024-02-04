import logic from "../logic"
import { Button, Link, Form, Field, Container } from "../library"


function Login(props) {

    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector("#email-input")
        const passwordInput = event.target.querySelector("#password-input")

        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.loginUser(email, password, error => {
                if (error) {
                    // alert(error.message)
                    props.onError(error)

                    return
                }

                props.onSuccess()
            })
        } catch (error) {
            // alert(error.message)
            props.onError(error)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <Container>
        <h1>Login</h1>

        <Form onSubmit={handleSubmit}>
            <Field id="email-input" type="email">E-mail</Field>
            <Field id="password-input" type="password">Password</Field>

            <Button type="submit">Login</Button>
        </Form>

        <p>If you are new, <Link onClick={handleRegisterClick}>Register</Link> here 👈</p>
    </Container>
}

export default Login