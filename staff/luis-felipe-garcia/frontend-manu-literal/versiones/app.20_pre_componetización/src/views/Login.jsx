import logic from "../logic"

function Login(props) {
    console.log('Login')

    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        // console.log(email, password)
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


    return <div className="view" >
        <h2>Neverland Island</h2>

        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email-input">E-mail</label>
            <input className="input" id="email-input" type="email" />

            <label htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" />

            <button className="button" type="submit">Login</button>
        </form>

        <a className="link" href="" onClick={handleRegisterClick}>Register</a>
    </div>
}

export default Login