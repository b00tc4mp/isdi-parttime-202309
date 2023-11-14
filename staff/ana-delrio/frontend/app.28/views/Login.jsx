function Login(props) {
    function handleSubmit(event) {
        event.preventDefault()

        // todo event tiene una propiedad llamada target
        // el target es el elemento sobre el cual se ha producido el evento de submit, osea el formulario
        // es un atajo para llegar al formulario

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value


        try {
            // nos vamos a la lógica a verificar
            logic.loginUser(email, password)
            // si todo va bien nos vamos a la home
            props.onSuccess()

        } catch (error) {
            alert(error.message)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <div className="view">
        <h1>Login</h1>

        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email-input">E-mail</label>
            <input id="email-input" type="email" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" />

            <button type="submit">Login</button>
        </form>

        <a href="" onClick={handleRegisterClick}>Register</a>
    </div>
}