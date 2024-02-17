import React from "react"

export default function Register() {

    const handleLoginClick = () => {

    }


    return <div className="register-view">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name-input">Name</label>
                <input id="name-input" type="text" />
            </div>

            <div>
                <label htmlFor="email-input">E-mail</label>
                <input id="email-input" type="email" />
            </div>

            <div>
                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" />
            </div>

            <button type="submit">Register</button>
        </form>

        <p>Go back to <a href="#" onClick={handleLoginClick}>Login</a></p>
    </div>
}