import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Field, Link, Container } from '../library'
import logic from '../logic'
import { Input } from '../library'
import session from '../logic/session'

import { useContext } from '../hooks'





function Tutorial(props) {
    console.log(props.tutorial)
    const [editTextTutorial, setEditTextTutorial] = useState(null)
    const [title, setTitle] = useState(props.tutorial.title)
    const [text, setText] = useState(props.tutorial.text)

    //const { handleError } = useContext(Context)
    const context = useContext()
    const navigate = useNavigate()
    const tutorial = props.tutorial



    function handleToggleLikePostClick() {
        try {
            logic.toggleLikeTutorial(tutorial.id)
                .then(() => {
                    props.onToggleLikeClick()

                })
                .catch(error => context.handleError(error))

        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }

    function handleEditSubmit(event) {
        event.preventDefault()
        const title = event.target.querySelector("#title").value
        const text = event.target.querySelector("#text").value
        console.log(text)
        try {
            logic.editTutorial(props.tutorial.id, { title, text })
                .then(() => {
                    setEditTextTutorial(null)
                    props.onUpdate()
                })
                .catch(error => context.handleError(error))
        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }
    function handleEditClick() {
        if (editTextTutorial === null) {
            setEditTextTutorial('edit-text-tutorial')
        } else {
            setEditTextTutorial(null)
        }
    }
    function handleCancelEdit() {
        setEditTextTutorial(null)
    }
    function handleToggleDeleteTutorialClick() {
        if (confirm('Are you sure you want to delete this tutorial?')) {
            try {
                logic.deleteTutorial(tutorial.id)
                    .then(() => {
                        props.onToggleDeleteClick()
                    })
                    .catch(error => context.handleError(error))
            } catch (error) {
                //alert(error.message)
                context.handleError(error)
            }
        }
    }
    const handleUserClick = event => {
        event.preventDefault()
        //navigate(`/users/${props.post.author.id}`)
    }

    return (
        <article className="tutorial">
            <p><strong>{props.tutorial.author.name}</strong></p>
            <p><strong>{props.tutorial.author.role}</strong></p>

            {/* Solo muestra el título y el texto si no estamos en modo edición */}
            {editTextTutorial !== 'edit-text-tutorial' && (
                <>
                    <p><strong>{tutorial.title}</strong></p>
                    <p>{tutorial.text}</p>
                </>
            )}

            <div className="tutorial-actions">
                <Button onClick={handleToggleLikePostClick}>{tutorial.liked ? '🤖' : '🤍'} {tutorial.likes.length} </Button>
                {context.userRole === 'admin' && (
                    <>
                        <Button onClick={() => handleToggleDeleteTutorialClick(tutorial.id)}>🗑</Button>
                        <Button onClick={handleEditClick}>{editTextTutorial === 'edit-text-tutorial' ? 'Cancel Edit' : '🖍 Edit'}</Button>
                    </>
                )}
            </div>

            {/* Muestra el formulario de edición si estamos en modo edición */}
            {editTextTutorial === 'edit-text-tutorial' && (
                <Form onSubmit={handleEditSubmit}>
                    <Field id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} label="Title" />
                    <Field id="text" type="text" value={text} onChange={(e) => setText(e.target.value)} label="Text" />
                    <Button type='submit'>Save</Button>
                    <Button onClick={handleCancelEdit}>Cancel</Button>
                </Form>
            )}
        </article>
    )

}
export default Tutorial