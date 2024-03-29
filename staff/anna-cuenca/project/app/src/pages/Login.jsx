import logic from '../logic'

import { Button, Link, Form, Field, Container } from '../library'

import { useContext } from '../hooks'



function Login(props) {

    console.log('Login')

    const context = useContext()

    let userIdSession = ''

    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value


        try {

            logic.loginUser(email, password)
                .then(() => {

                    const userId = sessionStorage.getItem('userId')
                    console.log(userId)
                    props.onSuccess()
                })
                .catch(error => context.handleError(error))


        } catch (error) {

            context.handleError(error)
        }
    }



    function handleRegisterClick(event) {
        event.preventDefault()


        props.onRegisterClick()
    }

    //     return <div className="login-container">

    //         <div className="custom-header">  </div>

    //         <div className="login-container">

    //             <div className="custom-background"> <Container>

    //                 <h1>Login</h1>

    //                 <Form onSubmit={handleSubmit}>
    //                     <Field id="email-input" type="email">E-mail</Field>
    //                     <Field id="password-input" type="password">Password</Field>

    //                     <Button type="submit">Login</Button>
    //                 </Form>

    //                 <Link onClick={handleRegisterClick}>Register</Link>

    //             </Container>
    //             </div>

    //         </div>
    //     </div>
    // }

    return (
        <div className="login-wrapper">

            <div className="custom-header"></div>
            <div className="login-container flex flex-col justify-between"> {/* Añadido flex, flex-col y justify-between */}
                <Container>
                    <h1 className="h1-robotic">Login</h1>
                    <Form onSubmit={handleSubmit}>

                        <Field id="email-input" type="email">E-mail</Field>
                        <Field id="password-input" type="password">Password</Field>
                        <button className="button-login button" type="submit">Login</button>
                    </Form>
                    <Link onClick={handleRegisterClick}>Register</Link>
                </Container>
                <img src="/ottov5.gif" alt="Descripción del GIF" /> {/* Añadido self-center y mb-4 */}
            </div>
        </div>
    )
}



export default Login