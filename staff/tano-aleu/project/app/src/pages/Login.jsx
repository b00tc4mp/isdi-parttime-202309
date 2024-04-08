import logic from '../logic'

import { Button, Link, Form, Field, Container } from '../library'

import { useContext } from '../hooks'

import logo from '../assets/synqple.logo.png';

import versionLogo from '../assets/synqple.logo.version.white.png'

function Login(props) {
    console.log('Login')

    const context = useContext()

    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.loginUser(email, password)
                .then(() => props.onSuccess())
                .catch(error => context.handleError(error))

        } catch (error) {
            context.handleError(error)
        }
    }

    function handleRegisterClick(event) {

        event.preventDefault()

        props.onRegisterClick()
    }

    return <div className="bg-[#5F5784] border rounded-3xl p-10 border-black text-white flex flex-col space-y-1 overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

        <div className='flex flex-col items-center justify-center '>

            <img src={versionLogo} alt="versionLogo" className="w-60 h-auto mt-20 mb-10" />

            <h1 class="text-white mb-10" >Welcome again!</h1>

            <Form onSubmit={handleSubmit}>

                <Field id="email-input" type="email">E-mail</Field>
                <Field id="password-input" type="password">Password</Field>

                <Button type="submit" className="login-register-button mb-4">Login</Button>

            </Form>


            <Link onClick={handleRegisterClick}>Register</Link>

            <footer className=" text-white text-center py-0 mt-10 ">

                <img src={logo} alt="Logo" className="w-40 h-auto mt-40" />

            </footer>

        </div>
    </div>
}

export default Login