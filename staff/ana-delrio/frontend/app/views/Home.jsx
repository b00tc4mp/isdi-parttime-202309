function Home(props) {
    console.log('Home')

    // ahora dentro de home, me voy a encargar de ver lo que quiero pintar
    // cuando arranca la app queremos que solo se muestre los posts, de ahi en null
    const viewState = React.useState(null)

    // me traigo de viewState, el primer dato que hay en el array
    const view = viewState[0]
    const setView = viewState[1]

    // no le pongo event porque no está dentro de un formulario, no es un link, y es un botón
    function handleLogoutClick() {
        // debemos de cerciorarnos de cerrar la sesión
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
        // que aparezca profile
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

        // llamamos a la lógica
        try {
            logic.publishPost(image, text)
            // cambia el estado del componente
            // cerrar el formulario una vez que hayamos posteado 
            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        {/* hay que cerrar todos los elementos */}
        {/* hay que cerrar todos las imégenes también */}
        {/* fijarse en el nombre de las clases, ids, labels... (className,htmlFor...) */}
        <header className="home-header">
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>

            <div>
                <button onClick={handleNewPostClick}>+</button> <a href="" onClick={handleProfileClick}>{name}</a> <button onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        {/* si la view es profile, se vea lo siguiente */}
        {/* si la view es profile, entra react y lo pinta */}
        {view === 'profile' && <div className="view">
            <h2>Update e-mail</h2>

            <form className="form">
                <label htmlFor="new-email-input">New e-mail</label>
                <input id="new-email-input" type="email" />

                <label htmlFor="new-email-confirm-input">Confirm new e-mail</label>
                <input id="new-email-confirm-input" type="email" />

                <label htmlFor="password-input">Password</label>
                <input type="password" id="password-input" />

                <button type="submit">Update e-mail</button>
            </form>

            <h2>Update password</h2>

            <form className="form">
                <label htmlFor="password-input">Current password</label>
                <input type="password" id="password-input" />

                <label htmlFor="new-password-input">New password</label>
                <input id="new-password-input" type="password" />

                <label htmlFor="new-password-confirm-input">Confirm new password</label>
                <input id="new-password-confirm-input" type="password" />

                <button type="submit">Update password</button>
            </form>
        </div>}

        {/* si la view es new-post, se vea lo siguiente */}
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

        {/* la siguiente condición la ponemos porque los posts solo se ven en determinadas vistas, solo se pintarán SI LA VISTA ES DIFERENTE A LA DE PROFILE */}
        {view !== 'profile' && posts !== null && <div>
            {/* <article className="post">
                <h2>peter@pan.com</h2>
                <img className="post-image" src="https://m.media-amazon.com/images/I/71JZegDmwbL.jpg" />
                <p>i love ü baby</p>
                <button>🤍 1 likes</button>
            </article>

            <article className="post">
                <h2>wendy@darling.com</h2>
                <img className="post-image" src="https://ih1.redbubble.net/image.2230349250.8377/pp,840x830-pad,1000x1000,f8f8f8.jpg" />
                <p>my sweety!</p>
                <button>❤️ 1 likes</button>
            </article>

            <article className="post">
                <h2>peter@pan.com</h2>
                <img className="post-image" src="https://m.media-amazon.com/images/M/MV5BMzIwMzUyYTUtMjQ3My00NDc3LWIyZjQtOGUzNDJmNTFlNWUxXkEyXkFqcGdeQXVyMjA0MDQ0Mjc@._V1_FMjpg_UX1000_.jpg" />
                <p>my granpa!</p>
                <button>🤍 0 likes</button>
            </article> */}

            {/* tenemos que conseguir cada post (objeto con datos) en un artículo, es decir, es un DOM virtual */}
            {/* vamos a mapear cada objeto para devolver un array de componentes de react */}
            {/* En React, el atributo key se utiliza para asignar un identificador único a los elementos en una lista renderizada */}
            {posts.map((post, index) => <article key={index} className="post">
                <h2>{post.author}</h2>
                <img className="post-image" src={post.image} />
                <p>{post.text}</p>
                {/* el nº de likes que tengo {post.likes.length} */}
                {/* Esta expresión se utiliza  para mostrar un emoji de corazón rojo cuando post.isFav es verdadero y un emoji de corazón blanco cuando post.isFav es falso */}
                <button>{post.isFav ? '❤️' : '🤍'} {post.likes.length} likes</button>
            </article>)}
        </div>}
    </div>
}