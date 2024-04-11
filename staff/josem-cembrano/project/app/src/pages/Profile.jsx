import logic from '../logic'
import { useState } from 'react'
import { useContext } from '../hooks'
import { useParams, Link} from 'react-router-dom'
import { Button, Form, Input, Container } from '../library'

export default function Profile({ onSuccess }) {
    const context = useContext()

    const [newEmail, setNewEmail]=useState('')
    const [newEmailConfirm, setNewEmailConfirm]=useState('')

    const [password, setPassword]=useState('')

    const [newPassword, setNewPassword]=useState('')
    const [newPasswordConfirm, setNewPasswordConfirm]=useState('')

    const { form } = useParams()

    function handleChangeMailSubmit(event) {
        event.preventDefault()

        return (async () => {
            try {
                await logic.changeEmail(newEmail, newEmailConfirm, password)
                onSuccess()
                setNewEmail('')
                setNewEmailConfirm('')
                setPassword('')
            } catch (error) {
                context.handleError(error)
            }
        })()
    }

    function handleChangeNewEmail(event){
        setNewEmail(event.target.value)
    }

    function handleChangeNewEmailConfirm(event){
        setNewEmailConfirm(event.target.value)
    }

    function handlePasswordEmail(event){
        setPassword(event.target.value)
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        return (async () => {
            try {
                await logic.changePassword(password, newPassword, newPasswordConfirm)
                onSuccess()
                setNewPassword('')
                setNewPasswordConfirm('')
                setPassword('')
            } catch (error) {
                context.handleError(error)
            }
        })()
    }

    function handleChangeNewPassword(event){
        setPassword(event.target.value)
    }

    function handleChangeNewPasswordConfirm(event){
        setNewPassword(event.target.value)
    }

    function handlePassword(event){
        setNewPasswordConfirm(event.target.value)
    }

    return (
        <Container className='flex justify-center items-center h-full container-form'>
            { form === 'email' && <article className='text-center'><h2 className='text-gray-900 font-bold underline border-b-2 border-goldenrod'>Change email</h2>
                <Form onSubmit={handleChangeMailSubmit}>
                    <Input id='new-email-input' type='email' placeholder='New Email' value={newEmail} onChange={handleChangeNewEmail}>New e-mail</Input>

                    <Input id='new-email-confirm-input' type='email' placeholder='Confirm new Email' value={newEmailConfirm} onChange={handleChangeNewEmailConfirm}>Confirm new e-mail</Input>

                    <Input id='password-input' type='password' placeholder='Password' value={password} onChange={handlePasswordEmail}>Password</Input>

                    <Button className='myfont' type='submit'>Update email</Button>
                    <Link className='cancel-link' to='/'>Cancel</Link>
                </Form>
            </article> }
            { form === 'password' && <article className='text-center'><h2>Change password</h2>
                <Form onSubmit={handleChangePasswordSubmit}>
                    <Input id='password-input' type='password' placeholder='Password' value={password} onChange={handleChangeNewPassword}>Password</Input>

                    <Input id='new-password-input' type='password' placeholder='New Password' value={newPassword} onChange={handleChangeNewPasswordConfirm}>New password</Input>

                    <Input id='new-password-confirm-input' type='password' placeholder='New Password Confirm' value={newPasswordConfirm} onChange={handlePassword}>New password confirm</Input>

                    <Button type='submit'>Update password</Button>
                    <Link className='cancel-link' to='/'>Cancel</Link>
                </Form>
            </article> }
        </Container>
    )
}