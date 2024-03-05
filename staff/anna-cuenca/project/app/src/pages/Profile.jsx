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

    return <div className="container">
        <h2> {userData.name}'s Profile</h2>
        {userData && (
            <div>
                <div>Name: {userData.name}</div>
                <div>Email: {userData.email}</div>
                <div>Robot: {userData.robot}</div>
                <div>Role: {userData.role}</div>
            </div>
        )}
        <Button onClick={toggleChangeEmail}>Change E-mail</Button>
        {showChangeEmail && (
            <div>
                <h2>Update e-mail</h2>
                <Form onSubmit={handleChangeEmailSubmit}>
                    <Field id="new-email-input" type="email">New e-mail</Field>
                    <Field id="new-email-confirm-input" type="email">Confirm new e-mail</Field>
                    <Field id="email-password-input" type="password">Password</Field>
                    <Button type="submit">Update e-mail</Button>
                </Form>
            </div>
        )}

        <Button onClick={toggleChangePassword}>Change Password</Button>
        {showChangePassword && (
            <div>
                <h2>Update password</h2>
                <Form onSubmit={handleChangePasswordSubmit}>
                    <Field id="current-password-input" type="password">Current password</Field>
                    <Field id="new-password-input" type="password">New password</Field>
                    <Field id="new-password-confirm-input" type="password">Confirm new password</Field>
                    <Button type="submit">Update password</Button>
                </Form>
            </div>
        )}
    </div>
}