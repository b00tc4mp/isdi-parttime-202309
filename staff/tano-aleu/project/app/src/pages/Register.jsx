import { Button, Link, Form, Field, Container } from '../library'

import logic from '../logic'

import { useContext } from '../hooks'

import logo from '../assets/synqple.logo.png';

import versionLogo from '../assets/synqple.logo.version.white.png'

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

        //console.log(name, email, password)

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

    return <div className="bg-[#5F5784] border rounded-3xl p-4 border-black flex flex-col  overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

        <div className='flex flex-col items-center justify-center '>

            <img src={versionLogo} alt="versionLogo" className="w-60 h-auto mt-20 mb-10" />

            <h1 class="text-white mb-14">Sign up to start playing!</h1>

            <Form onSubmit={handleSubmit}>

                <Field id="name-input">Name</Field>
                <Field id="email-input" type="email">E-mail</Field>
                <Field id="password-input" type="password">Password</Field>

                <Button type="submit" className="login-register-button mb-4">Register</Button>

            </Form>

            <Link onClick={handleLoginClick}>Login</Link>

            <footer className=" text-white text-center py-0 mt-10 ">

                <img src={logo} alt="Logo" className="w-40 h-auto mt-20" />

            </footer>

        </div>
    </div>

}

export default Register