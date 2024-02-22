import { useState } from 'react'
import logic from '../logic'

function Register({ onSuccess }) {

    // FIELDS STATE
    const [showUsername, setShowUsername] = useState(true)
    const [showEmail, setShowEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    // SHOW EMAIL INPUT
    function showInputEmail() {
        setShowEmail(true)
    }

    // SHOW PASSWORD INPUT
    function showInputPassword() {
        setShowPassword(true)
    }

    // REGISTER FUNCTION
    function handleSubmit(event) {
        event.preventDefault()

        const username = event.target.querySelector('#username').value
        const email = event.target.querySelector('#email').value
        const password = event.target.querySelector('#password').value

        try {
            return logic.registerUser(username, email, password)
                .then(() => onSuccess())
                .catch(error => {
                    document.querySelector('#client-error').innerText = error.message

                    return
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <>
        <div>
            <p>~$</p>
            <span>
                <form className="register-form" onSubmit={handleSubmit}>
                    <p id="client-error">Create your account data: </p>

                    <div className="space-between">
                        {showUsername && (
                            <div className="fields">
                                <label htmlFor="username"> <p style={{ color: '#18E3C8' }}>Username: </p></label>
                                <input type="text" id="username" contentEditable="true" autoComplete="off" onChange={showInputEmail} />
                            </div>
                        )}

                        {showEmail && (
                            <div className="fields">
                                <label htmlFor="email"><p style={{ color: '#18E3C8' }}>Email: </p></label>
                                <input type="text" id="email" contentEditable="true" autoComplete="off" onChange={showInputPassword} />
                            </div>
                        )}

                        {showPassword && (
                            <div className="fields">
                                <label htmlFor="password"><p style={{ color: '#18E3C8' }}>Password: </p></label>
                                <input type="password" id="password" contentEditable="true" autoComplete="off" name="password" />
                            </div>
                        )}
                    </div>

                    <button className="button-form" type="submit" >Send</button>
                </form>
            </span>

        </div >
    </>
}

export default Register