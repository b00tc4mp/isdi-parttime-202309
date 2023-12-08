import { useState } from "react"
import logic from "../logic"
import { Button } from '../library'
import eliminar from '../icons/eliminar.png'

function Post(props) {
    const [view, setView] = useState(null)
    const post = props.post

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

    function handleToggleFavClick() {
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

    function handleDeleteClick() {
        if (confirm('Delete post?')) {
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    props.onToggleDeleteClick()

                })
            } catch (error) {
                alert(error.message)

            }
        }
    }
    function handleEditClick () {
        setView('edit')

    }

    return <article className="post">

        <h2 className="post-author">{post.author.name}</h2>
        <img className="post-image" src={post.image} />

        <div className='post-actions'>
            <div className="post-toggles">
                <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '♡'} {post.likes.length}</Button>
                <Button onClick={handleToggleFavClick}>{post.fav ? '★' : '☆'}</Button>

            </div>
            {post.author.id === logic.sessionUserId && <Button onClick={handleEditClick}>✏️</Button>}
            {post.author.id === logic.sessionUserId && <Button onClick={handleDeleteClick}>
                <img className="icons icons-delete" src={eliminar} />
            </Button>}
        </div>
        <p className="post-comment">{post.text}</p>
    </article>
}

export default Post