function Register(props) {
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
            })

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

        <a className="link" href="" onClick={handleLoginClick}>Login</a>
    </div>

}

export default Register