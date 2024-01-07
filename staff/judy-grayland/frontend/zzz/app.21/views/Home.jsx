function Home(props) {
    console.log('Home')

    const viewState = React.useState(null)

    const view = viewState[0]
    const setView = viewState[1]

    function handleLogoutClick() {
        logic.logoutUser()
        props.onLogoutClick()
    }

    let name = null
    
    try {
        const user = logic.retrieveUser()
        name = user.name
    } catch(error){

    }

    function handleProfileClick(event) {
        event.preventDefault()

        setView('profile')
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleCancelNewPostClick (event){
        event.preventDefault()

        setView(null)
    }

    let posts = null // se declara fuera del try catch para poder usarlo luego en view !== profile

    try {
        posts = logic.retrievePosts()

        posts.reverse()
    } catch(error) {
        alert(error.message)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const text = textInput.value

        try{
            logic.publishPost(image, text)
        
            setView(null)

        } catch(error) {
            alert(error.message)
        }
    }

    return <div>
        <header className="home-header">
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>
    
            <div>
                <button onClick={handleNewPostClick}>+</button> <a href="" onClick={handleProfileClick}>{name}</a> <button onClick={handleLogoutClick}>Log out</button>
            </div>
        </header>

        {view === 'profile' && <div className="view">
            <h2>Update e-mail</h2>

            <form className="form">
                <label htmlFor="new-email-input">New e-mail:</label>
                <input type="email" id="new-email-input"/>

                <label htmlFor="new-email-confirm-input">Confirm new email:</label>
                <input type="email" id="new-email-confirm-input"/>

                <label htmlFor="password-input">Password:</label>
                <input type="password" id="password-input"/>

                <button type="submit">Update e-mail</button>
            </form>

            <h2>Update password</h2>

            <form className="form">
                <label htmlFor="password-input">Current password:</label>
                <input type="password" id="password-input"/>

                <label htmlFor="new-password-input">New password:</label>
                <input type="password" id="new-password-input"/>

                <label htmlFor="new-password-confirm-input">Confirm new password:</label>
                <input type="password" id="new-password-confirm-input"/>

                <button type="submit">Update password</button>
            </form>
        </div>}

        {view === 'new-post' && <div className="view">
            <h2>New post</h2>

            <form className="form" onSubmit={handleNewPostSubmit}>
                <label htmlFor="image-input">Image</label>
                <input type="url" id="image-input"/>

                <label htmlFor="text-input">Text</label>
                <input type="text" id="text-input"/>

                <button type="submit">Post</button>
                <button onClick={handleCancelNewPostClick}>Cancel</button>
            </form>
        </div>}

        {view !== 'profile' && posts !== null && <div>
            {/* <article className="post">
                <h2>simone@biles.com</h2>
                <img className="post-image" src="https://e3.365dm.com/23/08/1600x900/skynews-simone-biles-us-gymnastic_6265542.jpg"/>
                <p>I've done it again</p>
                <button>🤍 1 likes</button>
            </article>

            <article className="post">
                <h2>marge@simpson</h2>
                <img className="post-image" src="https://i.pinimg.com/564x/13/63/37/13633734d116fe188af57fe9da7d095e.jpg"/>
                <p>my sweety!</p>
                <button>💙 1 likes</button>
            </article>

            <article className="post">
                <h2>simone@biles.com</h2>
                <img className="post-image" src="https://phantom-elmundo.unidadeditorial.es/14e29406d919ab966f9145a3bf12e8f3/crop/0x258/3072x2306/resize/746/f/webp/assets/multimedia/imagenes/2023/08/28/16932101527358.jpg"/>
                <p>I am back</p>
                <button>🤍 0 likes</button>
            </article> */}

            {posts.map((post, index) => <article key={index} className="post">
                <h2>{post.author}</h2>
                <img className="post-image" src={post.image}/>
                <p>{post.text}</p>
                <button>{post.isFav? '♥️' : '🤍'} {post.likes.length} likes</button>
            </article>)}
        </div>}
    </div>
}