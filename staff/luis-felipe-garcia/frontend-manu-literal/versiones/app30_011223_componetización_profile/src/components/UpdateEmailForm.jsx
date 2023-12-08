import { Button, Field, Form } from "../library"

function UpdateEmailForm(props) {

    function handleChangeEmailSubmit() {
        onChangeEmailSubmit()

    }

    function handleCancel() {
        onCancel()

    }

    return <>
        <h2>Update e-mail</h2>
        <Form onSubmit={handleChangeEmailSubmit}>
            <Field type="email" forId="new-email-input" id="new-email-input">New e-mail</Field>
            <Field type="email" forId="new-email-confirm-input" id="new-email-confirm-input">Confirm new e-mail</Field>
            <Field type="password" forId="password-input" id="password-input">Password</Field>
            <div className="container-buttons">
                <Button type="submit">Update email</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </div>
        </Form>
    </>
}

export default UpdateEmailForm