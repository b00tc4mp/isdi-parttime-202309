function Login(props) {
    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        //console.log(email, password)
        try {
            logic.loginUser(email, password)

            props.Onsucces()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        //console.log ('register click')
        props.onRegisterClick
    }

    return <div classname="view">
        <h1>Login</h1>

        <form classname="form" onSubmit={handleSubmit}>
            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" />

            <button type="submit">Login</button>
        </form>

        <a href="" onclick={handleRegisterClick}>Register</a>
    </div>
}