
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

        // es una función que se espera que se pase como propiedad al componente Home.
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

    function handleToggleLikePostClick(postIndex) {
        try {
            logic.toggleLikePost(postIndex)

            // cada vez que haga un like, se repintara la home, porque le estaré pasando un valor diferente
            setTimestamp(Date.now())
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
            {/* tenemos que conseguir cada post (objeto con datos) en un artículo, es decir, es un DOM virtual */}
            {/* vamos a mapear cada objeto para devolver un array de componentes de react */}
            {/* En React, el atributo key se utiliza para asignar un identificador único a los elementos en una lista renderizada */}
            {posts.map((post, index, posts) => {
                function handleToggleLikeButtonClick() {
                    const postIndex = posts.length - 1 - index

                    // cálculo del índice invertido
                    handleToggleLikePostClick(postIndex)
                }

                return <article key={index} className="post">
                    <h2>{post.author}</h2>
                    <img className="post-image" src={post.image} />
                    <p>{post.text}</p>
                    {/* el nº de likes que tengo {post.likes.length} */}
                    {/* Esta expresión se utiliza  para mostrar un emoji de corazón rojo cuando post.isFav es verdadero y un emoji de corazón blanco cuando post.isFav es falso */}
                    <button onClick={handleToggleLikeButtonClick}>{post.isFav ? '❤️' : '🤍'} {post.likes.length} likes</button>
                </article>
            })}
        </div>}
    </div>
}