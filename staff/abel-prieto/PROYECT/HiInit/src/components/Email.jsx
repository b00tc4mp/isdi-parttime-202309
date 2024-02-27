import { useState } from 'react'

function Email() {
    // FIELDS STATE
    const [showNewEmail, setShowNewEmail] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPass, setShowRepeatPass] = useState(false)

    function showInputPassword() {
        setShowPassword(true)
    }

    function handleSubmit(event) {
        event.preventDefault()

        const email = event.target.querySelector('#email').value
        const password = event.target.querySelector('#password').value

        try {
            logic.loginUser(email, password)
                .then(() => onSuccess())
                .catch(error => {
                    const clientError = document.querySelector('#client-error')

                    clientError.innerText = error.message
                    clientError.style.color = 'red'

                    return
                })
        } catch (error) {
            alert(error.message)
        }

        document.body.addEventListener('keydown', function () {
            const clientError = document.querySelector('#client-error')

            clientError.innerText = 'Entry your credentials: '
            clientError.style.color = '#EBDBB2'
        })
    }

    return <>
        <div>
            <p>~$</p>

            <span>
                <form className="login-form" onSubmit={handleSubmit}>
                    <p id="client-error">Entry your data account: </p>

                    {showNewEmail && (
                        <div className="fields">
                            <label htmlFor="email"><p style={{ color: '#18E3C8' }}>New Email: </p></label>
                            <input type="text" id="email" contentEditable="true" autoComplete="off" onChange={showInputPassword} />
                        </div>
                    )}

                    {showPassword && (
                        <div className="fields">
                            <label htmlFor="password"><p style={{ color: '#18E3C8' }}>Password: </p></label>
                            <input type="password" id="password" contentEditable="true" autoComplete="off" />
                        </div>
                    )}

                    {showRepeatPass && (
                        <div className="fields">
                            <label htmlFor="password"><p style={{ color: '#18E3C8' }}>Repeat password: </p></label>
                            <input type="password" id="password" contentEditable="true" autoComplete="off" />
                        </div>
                    )}

                    <button className="button-form">Send</button>
                </form>
            </span>
        </div >
    </>
}

export default Email