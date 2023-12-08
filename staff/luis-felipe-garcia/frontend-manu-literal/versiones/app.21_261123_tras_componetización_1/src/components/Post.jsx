import logic from "../logic"
import { Button, Form, Link, Field, Container } from '../library'
function Post(props) {
    const post = props.post

    return <article className="post">
        <h2>{post.author.name}</h2>
        <img className="post-image" src={post.image} />
        <p>{post.text}</p>
        <div className='buttons-posts'>
            <Button onClick={() => props.onToggleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
            <Button onClick={() => props.onToggleFavPostClick(post.id)}>{post.fav ? '⭐️' : 'Fav'}</Button>
            {post.author.id === logic.sessionUserId && <Button onClick={() => props.onToggleDeletePostClick(post.id)}>Delete post</Button>}
        </div>
    </article>
}

export default Post