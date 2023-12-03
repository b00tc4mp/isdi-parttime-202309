import { useState } from "react"
import { Button, Input, Form } from "../library"
import logic from "../logic"

function Post({ post, onToggleLikeClick, onToggleFavClick, onToggleDeleteClick, onToggleEditClick }) {
    const [editTextPost, setEditTextPost] = useState(null)

    function handleLikeClick(postId) {
        try {
            logic.toggleLikePost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleLikeClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onToggleFavClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeletePostClick(postId) {
        if (confirm("Are you sure you want to delete this post?")) {

            try {
                logic.deletePost(postId, (error) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    onToggleDeleteClick()
                })
            } catch (error) {
                alert(error.message)
            }
        }
    }

    function handleEditClick() {

        if (editTextPost === null) {
            setEditTextPost("edit-text-post")
        } else {
            setEditTextPost(null)
        }
    }

    function handleEditSubmit(event) {
        event.preventDefault()

        const text = event.target.querySelector("#text").value
        console.log(text)

        try {
            logic.changePostText(post.id, text, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert("Text changed")

                setEditTextPost(null)

                onToggleEditClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <article className="post">
            <h2>{post.author.name}</h2>
            <img className="post-image" src={post.image} alt="Post" />
            <p>{post.text}</p>
            <div>
                <Button onClick={() => handleLikeClick(post.id)}>{post.liked ? "❤️" : "🤍"} {post.likes.length} </Button>
                <Button onClick={() => handleFavPostClick(post.id)}>{post.fav ? "✅" : "☑️"} </Button>
                {post.author.id === logic.sessionUserId && <Button onClick={() => handleEditClick(post.id)}>✏️</Button>}
                {post.author.id === logic.sessionUserId && <Button onClick={() => handleDeletePostClick(post.id)}>🗑️</Button>}
            </div>
            <div className="edit-text">
                {editTextPost === "edit-text-post" && <Form onSubmit={handleEditSubmit}>
                    <Input id="text"></Input>
                    <Button type="submit">Cambiar texto</Button>
                </Form>}
            </div>
        </article>
    )
}

export default Post