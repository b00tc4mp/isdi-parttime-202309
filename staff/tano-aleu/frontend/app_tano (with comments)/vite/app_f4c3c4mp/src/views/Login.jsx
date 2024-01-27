import logic from "../logic"
import { Button, Link, Form, Field, Container } from '../library/index'

function Login(props) {
    console.log('Login')

    // Función para manejar el envío del formulario de inicio de sesión
    function handleSubmit(event) {
        event.preventDefault()

        // Obtener los elementos de entrada de correo electrónico y contraseña del formulario
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        // Obtener los valores de correo electrónico y contraseña
        const email = emailInput.value
        const password = passwordInput.value

        try {
            // Llamar al método loginUser de la lógica para intentar iniciar sesión
            logic.loginUser(email, password, error => {
                if (error) {
                    // Mostrar una alerta en caso de error
                    alert(error.message)
                    return
                }

                // Llamar a la función proporcionada por props en caso de éxito
                props.onSuccess()
            })
        } catch (error) {
            // Mostrar una alerta en caso de error durante el proceso de inicio de sesión
            alert(error.message)
        }
    }

    // Función para manejar el clic en el enlace de registro
    function handleRegisterClick(event) {
        event.preventDefault()

        // Llamar a la función proporcionada por props para cambiar a la vista de registro
        props.onRegisterClick()
    }

    // Renderizado del componente Login
    return (
        <Container>
            {/* Formulario de inicio de sesión */}
            <Form formStyle="form-login-register" onSubmit={handleSubmit}>
                <h1 className="login_register">Login</h1>
                <h3>Welcome to F4c3c4mp</h3>

                {/* Campo de entrada para el correo electrónico */}
                <Field id="email-input" type="email" placeholder="Username or E-mail address"></Field>

                {/* Campo de entrada para la contraseña */}
                <Field id="password-input" type="password" placeholder="Password"></Field>

                {/* Botón de envío del formulario */}
                <Button type="submit">Login</Button>

                <h3>Don't have an account yet?</h3>

                {/* Enlace para cambiar a la vista de registro */}
                <Link onClick={handleRegisterClick}>Sign up</Link>
            </Form>
        </Container>
    )
}

// Exporta el componente Login
export default Login
