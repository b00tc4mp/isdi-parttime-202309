import { useState, useContext } from 'react';

import { Button, Form, Field } from '../library'

import Context from '../Context'

import logic from '../logic'

function Post(props) {
	console.log('Post')

	const [view, setView] = useState(null)

	const context = useContext(Context)

	const handleToggleLikeClick = () => {
		try {
			logic.toggleLikePost(props.post.id, error => {
				if (error) {
					context.handleError(error)

					return
				}

				props.onToggleLikeClick()
			})
		} catch (error) {
			context.handleError(error)
		}
	}

	const handleDeletePostClick = () => {
		if (confirm('Are you sure you want to delete this post?')) {
			try {
				logic.deletePost(props.post.id, error => {
					if (error) {
						context.handleError(error)

						return
					}
					props.onDeletePostClick()
				})
			} catch (error) {
				context.handleError(error)
			}
		}
	}


	const handleToggleFavClick = () => {
		try {
			logic.toggleFavPost(props.post.id, error => {
				if (error) {
					context.handleError(error)

					return
				}

				props.onToggleFavClick()
			})
		} catch (error) {
			context.handleError(error)
		}
	}

	const handleEditclick = () => setView('edit')


	const handleEditCancelClick = () => setView(null)


	const handleEditSubmit = event => {
		event.preventDefault()

		const text = event.target.text.value

		try {
			logic.updatePostText(props.post.id, text, error => {
				if (error) {
					context.handleError(error)

					return
				}
				props.onPostTextUpdate()
				setView(null)
			})
		} catch (error) {
			context.handleError(error)
		}
	}

	return <article className="post">
		<h2>{props.post.author.name}</h2>

		<img className="post-image" src={props.post.image} />

		{view === null && <p>{props.post.text}</p>}

		{view === 'edit' && <Form onSubmit={handleEditSubmit}>
			<Field id="text" value={props.post.text} />
			<Button type="submit">Save</Button>
			<Button onClick={handleEditCancelClick}>Cancel</Button>
		</Form>}


		<div className="post-actions">
			<Button onClick={handleToggleLikeClick}>{props.post.liked ? '❤️' : '🤍'} {props.post.likes.length}</Button>
			<Button onClick={handleToggleFavClick}>{props.post.fav ? '⭐️' : '✩'}</Button>
			{logic.sessionUserId === props.post.author.id && <Button onClick={handleDeletePostClick}>🗑️</Button>}
			{logic.sessionUserId === props.post.author.id && view === null && <Button onClick={handleEditclick}>✏️</Button>}

		</div>
	</article>
}

export default Post