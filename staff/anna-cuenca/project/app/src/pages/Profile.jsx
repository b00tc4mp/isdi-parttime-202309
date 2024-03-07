import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Form, Field } from '../library/index'
import logic from '../logic'
import { useContext } from '../hooks'


export default function Profile() {


    const navigate = useNavigate()

    const context = useContext()


    console.log('Profile')

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        logic.retrieveUserInfo()
            .then(data => {
                setUserData(data)
            })
            .catch(error => {
                context.handleError(error) // Manejar el error según tu lógica o contexto global
            })
    }, []) // El array vacío hace que no se pinte más

    const [showChangePassword, setShowChangePassword] = useState(null)
    const [showChangeEmail, setShowChangeEmail] = useState(null)





    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector("#password-input")
        const newPasswordInput = event.target.querySelector("#new-password-input")
        const newPasswordConfirmInput = event.target.querySelector("#new-password-confirm-input")

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value

        try {
            logic.changeUserPassword(password, newPassword, newPasswordConfirm)

                .then(() => {

                    alert("Password changed")
                    event.target.reset()

                    navigate('/')

                })

                .catch(error => context.handleError(error))

        } catch (error) {
            context.handleError(error)
        }
    }

    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const newEmailInput = event.target.querySelector("#new-email-input")
        const newEmailConfirmInput = event.target.querySelector("#new-email-confirm-input")
        const passwordInput = event.target.querySelector("#password-input")

        const newEmail = newEmailInput.value
        const newEmailConfirm = newEmailConfirmInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, newEmailConfirm, password)
                .then(() => {

                    alert("E-mail changed")

                    event.target.reset() // limpia los campos
                    navigate('/')

                })
                .catch(error => context.handleError(error))


        } catch (error) {
            context.handleError(error)
        }
    }

    function toggleChangePassword() {
        setShowChangePassword(!showChangePassword)
    }

    function toggleChangeEmail() {
        setShowChangeEmail(!showChangeEmail)

    }

    if (!userData) {
        return <div>Loading...</div>; // Mostrar un spinner o mensaje mientras los datos se cargan
    }

    return (
        <div className="container">
            <h2>Profile</h2>
            <div>
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
                <p>Robot: {userData.robot}</p>
                <p>Role: {userData.role}</p>
            </div>
            <Button onClick={toggleChangeEmail}>Change E-mail</Button>
            {showChangeEmail && (
                <div>
                    <h3>Update e-mail</h3>
                    <Form onSubmit={handleChangeEmailSubmit}>
                        <Field id="new-email-input" type="email" label="New e-mail" />
                        <Field id="new-email-confirm-input" type="email" label="Confirm new e-mail" />
                        <Field id="email-password-input" type="password" label="Password" />
                        <Button type="submit">Update e-mail</Button>
                    </Form>
                </div>
            )}
            <Button onClick={toggleChangePassword}>Change Password</Button>
            {showChangePassword && (
                <div>
                    <h3>Update password</h3>
                    <Form onSubmit={handleChangePasswordSubmit}>
                        <Field id="current-password-input" type="password" label="Current password" />
                        <Field id="new-password-input" type="password" label="New password" />
                        <Field id="new-password-confirm-input" type="password" label="Confirm new password" />
                        <Button type="submit">Update password</Button>
                    </Form>
                </div>
            )}
        </div>
    );
}