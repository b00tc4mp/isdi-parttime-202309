function Register(props) {
    function handleSubmit(event) {
        event.preventDefault()

        // todo event tiene una propiedad llamada target
        // el target es el elemento sobre el cual se ha producido el evento de submit, osea el formulario
        // es un atajo para llegar al formulario

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value


        try {
            // nos vamos a la lógica a verificar
            logic.registerUser(name, email, password)

            // si todo va bien nos vamos a login
            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }

    return <div className="view">
        <h1>Register</h1>

        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name</label>
            <input id="name-input" type="text" />

            <label htmlFor="email-input">E-mail</label>
            <input id="email-input" type="email" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" />

            <button type="submit">Register</button>
        </form>

        <a href="" onClick={handleLoginClick}>Login</a>
    </div>
}