import { useEffect, useState } from 'react'
import Post from './Post'

// Define el componente funcional Posts
function Posts({ loadPosts, stamp }) {
    console.log('Posts')

    // Estado local para almacenar la lista de posts
    const [posts, setPosts] = useState([])

    // Función para actualizar la lista de posts
    const refreshPosts = () => {
        try {
            // Llama a la función loadPosts para cargar los posts
            loadPosts((error, posts) => {
                if (error) {
                    // Muestra una alerta en caso de error durante la carga de posts
                    alert(error.message)
                    return
                }

                // Invierte el orden de los posts (muestra los más recientes primero)
                posts.reverse()

                // Actualiza el estado local con la nueva lista de posts
                setPosts(posts)
            })
        } catch (error) {
            // Muestra una alerta en caso de error durante la operación
            alert(error.message)
        }
    }

    // Efecto que se ejecuta al montar el componente o cuando cambia la variable 'stamp'
    useEffect(() => {
        console.log('Posts effect')

        // Actualiza la lista de posts
        refreshPosts()
    }, [stamp])

    // Renderiza la lista de posts utilizando el componente Post
    return (
        <div className="posts">
            {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} />)}
        </div>
    )
}

// Exporta el componente Posts
export default Posts
