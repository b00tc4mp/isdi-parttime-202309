import logic from "../logic"

import { Button, Link, Form, Field, Container} from '../library'

function Profile() {
    
    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const newEmailInput = event.target.querySelector('#new-email-input')
        const newEmailConfirmInput = event.target.querySelector('#new-email-confirm-input')
        const passwordInput = event.target.querySelector('#password-input')

        const newEmail = newEmailInput.value
        const newEmailConfirm = newEmailConfirmInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, newEmailConfirm, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }
            })
            
            alert('Email changed correctly')
            props.setView(null)

        } catch (error) {
            alert(error.message)
        }
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector('#password-input')
        const newPasswordInput = event.target.querySelector('#new-password-input')
        const newPasswordConfirmInput = event.target.querySelector('#new-password-confirm-input')

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value

        try {
            logic.changeUserPassword(password, newPassword, newPasswordConfirm, error =>{
                if(error) {
                    alert(error.message)
                }
            })

            alert('Password changed correctly')

        } catch (error) {
            alert(error.message)
        }
    }

   return  <div className="container">
            <h2>Update e-mail</h2>

            <form className="form" onSubmit={handleChangeEmailSubmit}>
                <label htmlFor="new-email-input">New e-mail:</label>
                <input className = "input" type="email" id="new-email-input"/>

                <label htmlFor="new-email-confirm-input">Confirm new email:</label>
                <input className = "input" type="email" id="new-email-confirm-input"/>

                <label htmlFor="password-input">Password:</label>
                <input className = "input" type="password" id="password-input"/>

                <button className= "button" type="submit">Update e-mail</button>
            </form>

            <h2>Update password</h2>

            <form className="form" onSubmit={handleChangePasswordSubmit}>
                <label htmlFor="password-input" >Current password:</label>
                <input className = "input" type="password" id="password-input"/>

                <label htmlFor="new-password-input">New password:</label>
                <input className = "input" type="password" id="new-password-input"/>

                <label htmlFor="new-password-confirm-input">Confirm new password:</label>
                <input className = "input" type="password" id="new-password-confirm-input"/>

                <button className= "button" type="submit">Update password</button>
            </form>
        </div>
}

export default Profile