import logic from "../logic"
import  {useState } from "react"
import { useContext } from "../hooks"
import { useParams } from "react-router-dom"
import { Button, Form, Input, Container } from "../library"

export default function Profile({onSuccess}) {
    const context = useContext()

    const [newEmail, setNewEmail]=useState('')
    const [newEmailConfirm, setNewEmailConfirm]=useState('')
    const [password, setPassword]=useState('')

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

    function handlePassword(event){
        setPassword(event.target.value)
    }

    return (
        <Container className="profile-view">
            { form === 'email' && <article><h2>Update e-mail</h2>
                <Form onSubmit={handleChangeMailSubmit}>
                    <Input id="new-email-input" type="email" placeholder="New Email" value={newEmail} onChange={handleChangeNewEmail}>New e-mail</Input>

                    <Input id="new-email-confirm-input" type="email" placeholder="Confirm new Email" value={newEmailConfirm} onChange={handleChangeNewEmailConfirm}>Confirm new e-mail</Input>

                    <Input id="password-input" type="password" placeholder="Password" value={password} onChange={handlePassword}>Password</Input>

                    <Button type="submit">Update e-mail</Button>
                </Form>
            </article> } 
        </Container>
    )
}