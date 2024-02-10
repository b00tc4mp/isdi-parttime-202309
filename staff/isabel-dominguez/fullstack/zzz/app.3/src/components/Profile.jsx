import logic from "../logic"
import { Button, Form, Field, Container } from "../library"
import context from "../logic/context"

function Profile({ onSuccess }) {

    const userId = context.sessionUserId

    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const newEmail = event.target.querySelector("#new-email-input").value
        const confirmNewEmail = event.target.querySelector("#new-email-confirm-input").value
        const password = event.target.querySelector("#password-input").value

        try {
            logic.changeUserEmail(newEmail, confirmNewEmail, password, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert("E-mail changed")

                onSuccess(event)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const password = event.target.querySelector("#password-input").value
        const newPassword = event.target.querySelector("#new-password-input").value
        const confirmNewPassword = event.target.querySelector("#new-password-confirm-input").value

        try {
            logic.changeUserPassword(newPassword, confirmNewPassword, password, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert("Password changed")

                onSuccess(event)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeleteAccount() {
        try {
            logic.deleteUser(userId, error => {

                if (error) {
                    alert(error.message)

                    return
                }

                logic.logoutUser()

                cancelIdleCallback(null, alert("Your account has been successfully deleted"))
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <Container>
        <h2>Update E-mail</h2>

        <Form onSubmit={handleChangeEmailSubmit}>
            <Field id="new-email-input" type="email">New E-mail</Field>
            <Field id="new-email-confirm-input" type="email">Confirm new E-mail</Field>
            <Field id="password-input" type="password">Password</Field>

            <Button type="submit">Update e-mail</Button>
        </Form>

        <h2>Update password</h2>

        <Form onSubmit={handleChangePasswordSubmit}>
            <Field id="password-input" type="password">Current password</Field>
            <Field id="new-password-input" type="password">New password</Field>
            <Field id="new-password-confirm-input" type="password">Confirm new password</Field>

            <Button type="submit">Update password</Button>
        </Form>

        <Button onClick={handleDeleteAccount}>Delete Account</Button>
    </Container>
}

export default Profile