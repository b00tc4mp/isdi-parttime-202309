import logic from "../logic"

function Login(props) {

    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector("#email-input")
        const passwordInput = event.target.querySelector("#password-input")

        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.loginUser(email, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onSuccess()
            })
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

        <p>If you are new, <a className="links" href="" onClick={handleRegisterClick}>Register</a> here 👈</p>
    </div>
}

export default Login