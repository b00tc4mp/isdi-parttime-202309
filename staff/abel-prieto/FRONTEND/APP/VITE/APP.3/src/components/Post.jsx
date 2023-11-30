import logic from "../logic"
import { Button, Input } from "../librery"

import { useState } from "react"

function Post(props) {
    const post = props.post

    // STATE EDIT MODE
    const [editMode, setEditMode] = useState(false)

    // LIKE POST BUTTON
    function handleToggleLikeClick() {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onToggleLikeClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // FAV POST BUTTON
    function handleToggleFavButtonClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onToggleFavClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // DELETE POST BUTTON
    function handleToggleDeleteButtonClick(postId) {
        if (confirm('Are you sure that you want to delete this post?')) {
            try {
                logic.deletePost(postId, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    props.onDeletePost()
                })
            } catch (error) {
                alert(error.message)
            }
        }

        return
    }

    // EDIT TEXT(POST) CLICK
    function handleToggleEditClick() {
        try {
            setEditMode(!editMode)

        } catch (error) {
            alert(error.message)
        }
    }

    // EDIT TEXT(POST) INPUT
    function handleToggleInputEditClick(postId, postText) {
        try {
            const text = document.querySelector("#post-tittle").value

            postText = text

            logic.toggleEditPostText(postId, postText, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onEditText()
                // Hacemos un repintado de los posts-favs

                setEditMode(!editMode)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // TEMPLATE
    return <>
        <article className="post">
            <h2>{post.author.email}</h2>
            <img className='post-img' src={post.image} />
            <div className="buttons-edit">
                <p>{post.text}</p>
                {post.author.id === props.id && <Button onClick={handleToggleEditClick}>✏</Button>}
                {editMode === true &&
                    <div>
                        <Input id={'post-tittle'}></Input>
                        <Button onClick={() => handleToggleInputEditClick(post.id, post.text)}>Done</Button>
                    </div>}
            </div>
            <div className="buttons-post">
                <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                <Button onClick={handleToggleFavButtonClick}>{post.fav ? '⭐' : '☆'}Fav</Button>
                {post.author.id === props.id && (<Button onClick={() => handleToggleDeleteButtonClick(post.id)}>Delete post</Button>)}
            </div>
        </article>
    </>
}

export default Post