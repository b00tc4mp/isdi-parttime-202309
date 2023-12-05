import { Button, Field, Form } from "../library"

function UpdateEmailForm(props) {
    return <>
        <h2>Update e-mail</h2>
        <Form onSubmit={props.onChangeEmailSubmit}>
            <Field type="email" forId="new-email-input" id="new-email-input">New e-mail</Field>
            <Field type="email" forId="new-email-confirm-input" id="new-email-confirm-input">Confirm new e-mail</Field>
            <Field type="password" forId="password-input" id="password-input">Password</Field>
            <Button type="submit">Update email</Button>
        </Form>
    </>
}

export default UpdateEmailForm