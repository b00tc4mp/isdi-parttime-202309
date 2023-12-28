import { Button, Field, Form } from "../library"
import logic from "../logic"
import UpdateEmailForm from "./UpdateEmailForm"
import UpdatePasswordForm from "./UpdatePasswordForm"


function Profile(props) {
    console.log('Profile')


    function handleNewEmailSubmit(event) {
        event.preventDefault()

        const newEmail = event.target.querySelector('#new-email-input').value
        const newEmailConfirm = event.target.querySelector('#new-email-confirm-input').value
        const password = event.target.querySelector('#password-input').value

        try {
            logic.changeUserEmail(newEmail, newEmailConfirm, password, error => {
                if (error) {
                    alert(error.message)
                    return
                }
                alert('E-mail changed')
                event.target.reset()
                props.onChangeEmailSubmit()
                //                setView(null)
            })

        } catch (error) {
            alert(error.message)
        }
    }

    function handleNewPasswordSubmit(event) {
        event.preventDefault()

        const password = event.target.querySelector('#password-input').value
        const newPassword = event.target.querySelector('#new-password-input').value
        const newPasswordConfirm = event.target.querySelector('#new-password-confirm-input').value

        try {
            logic.changeUserPassword(newPassword, newPasswordConfirm, password, error => {
                if (error) {
                    alert(error.message)
                    return
                }
                alert('Password changed')

                event.target.reset()
                props.onChangePasswordSubmit()
                //  setView(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleCancel(event) {
        event.preventDefault()
        props.onCancel()
    }

    return <div className="container">
        <div className="container-change-email">
            <h2>Update e-mail</h2>
            <Form onSubmit={handleNewEmailSubmit}>
                <Field type="email" forId="new-email-input" id="new-email-input">New e-mail</Field>
                <Field type="email" forId="new-email-confirm-input" id="new-email-confirm-input">Confirm new e-mail</Field>
                <Field type="password" forId="password-input" id="password-input">Password</Field>
                <div className="container-buttons">
                    <Button type="submit">Update email</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </div>
            </Form>
        </div>
        <div className="container-change-password">
            <h2>Update password</h2>
            <Form onSubmit={handleNewPasswordSubmit}>
                <Field type="password" forId="password-input" id="password-input">Current password</Field>
                <Field type="password" forId="new-password-input" id="new-password-input">New password</Field>
                <Field type="password" forId="new-password-confirm-input" id="new-password-confirm-input">Confirm ew password</Field>
                <div className="container-buttons">
                    <Button type="submit">Update password</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </div>

            </Form>
        </div>
    </div>
}


export default Profile