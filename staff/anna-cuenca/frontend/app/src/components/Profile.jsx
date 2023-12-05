import { Button, Form } from '../library'
import logic from '../logic'

export default function Profile() {

    console.log('Profile')


    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector("#password-input")
        const newPasswordInput = event.target.querySelector("#new-password-input")
        const newPasswordConfirmInput = event.target.querySelector("#new-password-confirm-input")

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value

        try {
            logic.changeUserPassword(newPassword, newPasswordConfirm, password)

            alert("Password changed")

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const newEmailInput = event.target.querySelector("#new-email-input")
        const newEmailConfirmInput = event.target.querySelector("#new-email-confirm-input")
        const passwordInput = event.target.querySelector("#password-input")

        const newEmail = newEmailInput.value
        const newEmailConfirm = newEmailConfirmInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, newEmailConfirm, password)

            alert("E-mail changed")

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="container">
        <h2>Update e-mail</h2>

        <Form onSubmit={handleChangeEmailSubmit}>
            <label htmlFor="new-email-input">New e-mail</label>
            <input className="input" id="new-email-input" type="email" />

            <label htmlFor="new-email-confirm-input">Confirm new e-mail</label>
            <input className="input" id="new-email-confirm-input" type="email" />

            <label htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" />

            <Button type="submit">Update e-mail</Button>
        </Form>

        <h2>Update password</h2>

        <Form onSubmit={handleChangePasswordSubmit}>
            <label htmlFor="password-input">Current password</label>
            <input className="input" type="password" id="password-input" />

            <label htmlFor="new-password-input">New password</label>
            <input className="input" id="new-password-input" type="password" />

            <label htmlFor="new-password-confirm-input">Confirm new password</label>
            <input className="input" id="new-password-confirm-input" type="password" />

            <Button type="submit">Update password</Button>
        </Form>
    </div>
}