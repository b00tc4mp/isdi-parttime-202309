import { useState } from "react"
import { Button, Form, Field, Container } from "../library"
import { useContext } from '../hooks'
import logic from "../logic"
import session from "../logic/session"

const Post = ({ post, onToggleLikeClick, onToggleFavClick, onToggleDeleteClick, onToggleEditClick, onPostComment }) => {
    const [view, setView] = useState(null)
    const [comment, setComment] = useState(null)

    const context = useContext()

    const handleLikeClick = (postId) => {
        try {
            logic.toggleLikePost(postId, error => {
                if (error) {
                    // alert(error.message)
                    context.handleError(error)

                    return
                }

                onToggleLikeClick()
            })
        } catch (error) {
            // alert(error.message)
            context.handleError(error)
        }
    }

    const handleFavPostClick = (postId) => {
        try {
            logic.toggleFavPost(postId, error => {
                if (error) {
                    // alert(error.message)
                    context.handleError(error)

                    return
                }

                onToggleFavClick()
            })
        } catch (error) {
            // alert(error.message)
            context.handleError(error)
        }
    }

    const handleDeletePostClick = (postId) => {
        if (confirm("Are you sure you want to delete this post?")) {

            try {
                logic.deletePost(postId, (error) => {
                    if (error) {
                        // alert(error.message)
                        context.handleError(error)

                        return
                    }

                    onToggleDeleteClick()
                })
            } catch (error) {
                // alert(error.message)
                context.handleError(error)
            }
        }
    }

    const handleEditClick = () => setView("edit")
    const handleEditCancelClick = () => setView(null)

    const handleEditSubmit = event => {
        event.preventDefault()

        const text = event.target.text.value

        try {
            logic.updatePostText(post.id, text, (error) => {
                if (error) {
                    // alert(error.message)
                    context.handleError(error)

                    return
                }

                onToggleEditClick()
                setView(null)
            })
        } catch (error) {
            // alert(error.message)
            context.handleError(error)
        }
    }

    const handleCommentClick = () => setComment('new comment')
    const handleCommentCancel = () => setComment(null)

    const handleCommentSubmit = (event) => {
        event.preventDefault()

        const comment = event.target.text.value

        try {

            logic.commentPost(post.id, comment, error => {
                if (error) {
                    // alert(error.message)
                    context.handleError(error)

                    return
                }

                onPostComment()
                setComment(null)
            })

        } catch (error) {
            // alert(error.message)
            context.handleError(error)
        }
    }

    return (
        <article className="post">
            <h2 className="post-author">{post.author.name}</h2>
            <img className="post-image" src={post.image} alt="Post" />
            {view === null && <p className="post-text">{post.text}</p>}

            {view === "edit" && <Form onSubmit={handleEditSubmit}>
                <Field id="text" value={post.text} />
                <Button type="submit">Save</Button>
                <Button onClick={handleEditCancelClick}>Cancel</Button>
            </Form>}

            {comment === 'new comment' && <Form onSubmit={handleCommentSubmit}>
                <Field id="text" value={comment}></Field>
                <Button type="submit">Publish</Button>
                <Button onClick={handleCommentCancel}>Cancel</Button>
            </Form>}

            {post.comments && post.comments.length > 0 && <Container className="post-comments">
                <ul>
                    {post.comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
            </Container>}

            <div>
                {view === null && <Button onClick={() => handleLikeClick(post.id)}>{post.liked ? "❤️" : "🤍"} {post.likes.length} </Button>}
                {view === null && <Button onClick={() => handleFavPostClick(post.id)}>{post.fav ? "✅" : "☑️"} </Button>}
                {post.author.id === session.sessionUserId && view === null && <Button onClick={() => handleEditClick(post.id)}>✏️</Button>}
                {post.author.id === session.sessionUserId && view === null && <Button onClick={() => handleDeletePostClick(post.id)}>🗑️</Button>}
                {view === null && <Button onClick={handleCommentClick}>💭</Button>}
            </div>
        </article>
    )
}

export default Post