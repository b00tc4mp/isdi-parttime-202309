import { Button } from "../library"
import logic from "../logic"

function Post(props) {
    const { post, onToggleLikeClick, onToggleFavClick, onToggleDeleteClick } = props

    return (
        <article className="post">
            <h2>{post.author.name}</h2>
            <img className="post-image" src={post.image} alt="Post" />
            <p>{post.text}</p>
            <div>
                <Button onClick={() => onToggleLikeClick(post.id)}>{post.liked ? "❤️" : "🤍"} {post.likes.length} likes</Button>
                <Button onClick={() => onToggleFavClick(post.id)}>{post.fav ? "✅" : "☑️"} Fav</Button>
                {post.author.id === logic.sessionUserId && (<Button onClick={() => onToggleDeleteClick(post.id)}>Delete</Button>)}
            </div>
        </article>
    )
}

export default Post