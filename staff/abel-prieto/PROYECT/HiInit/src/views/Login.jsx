import { useState } from 'react'
import logic from '../logic'

function Login({ onSuccess }) {

    // FIELDS STATE
    const [showEmail, setShowEmail] = useState(true)
    const [showPassword, setShowPassword] = useState(false)

    function showInputPassword() {
        setShowPassword(true)
    }

    function handleSubmit(event) {
        event.preventDefault()

        const email = event.target.querySelector('#email').value
        const password = event.target.querySelector('#password').value

        try {
            logic.loginUser(email, password)
                .catch(error => {
                    document.querySelector('#client-error').innerText = error.message

                    return
                })
                .then(() => onSuccess())
        } catch (error) {

        }

    }

    return <>
        <div>
            <p>~$</p>

            <span>
                <form className="login-form" onSubmit={handleSubmit}>
                    <p id="client-error">Entry your credentials: </p>

                    {showEmail && (
                        <div className="fields">
                            <label htmlFor="email"><p style={{ color: '#18E3C8' }}>Email: </p></label>
                            <input type="text" id="email" contentEditable="true" autoComplete="off" onChange={showInputPassword} />
                        </div>
                    )}

                    {showPassword && (
                        <div className="fields">
                            <label htmlFor="password"><p style={{ color: '#18E3C8' }}>Password: </p></label>
                            <input type="password" id="password" contentEditable="true" autoComplete="off" />
                        </div>
                    )}

                    <button className="button-form">Send</button>
                </form>
            </span>
        </div >
    </>
}

export default Login