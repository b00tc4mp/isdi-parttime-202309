import React from "react"
import { Button, Field, Input, Form } from "../library"
import logic from "../logic"

function Post(props) { //pintado del artículo y POSTS las vistas el refresh y load hacer el mapeo
    const { post, onToggleLikeClick, onToggleFavClick, onToggleDeleteClick } = props

    const [editTextPost, setEditTextPost] = React.useState(null)

    function handleEditClick() {
        setEditTextPost("edit-text-post")

    }

    function handleEditSubmit(event, postId, postText) {
        event.preventDefault()

        try {
            const text = event.target.querySelector("#text").value

            postText = text

            logic.changePostText(postId, postText, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert("Text changed")
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
                <Button onClick={() => onToggleLikeClick(post.id)}>{post.liked ? "❤️" : "🤍"} {post.likes.length} </Button>
                <Button onClick={() => onToggleFavClick(post.id)}>{post.fav ? "✅" : "☑️"} </Button>
                {post.author.id === logic.sessionUserId && <Button onClick={() => handleEditClick()}>✏️</Button>}
                {post.author.id === logic.sessionUserId && <Button onClick={() => onToggleDeleteClick(post.id)}>🗑️</Button>}
            </div>
            <div className="edit-text">
                {editTextPost === "edit-text-post" && <Form onSubmit={handleEditSubmit}>
                    <Input id="text"></Input>
                    <Button type="submit">👌</Button>
                </Form>}
            </div>
        </article>
    )
}

export default Post