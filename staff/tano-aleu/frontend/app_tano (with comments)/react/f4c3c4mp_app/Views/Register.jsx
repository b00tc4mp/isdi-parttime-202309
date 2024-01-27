//  --------------- REGISTER component --------------- 

function Register(props) {
    console.log('Register')

    //CLICK LINK
    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
        // Pasamos el elemento 'props' con el método de click de Login
    }

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

    // TEMPLATE
    return <div className="view">
        

        <form className="form" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <h3>It is fast and easy.</h3>
            <label htmlFor="name-input">Name</label>
            <input id="name-input" type="text" />

            <label htmlFor="email-input">E-mail</label>
            <input id="email-input" type="email" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" />

            <button type="submit">Register</button>
        <p>Go back to login!</p>

        <a href="" id="back-login" onClick={handleLoginClick}>Login</a>
        </form>

    </div>
}