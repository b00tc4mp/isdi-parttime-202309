//HOME

//  - - INFO - -

/* Toda la Home es una funcion, que esta formada por diferentes variables y funciones.
Dentro de la Home hay un template que simplmente es nuestro html de la Home y las diferentes 
funciones y variables que dan funcionalidad a cada elemento del DOM (HTML)*/

function Home(props) {
    console.log('Home')

    const viewState = React.useState(null)

    const view = viewState[0]
    const setView = viewState[1]


    // Estado de LIKES
    const timestampState = React.useState(null)

    // const timestamp = timestampState[0]
    const setTimestamp = timestampState[1]


    // LOGOUT
    function handleLogoutClick() {
        logic.logoutUser()

        props.onLogoutClick()
    }

    let name = null

    try {
        const user = logic.retrieveUser()

        name = user.name
    } catch (error) {
        alert(error.message)
    }


    // SETTINGS BUTTON
    function handleProfileClick(event) {
        event.preventDefault()

        setView('profile')
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }


    // NEW POST BUTTON
    function handleNewPostClick() {
        setView('new-post')
    }


    // CANCEL NEW POST 
    function handleCancelNewPostClick(event) {
        event.preventDefault()

        setView(null)
    }

    let posts = null

    try {
        posts = logic.retrievePosts()

        posts.reverse()
    } catch (error) {
        alert(error.message)
    }


    // CREATE NEW POST
    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const text = textInput.value

        try {
            logic.publishPost(image, text)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }


    // LIKE BUTTON
    function handleToggleLikePostClick(postId) {
        try {
            logic.toggleLikePost(postId)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    // FAV POST BUTTON
    function handleToggleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }


    // TEMPLATE
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

                function handleToggleFavButtonClick() {
                    handleToggleFavPostClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h2>{post.author}</h2>
                    <img className="post-image" src={post.image} />
                    <p>{post.text}</p>
                    <button onClick={handleToggleLikeButtonClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</button>
                    <button onClick={handleToggleFavButtonClick}>{post.fav ? '⭐️' : '✩'}</button>
                </article>
            })}
        </div>}
    </div>
}