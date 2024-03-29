import React from 'react'
import logic from '../logic'
import { Button, Link, Form, Field, Container } from '../library'
import { useContext } from '../hooks'


export default function Login({onSuccess}) {
    console.log('Login')

    const context = useContext()

    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        return (async() => {
            try {
                await logic.loginUser(email, password)

                const user = await logic.retrieveUser()
                
                logic.context.isAdmin = user.Admin

                onSuccess()
            } catch (error) {
                context.handleError(error)
            }
        })()
    }


    return <>

    <Container className='login-container'>
        <Form onSubmit={handleSubmit}>
            <Field id="email-input" type="email">E-mail</Field>
            <Field id="password-input" type="password">Password</Field>

            <Button type="submit">Login</Button>
        </Form>
    </Container>
    </>
}