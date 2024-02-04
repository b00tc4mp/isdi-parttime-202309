import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { Button, Field, Form, Link } from '../library'
import { useContext } from "../hooks"

import context from "../logic/context"
import logic from "../logic"

function Post({ post, onToggleLikeClick, onToggleFavClick, onToggleDeleteClick, onPostTextUpdate }) {
    console.log('Post')

    const [view, setView] = useState(null)

    const contextApp = useContext()
    const navigate = useNavigate()

    //const post = props.post

    function handleToggleLikeClick() {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    contextApp.handleError(error)
                    return
                }
                //props.onToggleLikeClick()
                onToggleLikeClick()
            })
        } catch (error) {
            contextApp.handleError(error)
        }
    }

    function handleToggleFavClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    contextApp.handleError(error)

                    return
                }

                //props.onToggleFavClick()
                onToggleFavClick()
            })
        } catch (error) {
            contextApp.handleError(error)
        }
    }

    function handleDeleteClick() {
        if (confirm('Delete post?')) {
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        contextApp.handleError(error)
                        return
                    }
                    //props.onToggleDeleteClick()
                    onToggleDeleteClick()

                })
            } catch (error) {
                contextApp.handleError(error)

            }
        }
    }
    function handleEditClick() {
        setView('edit')

    }

    const handleEditCancelText = () => setView(null)

    const handleEditTextSubmit = event => {
        event.preventDefault()

        const text = event.target.text.value

        try {
            logic.updatePostText(post.id, text, error => {
                if (error) {
                    contextApp.handleError(error)
                    return
                }

                //props.onPostTextUpdate()
                onPostTextUpdate()
                setView(null)

            })

        } catch (error) {
            contextApp.handleError(error)

        }
    }
    const handleUserClick = event => {
        event.preventDefault()

        navigate(`/users/${post.author.id}`)
    }


    return <article className="post">

        <h2><Link onClick={handleUserClick} className="post-author">{post.author.name}</Link></h2>
        <img className="post-image" src={post.image} />

        <div className='post-actions'>
            <div className="post-toggles">
                <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '♡'} {post.likes.length}</Button>
                <Button onClick={handleToggleFavClick}>{post.fav ? '★' : '☆'}</Button>

            </div>
            <div>
                {view === null && post.author.id === context.sessionUserId && <Button onClick={handleEditClick}>✏️</Button>}

                {post.author.id === context.sessionUserId && <Button onClick={handleDeleteClick}>
                    🗑️</Button>}
            </div>
        </div>
        {view === null && <p className="post-comment">{post.text}</p>}
        {view === 'edit' && <Form onSubmit={handleEditTextSubmit}>
            <Field id="text" value={post.text}></Field>
            <Button type='submit'>Change text</Button>
            <Button onClick={handleEditCancelText}>Cancel</Button>
        </Form>}
    </article>
}

export default Post