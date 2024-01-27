import { useState, useEffect } from 'react'
import logic from '../logic'
import { Button, Link } from '../library'
import { Posts, Profile, NewPost } from '../components'

function Home(props) {
    console.log('Home')

    // Estado local del componente
    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [stamp, setStamp] = useState(null)

    // Función para manejar el clic en el botón de logout
    function handleLogoutClick() {
        // Llama al método logoutUser de la lógica (backend)
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)
                return
            }
        })

        // Llama a la función proporcionada por props para notificar que se ha cerrado la sesión
        props.onLogoutClick()
    }

    // Efecto de montaje para recuperar el nombre del usuario al cargar el componente
    useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            // Llama al método retrieveUser de la lógica para obtener la información del usuario
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)
                    return
                }

                // Actualiza el estado local con el nombre del usuario
                setName(user.name)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    // Función para manejar el clic en el enlace del perfil
    function handleProfileClick(event) {
        event.preventDefault()

        // Cambia la vista actual a 'profile'
        setView('profile')
    }

    // Función para manejar el clic en el enlace de la página de inicio
    function handleHomeClick(event) {
        event.preventDefault()

        // Restaura la vista a nulo
        setView(null)
    }

    // Función para manejar el clic en el botón de crear nuevo post
    function handleNewPostClick() {
        // Cambia la vista actual a 'new-post'
        setView('new-post')
    }

    // Función para manejar la cancelación de la creación de un nuevo post
    function handleNewPostCancel() {
        // Restaura la vista a nulo
        setView(null)
    }

    // Función para manejar la publicación de un nuevo post
    function handleNewPostPublish() {
        // Actualiza el sello de tiempo para forzar la recarga de los posts
        setStamp(Date.now())

        // Restaura la vista a nulo
        setView(null)

        // Desplaza la ventana hacia la parte superior
        window.scrollTo(0, 0)
    }

    // Función para manejar el clic en el enlace de los posts favoritos
    function handleFavPostsClick(event) {
        event.preventDefault()

        // Cambia la vista actual a 'favs'
        setView('favs')
    }

    // Renderizado del componente
    return (
        <div>
            {/* Encabezado de la aplicación */}
            <header className="header">
                <h1>
                    {/* Enlace que llama a handleHomeClick cuando se hace clic */}
                    <Link onClick={handleHomeClick}>F4c3c4mp</Link>
                </h1>
                <div>
                    {/* Enlace que llama a handleProfileClick cuando se hace clic */}
                    <Link onClick={handleProfileClick}>{name}</Link>
                    {/* Enlace que llama a handleFavPostsClick cuando se hace clic */}
                    <Link onClick={handleFavPostsClick}>Favs</Link>
                    {/* Botón que llama a handleLogoutClick cuando se hace clic */}
                    <Button onClick={handleLogoutClick}>Logout</Button>
                </div>
            </header>

            {/* Condicionalmente renderiza el componente Profile si la vista es 'profile' */}
            {view === 'profile' && <Profile />}

            {/* Condicionalmente renderiza el componente Posts si la vista es nula o 'new-post' */}
            {(view === null || view === 'new-post') && (
                <Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} />
            )}

            {/* Condicionalmente renderiza el componente Posts si la vista es 'favs' */}
            {view === 'favs' && <Posts loadPosts={logic.retrieveFavPosts.bind(logic)} />}

            {/* Pie de página de la aplicación */}
            <footer className="footer">
                {/* Condicionalmente renderiza el componente NewPost si la vista es 'new-post' */}
                {view === 'new-post' && (
                    <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} />
                )}
                {/* Condicionalmente renderiza el botón para crear un nuevo post */}
                {view !== 'new-post' && <Button onClick={handleNewPostClick}>+</Button>}
            </footer>
        </div>
    )
}

// Exporta el componente Home
export default Home
