import React from "react"
import { useState } from "react"

import Login from "./Login"

export default function Register() {

    const [view, setView] = useState(null)

    const handleLoginClick = (event) => {
        event.preventDefault()

        setView('login-link')
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

            <p>Vuelve a <a href="" className="login-link" onClick={handleLoginClick}>Acceder a tu cuenta</a></p>
        </div>

        {view === 'login-link' && <Login />}
    </>
}