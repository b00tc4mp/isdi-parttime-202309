import React from "react"

import { Routes, Route, useNavigate, Link } from 'react-router-dom'

import Login from "./Login"

export default function Register() {

    const navigate = useNavigate()

    const handleLoginClick = (event) => {
        event.preventDefault()

        navigate('/user-icon')
    }


    return <>
        <div className="register-view">
            <h1>REGÍSTRATE</h1>

            <form>
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