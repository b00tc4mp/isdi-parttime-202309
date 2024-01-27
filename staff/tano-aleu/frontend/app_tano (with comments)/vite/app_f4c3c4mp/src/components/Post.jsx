import { useState } from 'react'

import { Button, Form, Field } from '../library'

import logic from '../logic'

// Define el componente funcional Post
const Post = ({ post, onToggleLikeClick, onToggleFavClick, onPostTextUpdate }) => {
    console.log('Post')
    
    const [view, setView] = useState(null)

    // Función para manejar el clic en el botón de "Me gusta"
    const handleToggleLikeClick = () => {
        try {
            // Llama al método toggleLikePost de la lógica para cambiar el estado de "Me gusta" del post
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    // Muestra una alerta en caso de error durante la operación
                    alert(error.message)
                    return
                }

                // Llama a la función proporcionada por props en caso de éxito
                onToggleLikeClick()
            })
        } catch (error) {
            // Muestra una alerta en caso de error durante la operación
            alert(error.message)
        }
    }

    // Función para manejar el clic en el botón de "Favorito"
    const handleToggleFavClick = () => {
        try {
            // Llama al método toggleFavPost de la lógica para cambiar el estado de "Favorito" del post
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    // Muestra una alerta en caso de error durante la operación
                    alert(error.message)
                    return
                }

                // Llama a la función proporcionada por props en caso de éxito
                onToggleFavClick()
            })
        } catch (error) {
            // Muestra una alerta en caso de error durante la operación
            alert(error.message)
        }
    }

    // Función para manejar el clic en el botón de eliminación del post
    const handleDeleteClick = () => {
        // Pregunta al usuario si está seguro de eliminar el post
        if (confirm('Delete post?')) {
            try {
                // Llama al método deletePost de la lógica para eliminar el post
                logic.deletePost(post.id, error => {
                    if (error) {
                        // Muestra una alerta en caso de error durante la operación
                        alert(error.message)
                        return
                    }

                    // Llama a la función proporcionada por props en caso de éxito
                    onToggleDeleteClick()
                })
            } catch (error) {
                // Muestra una alerta en caso de error durante la operación
                alert(error.message)
            }
        }
    }


    const handleEditClick = () => setView('edit')

    const handleEditCancelClick = () => setView(null)

    const handleEditSubmit = event => {
        event.preventDefault()

        const text = event.target.text.value

        try {
            logic.updatePostText(post.id, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onPostTextUpdate()
                setView(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // Renderiza la estructura del post
    return <article className="post">

        <h2>{post.author.name}</h2>

        <img className="post-image" src={post.image} />

        {view === null && <p>{post.text}</p>}

        {view === 'edit' && <Form onSubmit={handleEditSubmit}>

            <Field id="text" value={post.text} />

            <Button type="submit">Save</Button>

            <Button onClick={handleEditCancelClick}>Cancel</Button>

        </Form>}

        <div className="post-actions">

            <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>

            <Button onClick={handleToggleFavClick}>{post.fav ? '⭐️' : '✩'}</Button>

            {logic.sessionUserId === post.author.id && view === null && <Button onClick={handleEditClick}>✏️</Button>}

            {logic.sessionUserId === post.author.id && view === null && <Button onClick={handleDeleteClick}>🗑 </Button>}

        </div>
    </article>
}

// Exporta el componente Post
export default Post
