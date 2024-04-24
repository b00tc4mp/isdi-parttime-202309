import { Button, Link, Form, Field, Container } from "../library"
import logic from "../logic"

import { useContext } from "../hooks"

function Register(props) {
	console.log('Register')

	const context = useContext()

	function handleSubmit(event) {
		event.preventDefault()

		const nameInput = event.target.querySelector('#name-input')
		const emailInput = event.target.querySelector('#email-input')
		const passwordInput = event.target.querySelector('#password-input')

		const name = nameInput.value
		const email = emailInput.value
		const password = passwordInput.value

		try {
			logic.registerUser(name, email, password)
				.then(() => props.onSuccess())
				.catch(error => context.handleError(error))
		} catch (error) {
			context.handleError(error)
		}
	}

	function handleLoginClick(event) {
		event.preventDefault()

		props.onLoginClick()
	}

	return <div className='login-register'>
		<header>
			<div className="page-title-div">
				<h1 className="page-title-text">Register</h1>
			</div>
		</header>

		<Container>
			<Form onSubmit={handleSubmit}>
				<Field id="name-input">Name</Field>
				<Field id="email-input" type="email">E-mail</Field>
				<Field id="password-input" type="password">Password</Field>

				<Button type="submit">Register</Button>
			</Form>
		</Container>

		<Link className="text-link-login-register" onClick={handleLoginClick}>Login</Link>

	</div>
}

export default Register