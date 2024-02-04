import { useState } from "react"
import logic from "../logic"
import { Button, Field, Form } from '../library'
import eliminar from '../icons/eliminar.png'
import context from "../logic/context"

function Post({post, onToggleLikeClick, onToggleFavClick, onToggleDeleteClick, onPostTextUpdate}) {
    console.log('Post')
    const [view, setView] = useState(null)
    //const post = props.post

    function handleToggleLikeClick() {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    alert(error.message)
                    return
                }
                //props.onToggleLikeClick()
                onToggleLikeClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleToggleFavClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                //props.onToggleFavClick()
                onToggleFavClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeleteClick() {
        if (confirm('Delete post?')) {
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    //props.onToggleDeleteClick()
                    onToggleDeleteClick()

                })
            } catch (error) {
                alert(error.message)

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
                    alert(error.message)
                    return
                }

                //props.onPostTextUpdate()
                onPostTextUpdate()
                setView(null)

            })

        } catch (error) {
            alert(error.message)

        }
    }

    return <article className="post">

        <h2 className="post-author">{post.author.name}</h2>
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
            <Button >Change text</Button>
            <Button onClick={handleEditCancelText}>Cancel</Button>
        </Form>}
    </article>
}

export default Post