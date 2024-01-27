import { Button, Link, Form, Field, Container } from '../library';

function Register(props) {
    console.log('Register');

    // Función para manejar el envío del formulario de registro
    function handleSubmit(event) {
        event.preventDefault();

        // Obtener los elementos de entrada del formulario
        const nameInput = event.target.querySelector('#name-input');
        const emailInput = event.target.querySelector('#email-input');
        const passwordInput = event.target.querySelector('#password-input');
        const birthdateInput = event.target.querySelector('#birthdate-input');
        const genderInput = event.target.querySelector('#gender-input');

        // Obtener los valores de los campos del formulario
        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const birthdate = birthdateInput.value;
        const gender = genderInput.value;

        try {
            // Llamar al método registerUser de la lógica para intentar registrar al usuario
            logic.registerUser(name, email, password, birthdate, gender, (error) => {
                if (error) {
                    // Mostrar una alerta en caso de error durante el registro
                    alert(error.message);
                    return;
                }

                // Llamar a la función proporcionada por props en caso de éxito
                props.onSuccess();
            });
        } catch (error) {
            // Mostrar una alerta en caso de error durante el proceso de registro
            alert(error.message);
        }
    }

    // Función para manejar el clic en el enlace de inicio de sesión
    function handleLoginClick(event) {
        event.preventDefault();

        // Llamar a la función proporcionada por props para cambiar a la vista de inicio de sesión
        props.onLoginClick();
    }

    // Renderizado del componente Register
    return (
        <Container>
            {/* Formulario de registro */}
            <Form formStyle="form-login-register" onSubmit={handleSubmit}>
                <h1 className="login_register">Register</h1>
                <h3>Register in F4c3c4mp is really easy!</h3>

                {/* Campo de entrada para el nombre de usuario */}
                <Field id="name-input">Username</Field>

                {/* Campo de entrada para el correo electrónico */}
                <Field id="email-input" type="email">E-mail</Field>

                {/* Campo de entrada para la contraseña */}
                <Field id="password-input" type="password">Password</Field>

                {/* Campo de entrada para la fecha de nacimiento */}
                <Field id="birthdate-input" type="date">Date of Birth</Field>

                {/* Campo de selección para el género */}
                <div>
                    <label htmlFor="gender-input">Gender:</label>
                    <select id="gender-input">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-Binary</option>
                    </select>
                </div>

                {/* Botón de envío del formulario */}
                <Button type="submit">Sign up</Button>

                <h3>Do you already have an account?</h3>

                {/* Enlace para cambiar a la vista de inicio de sesión */}
                <Link onClick={handleLoginClick}>Login</Link>
            </Form>
        </Container>
    );
}

// Exporta el componente Register
export default Register;



