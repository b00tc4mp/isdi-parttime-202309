import logic from '../logic'
import Context from '../Context'

import { Button, Link, Form, Field, Container } from '../library'

import { useContext } from '../hooks'

function Login(props) {
	console.log('Login')

	const context = useContext()

	const handleSubmit = async event => {
		event.preventDefault()

		const emailInput = event.target.querySelector('#email-input')
		const passwordInput = event.target.querySelector('#password-input')

		const email = emailInput.value
		const password = passwordInput.value

		try {
			await logic.loginUser(email, password)

			props.onSuccess()

		} catch (error) {
			context.handleError(error)
		}
	}

	const handleRegisterClick = event => {
		event.preventDefault()

		props.onRegisterClick()
	}

	return <Container className='login-register'>
		<div className='title-div'>
			<h1 className='title-text'>Login</h1>
		</div>
		<Form onSubmit={handleSubmit}>
			<Field id="email-input" type="email">E-mail</Field>
			<Field id="password-input" type="password">Password</Field>

			<Button type="submit">Login</Button>
		</Form>
		<p>I haven't got an account </p>
		<Link onClick={handleRegisterClick}>Register</Link>

	</Container>
}

export default Login