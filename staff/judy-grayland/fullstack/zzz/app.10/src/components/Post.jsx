import { useState } from 'react'

import { Button, Form, Field } from '../library'
import { useContext } from '../hooks'

import logic from '../logic'

function Post({
  post,
  onToggleLikeClick,
  onToggleFavClick,
  onDeletePostClick,
  onEditPostClick,
  // onError,
}) {
  const [editForm, setEditForm] = useState(false)

  const context = useContext()

  const toggleEditForm = () => {
    setEditForm(!editForm)
  }

  const handleToggleLikeClick = () => {
    try {
      logic.toggleLikePost(post.id, (error) => {
        if (error) {
          context.handleError(error)

          return
        }

        onToggleLikeClick()
      })
    } catch (error) {
      context.handleError(error)
    }
  }

  // FAV POST BUTTON
  const handleToggleFavClick = () => {
    try {
      logic.toggleFavPost(post.id, (error) => {
        if (error) {
          context.handleError(error)

          return
        }

        onToggleFavClick()
      })
    } catch (error) {
      context.handleError(error)
    }
  }

  // DELETE BUTTON
  const handleDeletePostClick = () => {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        logic.deletePost(post.id, (error) => {
          if (error) {
            context.handleError(error)

            return
          }
          onDeletePostClick()
        })
      } catch (error) {
        context.handleError(error)
      }
    }
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault()

    const newText = event.target['new-text'].value

    console.log(newText)

    try {
      logic.updatePostText(post.id, newText, (error) => {
        if (error) {
          context.handleError(error)
          return
        }
        onEditPostClick()
        setEditForm(!editForm)
      })
    } catch (error) {
      context.handleError(error)
    }
  }

  return (
    <article className="post">
      <h2>{post.author.name}</h2>
      <img className="post-image" src={post.image} />
      <p>{post.text}</p>
      <div className="post-actions">
        <Button onClick={handleToggleLikeClick}>
          {post.liked ? '♥️' : '🤍'} {post.likes.length}
        </Button>
        <Button onClick={handleToggleFavClick}>{post.fav ? '🌟' : '☆'}</Button>
        {post.author.id === logic.sessionUserId && (
          <Button onClick={toggleEditForm}> ✏️</Button>
        )}
        {post.author.id === logic.sessionUserId && (
          <Button onClick={handleDeletePostClick}>❌</Button>
        )}
      </div>
      {editForm && (
        <Form onSubmit={handleEditFormSubmit}>
          <Field id="new-text" />
          <Button type="submit">Publish</Button>
        </Form>
      )}
    </article>
  )
}

export default Post
