import logic from "../logic"

import { Button } from "../library"

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

	function handleDeletePostClick() {
		if (confirm('Are you sure you want to delete this post?')) {


			try {
				logic.deletePost(post.id, error => {
					if (error) {
						alert(error.message)

						return
					}
					props.onDeletePostClick()
				})
			} catch (error) {
				alert(error.message)
			}
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

	return <article className="post">
		<h2>{post.author.name}</h2>
		{/* author o author.name */}
		<img className="post-image" src={post.image} />
		<p>{post.text}</p>
		<div className="posts-actions">
			<Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
			<Button onClick={handleToggleFavClick}>{post.fav ? '⭐️' : '✩'}</Button>
			{post.author.id === logic.sessionUserId && <Button onClick={handleDeletePostClick}>Delete 🗑️</Button>}
		</div>
	</article>
}

export default Post