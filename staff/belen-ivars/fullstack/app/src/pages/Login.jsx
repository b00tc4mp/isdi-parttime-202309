import logic from "../logic"

import { Button, Link, Form, Field, Container } from "../library"

import { useContext } from "../hooks"

function Login(props) {
	console.log('Login')

	const context = useContext()

	function handleSubmit(event) {
		event.preventDefault()


		const email = event.target.querySelector('#email-input').value
		const password = event.target.querySelector('#password-input').value

		try {
			logic.loginUser(email, password, error => {
				if (error) {
					context.handleError(error)

					return
				}
				// setTimeout(() => props.onSuccess(), 2000)
				props.onSuccess()
			})
		} catch (error) {
			context.handleError(error)
		}
	}

	function handleRegisterClick(event) {
		event.preventDefault()

		//console.log('register click')
		props.onRegisterClick()
	}

	return <Container>
		<h1 class='font-bold text-2xl'>What have you done today?</h1>
		<div class='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500/50 relative inline-block'>
			<h2 class='relative text-white text-2xl'> Show us!</h2>
		</div>
		<Form onSubmit={handleSubmit}>
			<Field id="email-input" type="email" >E-mail</Field>
			<Field id="password-input" type="password" >Password</Field>

			<Button type="submit">Login</Button>
		</Form>

		<Link onClick={handleRegisterClick}>Register</Link>
	</Container>
}

export default Login