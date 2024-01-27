// --------------- LOGIN component --------------- 

function Login(props) {
    console.log('Login')

    //CLICK LINK (<a/>)
    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
        // Pasamos el elemento 'props' con el método de click de Register
    }

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

    //TEMPLATE
    return <div className="view">

        <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h3>Welcome to F4c3c4mp App</h3>
        
            <label htmlFor="email-input"></label>
            <input id="email-input" type="email" placeholder="Username or E-mail address"/>

            <label htmlFor="password-input"></label>
            <input type="password" id="password-input" placeholder="Password"/>

            <button id="login-button" type="submit">Login</button>
            
            <p>Don't have an acount yet?</p>

        <a id= "new-account" href="" onClick={handleRegisterClick}>Create new account</a>
        </form>

        
    </div>
}