// REGISTER

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

        // console.log(name, email, password)

        try {
            logic.registerUser(name, email, password)

            props.onSuccess()
            // Nos redirige a la vista de 'login' en APP
            
        } catch (error) {
            alert(error.message)
        }
    }


    //CLICK LINK
    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
        // Pasamos el elemento 'props' con el método de click de Login
    }


    // TEMPLATE
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

        <p>Go back to login!</p>

        <a href="" onClick={handleLoginClick}>Login</a>
    </div>
}