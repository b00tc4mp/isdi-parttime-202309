import { Button, Field, Form } from '../library'

function Profile(props) {
  return (
    <div className="container">
      <h2>Update e-mail</h2>

      <Form onSubmit={props.onEmailSubmit}>
        <Field id="new-email-input" type="email">
          New-email
        </Field>
        <Field id="new-email-confirm-input" type="email">
          Confirm new-email:
        </Field>
        <Field id="password-input" type="password">
          Password:
        </Field>

        <Button type="submit">Update e-mail</Button>
      </Form>

      <h2>Update password</h2>

      <Form onSubmit={props.onPasswordSubmit}>
        <Field id="password-input" type="password">
          Current password:
        </Field>
        <Field id="new-password-input" type="password">
          New password:
        </Field>
        <Field id="new-password-confirm-input" type="password">
          Confirm new password:
        </Field>

        <Button type="submit">Update password</Button>
      </Form>
    </div>
  )
}

export default Profile
