import React from "react"

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault()

        const emailInput = event.target.querySelector("#email-input")
        const passwordInput = event.target.querySelector("#password-input")

        const email = emailInput.value
        const password = passwordInput.value

    }

    const handleRegisterClick = () => {

    }

    return <div className="login-view">
        <h1>ACCEDE A TU CUENTA</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email-input">E-mail</label>
                <input id="email-input" type="email" />
            </div>

            <div>
                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" />
            </div>

            <button type="submit">Login</button>
        </form>

        <p>¿Necesitas una cuenta? 👉 <a href="#" onClick={handleRegisterClick}>Register</a></p>
    </div>
}