import React from "react"
import { Routes, Route, useNavigate, Link } from 'react-router-dom'

import Register from "./Register"

export default function Login() {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const emailInput = event.target.querySelector("#email-input")
        const passwordInput = event.target.querySelector("#password-input")

        const email = emailInput.value
        const password = passwordInput.value

    }

    const handleRegisterClick = (event) => {
        event.preventDefault()

        navigate("/user-icon/register")
    }

    return <>
        <div className="login-view">
            <h1>ACCEDE A TU CUENTA</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email-input">Correo electrónico</label>
                    <input id="email-input" type="email" />
                </div>

                <div>
                    <label htmlFor="password-input">Contraseña</label>
                    <input id="password-input" type="password" />
                </div>

                <button type="submit">Acceder</button>
            </form>

            <p>¿Necesitas una cuenta? 👉 <Link className="register" onClick={handleRegisterClick}>Registrar</Link></p>
        </div>

        <Routes>
            <Route path="/user-icon/register" element={<Register />} />
        </Routes>
    </>

}