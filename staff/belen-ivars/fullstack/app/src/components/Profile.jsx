import { Button, Form, Field } from "../library"

import logic from "../logic"

function handleChangeEmailSubmit(event) {
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
			alert('Email changed!')
			setView(null)
		})
	} catch (error) {
		alert(error.message)
	}
}

function handleChangePasswordSubmit(event) {
	event.preventDefault()

	const newPassword = event.target.querySelector('#new-password-input').value
	const newPasswordConfirm = event.target.querySelector('#new-password-confirm-input').value
	const password = event.target.querySelector('#password-input').value

	try {
		logic.changeUserPassword(newPassword, newPasswordConfirm, password, error => {
			if (error) {
				alert(error.message)

				return
			}
			alert('Password changed successfully!')
			setView(null)
		})
	} catch (error) {
		alert(error.message)
	}
}

function Profile() {
	console.log('Profile')

	return <div className="container">
		<h2>Update e-mail</h2>

		<Form onSubmit={handleChangeEmailSubmit}>
			<Field id="new-email-input" type="email">New e-mail</Field>
			<Field id="new-email-confirm-input" type="email">Confirm new e-mail</Field>
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
	</div>
}

export default Profile