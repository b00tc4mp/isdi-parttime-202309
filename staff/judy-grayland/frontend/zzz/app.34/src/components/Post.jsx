import logic from "../logic"

import { Button } from "../library"


function Post(props) {

    const post = props.post

        function handleToggleLikeButtonClick() {
            props.onToggleLikeClick(post.id)
        }

        function handleToggleFavButtonClick () {
            props.onToggleFavPostClick(post.id)
        }

        function handleDeletePostButtonClick() {
            props.onDeletePostClick(post.id)
        }

    return <article className="post">
        <h2>{post.author.name}</h2>
        <img className="post-image" src={post.image}/>
        <p>{post.text}</p>
        <div className='post-actions'>
            <Button onClick={handleToggleLikeButtonClick}>{post.liked ? '♥️' : '🤍'} {post.likes.length} likes</Button>
            <Button onClick={handleToggleFavButtonClick}>{post.fav ? '🌟' : '☆'} Fav</Button>
            {post.author.id === logic.sessionUserId && <Button onClick={handleDeletePostButtonClick}>Delete Post</Button>}
        </div>
        </article>
    }

export default Post

