import React from "react"
import logic from '../logic'

import { Routes, Route, useNavigate, Link } from 'react-router-dom'

import Login from "./Login"

export default function Register(props) {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        const nameInput = event.target.querySelector("#name-input")
        const emailInput = event.target.querySelector("#email-input")
        const passwordInput = event.target.querySelector("#password-input")

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.registerUser(name, email, password)
                .then(() => navigate('/user-icon'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLoginClick = (event) => {
        event.preventDefault()

        navigate('/user-icon')
    }

    return <>
        <div className="register-view">
            <h1>REGÍSTRATE</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name-input">Nombre</label>
                    <input id="name-input" type="text" />
                </div>

                <div>
                    <label htmlFor="email-input">Correo electrónico</label>
                    <input id="email-input" type="email" />
                </div>

                <div>
                    <label htmlFor="password-input">Contraseña</label>
                    <input id="password-input" type="password" />
                </div>

                <button type="submit">Registrar</button>
            </form>

            <p>Vuelve a <Link className="login-link" onClick={handleLoginClick}>Acceder a tu cuenta</Link></p>
        </div>

        <Routes>
            <Route path="/user-icon" element={<Login />} ></Route>
        </Routes>
    </>
}