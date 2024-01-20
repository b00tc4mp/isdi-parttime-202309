/*import { Container } from "../library"
import Button from "../library/Button" */
import logic from '../logic'
import { Button, Link, Form, Field, Container } from '../library'

// The Register component is one of the views rendered by the App component based on the current state (view === 'register')

function Register(props) {
    console.log('Register')

    // The handleSubmit function is a callback for the form's onSubmit event. This event is triggered(desencadena) when the user submits the form
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

                    return
                }

                // If registration is successful, the onSuccess callback (passed as a prop) is executed
                props.onSuccess()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // The handleLoginClick function in the Register component is used to navigate back to the login view in the App component
    // The handleLoginClick function is a callback for the onClick event of the Link componen
    function handleLoginClick(event) {
        event.preventDefault()

        // console.log('login click')
        // The onLoginClick callback (passed as a prop) is executed
        // allowing the parent component (App) to handle the navigation or state change
        props.onLoginClick()
    }

    return <Container>
        <h1>Register</h1>

        {/* To apply CSS classes to a component in React we use the prop className */}
        <Form className="form" onSubmit={handleSubmit}>
            <Field id="name-input">Name</Field>
            <Field id="email-input" type="email">E-mail</Field>
            <Field id="password-input" type="password">Password</Field>

            <Button type="submit">Register</Button>
        </Form>

        <Link onClick={handleLoginClick}>Login</Link>
    </Container>
}

export default Register