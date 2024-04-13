import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { useContext } from '../hooks'
import { Button, Form, Field, Link } from "../library"

import logic from "../logic"

// Define the Post component, and these props came from the compo posts
function Post(props) {
    console.log('Post')

    // State to manage the current view ('edit' or null)
    const [view, setView] = useState(null)

    const context = useContext()
    const navigate = useNavigate()

    const handleToggleLikeClick = () => {
        try {
            logic.toggleLikePost(props.post.id, error => {
                if (error) {
                    context.handleError(error)

                    return
                }
                // Call the function provided by props to update the post after toggling like
                props.onToggleLikeClick()
            })
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleToggleFavClick = () => {
        try {
            logic.toggleFavPost(props.post.id, error => {
                if (error) {
                    context.handleError(error)

                    return
                }

                props.onToggleFavClick()
            })
        } catch (error) {
            context.handleError(error)
        }
    }

    // Function to handle the click on the edit button
    const handleEditClick = () => setView('edit')

    // Function to handle the click on the cancel button during editing
    const handleEditCancelClick = () => setView(null)

    // Function to handle the form submission during editing
    const handleEditSubmit = event => {
        event.preventDefault()

        const text = event.target.text.value

        try {
            logic.updatePostText(post.id, text, error => {
                if (error) {
                    context.handleError(error)

                    return
                }
                // Call the function provided by props to update the post after editing
                props.onPostTextUpdate()
                // Set the view back to null to exit the editing mode
                setView(null)
            })
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleUserClick = event => {
        event.preventDefault()

        navigate(`/users/${props.post.author.id}`)
    }

    return <article key={props.post.id} className="post">
        <h2><Link onClick={handleUserClick}>{props.post.author.name}</Link></h2>

        <img className="post-image" src={props.post.image} />

        {view === null && <p>{props.post.text}</p>}

        {view === 'edit' && <Form onSubmit={handleEditSubmit}>
            <Field id="text" value={props.post.text} />
            <Button type="submit">Save</Button>
            <Button onClick={handleEditCancelClick}>Cancel</Button>
        </Form>}


        <div className="post-actions">
            <Button onClick={handleToggleLikeClick}>{props.post.liked ? '❤️' : '🤍'} {props.post.likes.length} likes</Button>
            <Button onClick={handleToggleFavClick}>{props.post.fav ? '⭐️' : '✩'}</Button>
            {logic.sessionUserId === props.post.author.id && view === null && <Button onClick={handleEditClick}>{'✏️'}</Button>}
        </div>
    </article>
}

export default Post