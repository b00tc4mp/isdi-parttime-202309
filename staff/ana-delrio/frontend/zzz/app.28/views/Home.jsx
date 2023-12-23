
function Home(props) {
    console.log('Home')
    // ahora dentro de home, me voy a encargar de ver lo que quiero pintar
    // cuando arranca la app queremos que solo se muestre los posts, de ahi en null
    const viewState = React.useState(null)

    // me traigo de viewState, el primer dato que hay en el array
    const view = viewState[0]
    const setView = viewState[1]


    const timestampState = React.useState(null)
    // const timestamp = timestampState[0]
    // el setTimestamp me permite cambiar el es estado de timestamp
    const setTimestamp = timestampState[1]

    // no le pongo event porque no está dentro de un formulario, no es un link, y es un botón
    function handleLogoutClick() {
        logic.logoutUser()

        props.onLogoutClick()
    }

    // hacemos esto para que se actulice el nombre de usuario en la vista home
    // llamamos a la lógica para que nos devuelva el usuario, nos interesa en este caso solo el name
    let name = null

    try {
        const user = logic.retrieveUser()

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    // función para cambiar datos de usuario (view profile)
    function handleProfileClick(event) {
        event.preventDefault()

        setView('profile')
    }

    // función para el link del botón de home
    // necesitamos el evento porque es un link
    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    // función para el botón de + de los post
    function handleNewPostClick() {
        setView('new-post')
    }

    function handleCancelNewPostClick(event) {
        event.preventDefault()

        setView(null)
    }

    // ponemos la variable fuera porque la vamos a querer usar abajo
    let posts = null
    // recuperamos los post, llamando a la lógica
    try {
        posts = logic.retrievePosts()

        posts.reverse()
    } catch (error) {
        alert(error.message)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const text = textInput.value

        try {
            logic.publishPost(image, text)
            // cambia el estado del componente
            // cerrar el formulario una vez que hayamos posteado
            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function handleToggleLikePostClick(postId) {
        try {
            logic.toggleLikePost(postId)

            // cada vez que haga un like, se repintara la home, porque le estaré pasando un valor diferente
            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeletePostClick(postId) {
        if (confirm('Are you sure you want to delete this post?')) {

            try {

                logic.deletePost(postId)

                setTimestamp(Date.now())

            } catch (error) {
                alert(error.message)
            }
        }
    }


    return <div>
        <header className="home-header">
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>

            <div>
                <button onClick={handleNewPostClick}>+</button> <a href="" onClick={handleProfileClick}>{name}</a> <button onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        {view === 'profile' && <div className="view">
            <h2>Update e-mail</h2>

            <form className="form">
                <label htmlFor="new-email-input">New e-mail</label>
                <input id="new-email-input" type="email" />

                <label htmlFor="new-email-confirm-input">Confirm new e-mail</label>
                <input id="new-email-confirm-input" type="email" />

                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" />

                <button type="submit">Update e-mail</button>
            </form>

            <h2>Update password</h2>

            <form className="form">
                <label htmlFor="password-input">Current password</label>
                <input id="password-input" type="password" />

                <label htmlFor="new-password-input">New password</label>
                <input id="new-password-input" type="password" />

                <label htmlFor="new-password-confirm-input">Confirm new password</label>
                <input id="new-password-confirm-input" type="password" />

                <button type="submit">Update password</button>
            </form>
        </div>}

        {view === 'new-post' && <div className="view">
            <h2>New post</h2>

            <form className="form" onSubmit={handleNewPostSubmit}>
                <label htmlFor="image-input">Image</label>
                <input type="url" id="image-input" />

                <label htmlFor="text-input">Text</label>
                <input type="text" id="text-input" />

                <button type="submit">Post</button>
                <button onClick={handleCancelNewPostClick}>Cancel</button>
            </form>
        </div>}

        {view !== 'profile' && posts !== null && <div>

            {posts.map((post) => {
                function handleToggleLikeButtonClick() {
                    handleToggleLikePostClick(post.id)
                }

                function handleDeletePostButtonClick() {
                    handleDeletePostClick(post.id)
                }


                return <article key={post.id} className="post">
                    <h2>{post.author.name}</h2>
                    <img className="post-image" src={post.image} />
                    <p>{post.text}</p>
                    <button onClick={handleToggleLikeButtonClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</button>
                    {post.author.id === logic.userId && <button onClick={handleDeletePostButtonClick}>Delete post</button>}
                </article>
            })}
        </div>}
    </div>
} 