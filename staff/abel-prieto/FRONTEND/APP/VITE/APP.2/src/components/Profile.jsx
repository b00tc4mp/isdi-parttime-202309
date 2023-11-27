import logic from "../logic"

import { Container, Form, Field, Button } from "../librery"


// PROFILE
function Profile() {
    console.log('Home -> Profile')

    // SETTINGS - CHANGE EMAIL
    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const newEmailInput = event.target.querySelector('#new-email')
        const confirmNewEmailInput = event.target.querySelector('#confirm-new-email')
        const passwordInput = event.target.querySelector('#password')

        const newEmail = newEmailInput.value
        const confirmNewEmail = confirmNewEmailInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, confirmNewEmail, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                alert('Email changed successfully!')

            })

        } catch (error) {
            alert(error.message)
        }
    }

    // SETTINGS - CHANGE PASSWORD
    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector('#current-password')
        const newPasswordInput = event.target.querySelector('#new-password')
        const againNewPasswordInput = event.target.querySelector('#again-new-password')

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const againNewPassword = againNewPasswordInput.value

        try {
            logic.changeUserPassword(password, newPassword, againNewPassword, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                alert('Password changed successfully!')
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // TEMPLATE
    return <>
        <Container>
            <h2>Changes credentials</h2>

            <Form onSubmit={handleChangeEmailSubmit}>
                <h3>Change your email: </h3>

                <Field htmlFor="new-email" type="email">New email</Field>

                <Field htmlFor="confirm-new-email" type="email">Confirm new email</Field>

                <Field htmlFor="password" type="password">Password</Field>

                <Button type="submit">Change Email</Button>
            </Form>

            <Form onSubmit={handleChangePasswordSubmit}>
                <h3>Change your password: </h3>

                <Field htmlFor="current-password" type="password">Actual password</Field>

                <Field htmlFor="new-password" type="password">New password</Field>

                <Field htmlFor="again-new-password" type="password">Confirm new password</Field>

                <Button type="submit">Change Password</Button>
            </Form>

        </Container>
    </>
}

export default Profile