import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'
import Context from '../Context'

function Email() {
    // FIELDS STATE
    const [showNewEmail, setShowNewEmail] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPass, setShowRepeatPass] = useState(false)

    const { handleError } = useContext(Context)
    const navigate = useNavigate()

    function showInputPassword() {
        setShowPassword(true)
    }

    function showInputRepeatPassword() {
        setShowRepeatPass(true)
    }

    function handleSubmit(event) {
        event.preventDefault()

        const newEmail = event.target.querySelector('#new-email').value
        const password = event.target.querySelector('#password').value
        const againPassword = event.target.querySelector('#repeat-password').value

        try {
            logic.changeUserEmail(newEmail, password, againPassword)
                .then(() => {
                    const clientError = document.querySelector('#client-error-email')

                    clientError.innerText = 'Email successfully changed ✅'
                    clientError.style.color = 'green'
                })
                .catch(error => {
                    const clientError = document.querySelector('#client-error-email')

                    clientError.innerText = error.message
                    clientError.style.color = 'tomato'

                    handleError(error, navigate)

                    return
                })
        } catch (error) {
            const clientError = document.querySelector('#client-error-email')

            clientError.innerText = error.message
            clientError.style.color = 'tomato'

            handleError(error, navigate)
        }

        document.body.addEventListener('keydown', function () {
            const clientError = document.querySelector('#client-error-email')

            clientError.innerText = 'Change Email - Entry your data account: '
            clientError.style.color = '#EBDBB2'

            document.getElementById("email-form").reset()
        })
    }

    return <>
        <div>
            <p>~$</p>

            <span>
                <form id="email-form" onSubmit={handleSubmit}>
                    <p id="client-error-email">Change Email - Entry your data account: </p>

                    {showNewEmail && (
                        <div className="fields">
                            <label htmlFor="new-email"><p style={{ color: '#18E3C8' }}>New Email: </p></label>
                            <input type="text" id="new-email" contentEditable="true" autoComplete="off" onChange={showInputPassword} />
                        </div>
                    )}

                    {showPassword && (
                        <div className="fields">
                            <label htmlFor="password"><p style={{ color: '#18E3C8' }}>Password: </p></label>
                            <input type="password" id="password" contentEditable="true" autoComplete="off" onChange={showInputRepeatPassword} />
                        </div>
                    )}

                    {showRepeatPass && (
                        <div className="fields">
                            <label htmlFor="repeat-password"><p style={{ color: '#18E3C8' }}>Repeat password: </p></label>
                            <input type="password" id="repeat-password" contentEditable="true" autoComplete="off" />
                        </div>
                    )}

                    <button className="button-form">Send</button>
                </form>
            </span>
        </div >
    </>
}

export default Email