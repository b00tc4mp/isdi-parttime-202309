import logic from "../logic"
import { Button } from '../library'

function Post(props) {
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

    return <article className="post">
        <h2>{post.author.name}</h2>
        <img className="post-image" src={post.image} />
        <p>{post.text}</p>
        <div className='post-actions'>
            <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
            <Button onClick={handleToggleFavClick}>{post.fav ? '⭐️' : 'Fav'}</Button>
            {post.author.id === logic.sessionUserId && <Button onClick={handleDeleteClick}>Delete post</Button>}
        </div>
    </article>
}

export default Post