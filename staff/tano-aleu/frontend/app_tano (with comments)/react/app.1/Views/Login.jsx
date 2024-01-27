//LOGIN

function Login(props) {
    console.log('Login')

    // FORM LOGIN
    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')
        // Usamos 'target' porque todo (event) del DOM apunta a un sitio, en este caso, al formulario del componente Login

        const email = emailInput.value
        const password = passwordInput.value

        // console.log(email, password)
        try {
            logic.loginUser(email, password)

            props.onSuccess()
            // Nos redirige a la vista de 'home' en APP

        } catch (error) {
            alert(error.message)
        }
    }


    //CLICK LINK (<a/>)
    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
        // Pasamos el elemento 'props' con el método de click de Register
    }


    //TEMPLATE
    return <div className="view">
        <h1>Login</h1>

        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email-input">E-mail</label>
            <input id="email-input" type="email" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" />

            <button type="submit">Login</button>
        </form>

        <p>Dont have an acount yet?</p>
        <a href="" onClick={handleRegisterClick}>Create new account</a>
    </div>
}