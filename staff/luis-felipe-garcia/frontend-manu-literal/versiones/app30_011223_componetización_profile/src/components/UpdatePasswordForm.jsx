import { Field } from "../library"
import Form from "../library/Form"
import Button from "../library/Button"

function UpdatePasswordForm(props) {

    function handleChangePasswordSubmit () {
        onChangePasswordCancel()

    }

    function handleCancel () {
        oncancel()

    }

    return <>
        <h2>Update password</h2>
        <Form onSubmit={handleChangePasswordSubmit}>
            <Field type="password" forId="password-input" id="password-input">Current password</Field>
            <Field type="password" forId="new-password-input" id="new-password-input">New password</Field>
            <Field type="password" forId="new-password-confirm-input" id="new-password-confirm-input">Confirm ew password</Field>
            <div className="container-buttons">
                <Button type="submit">Update password</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </div>

        </Form>
    </>
}

export default UpdatePasswordForm