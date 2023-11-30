import { Button } from '../library'

function Post(props) {
    const post = props.post

    function handleToggleLikeButtonClick() {
        props.onToggleLikeClick(post.id)
    }

    function handleToggleFavButtonClick() {
        props.onToggleFavClick(post.id)
    }

    return <article className="post">
        <h2>{post.author}</h2>
        <img className="post-image" src={post.image} />
        <p>{post.text}</p>
        <div className="post-actions">
            <Button onClick={handleToggleLikeButtonClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
            <Button onClick={handleToggleFavButtonClick}>{post.fav ? '⭐️' : '✩'}</Button>
        </div>
    </article>
}

export default Post