import { useState } from 'react'

import { Button, Form, Field } from '../library'

import logic from '../logic'

function Post(props) {
  const post = props.post

  const [editForm, setEditForm] = useState(false)
  const [view, setView] = useState(null)

  function toggleEditForm() {
    setEditForm(!editForm)
  }

  function handleToggleLikeClick() {
    try {
      logic.toggleLikePost(post.id, (error) => {
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

  // FAV POST BUTTON
  function handleToggleFavClick() {
    try {
      logic.toggleFavPost(post.id, (error) => {
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

  // DELETE BUTTON
  function handleDeletePostClick() {
    if (confirm('Are you sure you want to delete this post?')) {
      try {
        logic.deletePost(post.id, (error) => {
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

  function handleEditFormSubmit(event) {
    event.preventDefault()

    const newText = event.target['new-text'].value

    console.log(newText)

    try {
      logic.updatePostText(post.id, newText, (error) => {
        if (error) {
          alert(error.message)
          return
        }
        props.onEditPostClick()
        setEditForm(!editForm)
      })
    } catch (error) {
      alert(error.message)
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
