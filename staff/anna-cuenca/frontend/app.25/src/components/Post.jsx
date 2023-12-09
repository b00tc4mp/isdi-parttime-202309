import { Button } from '../library'
import logic from '../logic'



function Post(props) {
    const post = props.post

    function handleToggleLikePostClick() {
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



    function handleToggleFavPostClick() {
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





    return (<article className="post">
        <h2>{post.author.name}</h2>
        <img className="post-image" src={post.image} />
        <p>{post.text}</p>

        <div className="post-actions">

            <Button onClick={handleToggleLikePostClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
            <Button onClick={handleToggleFavPostClick}>{post.fav ? '⭐️' : '✩'}</Button>
            {/* {post.author.id === logic.sessionUserId && (<Button onClick={() => onToggleDeleteClick(post.id)}>Delete post</Button>)} */}

        </div>



    </article>
    )
}

export default Post


