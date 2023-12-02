import React from "react"
import logic from "../logic"
import { Button, Link, Form, Field, Container } from "../library"
import { Post } from "../components"

function Home(props) {
    // Declaración de estados usando React.useState
    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [posts, setPosts] = React.useState(null)
    const [favPosts, setFavs] = React.useState(null)

    // Función para manejar el clic en el botón de Logout
    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)

                return
            }
        })

        props.onLogoutClick()
    }// Mediante "props" nos traemos de APP la función de cambiar la vista a "LOGIN"

    // Efecto de React que se ejecuta al montar el componente
    React.useEffect(() => {
        try {
            logic.retrieveUser((error, user) => { // Llama a la función para recuperar los datos del usuario
                if (error) {
                    alert(error.message)

                    return
                }

                setName(user.name) // Establece el nombre del usuario en el estado
            })

        } catch (error) {
            alert(error.message)
        }
    }, []) //Este array se conoce como el array de dependencias. Significa que el efecto se ejecutará solo una vez, después de que el componente se monte por primera vez. No hay ninguna dependencia que cause que el efecto se vuelva a ejecutar, por lo que se ejecuta solo durante el montaje inicial del componente. En este caso [userId] el efecto se ejecutará cada vez que userId cambie, no solo en el montaje inicial.

    // Función para cambiar la vista a "profile"
    function handleProfileClick(event) {
        event.preventDefault()

        setView("profile")
    }

    // Función para cambiar la vista a "home"
    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    // Función para cambiar la vista a "new-post"
    function handleNewPostClick() {
        setView("new-post")
    }

    // Función para cancelar la creación de un nuevo post y volver a la vista principal
    function handleCancelNewPostClick(event) {
        event.preventDefault()

        setView(null)
    }

    // Función para refrescar los posts según la vista actual
    function refreshPosts() {
        if (view === null || view === "new-post") // Si la vista es nula o "new-post", recupera todos los posts
            try {
                logic.retrievePosts((error, posts) => {
                    if (error) {
                        alert(error.message)

                        return
                    }
                    // Invierte el orden de los posts y los establece en el estado
                    posts.reverse()
                    setPosts(posts)
                })
            } catch (error) {
                alert(error.message)
            }
        else if (view === "list-fav-post") // Si la vista es "list-fav-post", recupera los posts favoritos
            try {
                logic.retrieveFavPosts((error, favs) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    setFavs(favs) // Establece los posts favoritos en el estado
                })
            } catch (error) {
                alert(error.message)
            }
    }

    // Efecto de React que se ejecuta al montar el componente
    React.useEffect(() => {
        refreshPosts()
    }, [view]) //Cada vez que se abre la página Home, se activa este efecto, y en consecuencia, se llama a refreshPosts, que a su vez carga y actualiza los posts o los posts favoritos según la vista actual.

    function handleChangeEmailSubmit(event) {
        event.preventDefault()
        // Obtiene los elementos de entrada del formulario
        const newEmailInput = event.target.querySelector("#new-email-input")
        const newEmailConfirmInput = event.target.querySelector("#new-email-confirm-input")
        const passwordInput = event.target.querySelector("#password-input")

        // Obtiene los valores de los elementos de entrada
        const newEmail = newEmailInput.value
        const newEmailConfirm = newEmailConfirmInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, newEmailConfirm, password, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert("E-mail changed")

                setView(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector("#password-input")
        const newPasswordInput = event.target.querySelector("#new-password-input")
        const newPasswordConfirmInput = event.target.querySelector("#new-password-confirm-input")

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value

        try {
            logic.changeUserPassword(newPassword, newPasswordConfirm, password, (error) => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert("Password changed")

                setView(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector("#image-input")
        const textInput = event.target.querySelector("#text-input")

        const image = imageInput.value
        const text = textInput.value

        try {
            logic.publishPost(image, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                try {
                    logic.retrievePosts((error, posts) => { // Llama a la función de la lógica para recuperar los posts después de la publicación
                        if (error) {
                            alert(error.message)

                            return
                        }

                        posts.reverse()

                        setPosts(posts)
                        setView(null) //null en este caso devuelve la vista a home, que es el componente donde estamos
                    })
                } catch (error) {
                    alert(error.message)
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleLikeClick(postId) {
        try {
            logic.toggleLikePost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts() // Refresca los posts después de dar/quitar like
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeletePostClick(postId) {
        if (confirm("Are you sure you want to delete this post?")) {

            try {
                logic.deletePost(postId, (error) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    refreshPosts() // Si la eliminación tiene éxito, llama a refreshPosts para actualizar la lista de posts
                })
            } catch (error) {
                alert(error.message)
            }
        }
    }

    function handleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId, error => { // Utiliza logic.toggleFavPost para agregar/quitar el post de los favoritos
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts() // Si la operación es exitosa, llama a refreshPosts para actualizar la lista de posts
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleListFavPostsClick(event) {
        event.preventDefault() // Previene el comportamiento predeterminado del evento (evita que se recargue la página)

        try {
            logic.retrieveFavPosts((error, favs) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setFavs(favs) // La lista de posts favoritos obtenida se establece en el estado
                setView("list-fav-post") // Después de establecer los posts favoritos en el estado, se cambia la vista actual
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <header className="home-header">
            <h1><a className="home-link" href="" onClick={handleHomeClick}>Home</a></h1>
            <div>
                <Button onClick={handleNewPostClick}>+</Button> <Link onClick={handleProfileClick}>{name}</Link> <Button onClick={handleListFavPostsClick}>favs</Button> <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>

        {view === "profile" && <Container>
            <h2>Update e-mail</h2>

            <Form onSubmit={handleChangeEmailSubmit}>
                <Field id="new-email-input" type="email">New e-mail</Field>
                <Field id="new-email-confirm-input" type="email">Confirm new e-mail</Field>
                <Field id="password-input" type="password">Password</Field>

                <Button type="submit">Update e-mail</Button>
            </Form>

            <h2>Update password</h2>

            <Form onSubmit={handleChangePasswordSubmit}>
                <Field id="password-input" type="password">Current password</Field>
                <Field id="new-password-input" type="password">New password</Field>
                <Field id="new-password-confirm-input" type="password">Confirm new password</Field>

                <Button type="submit">Update password</Button>
            </Form>
        </Container>}

        {view === "new-post" && <Container>
            <h2>New post</h2>

            <Form onSubmit={handleNewPostSubmit}>
                <Field id="image-input" type="url">Image</Field>
                <Field id="text-input">Text</Field>

                <Button type="submit">Post</Button>
                <Button onClick={handleCancelNewPostClick}>Cancel</Button>
            </Form>
        </Container>}

        {view !== "profile" && view !== "list-fav-post" && posts !== null && (<Container>
            {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)}
        </Container>)}

        {view === "list-fav-post" && (<Container>
            <h1>⭐ Favorite posts ⭐</h1>
            {favPosts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)}
        </Container>)}
    </div>
}

export default Home