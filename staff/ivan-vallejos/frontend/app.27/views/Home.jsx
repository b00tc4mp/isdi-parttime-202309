function Home(props) {
    console.log('Home')

    const viewState = React.useState(null)

    const view = viewState[0]
    const setView = viewState[1]

    const timestampState = React.useState(null)
    //const timestamp = timestampState[0]
    const setTimestamp = timestampState[1]

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

    function handleToggleLikePostClick(postIndex) {
        try {
            logic.toggleLikePost(postIndex)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <header className="home-header">
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>

            <div>
                <button onClick={handleNewPostClick}>+</button> <a href="" onClick={handleProfileClick}>{name}</a> <button onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        {view === 'profile' && <div classname="view">
            <h2>Update e-mail</h2>

            <form className="form">
                <label htmlFor="new-email-input">New E-mail</label>
                <input id="new-email-input" type="email" />

                <label htmlFor="new-email-confirm-input"> Confirm new E-mail</label>
                <input id="new-email-confirm-input" type="email" />

                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" />

                <button type="submit">Update E-mail</button>
            </form>

            <h2>Update password</h2>

            <form className="form">
                <label htmlFor="password-input">Current Password</label>
                <input id="password-input" type="password" />

                <label htmlFor="new-password-input"> New password</label>
                <input id="new-password-input" type="password" />

                <label htmlFor="new-password-confirm-input">Confirm new password</label>
                <input id="new-password-confirm-input" type="password" />

                <button type="submit">Update E-mail</button>
            </form>
        </div>}

        {view === 'new-post' && <div classname="view">
            <h2>New Post</h2>

            <form className="form" onsubmit={handleNewPostSubmit}>
                <label htmlFor="image-input">Image</label>
                <input id="image-input" type="url" />

                <label htmlFor="text-input">Text</label>
                <input id="text-input" type="text" />

                <button type="submit">Post</button>
                <button onClick={handleCancelNewPostClick}>Cancel</button>
            </form>
        </div>}

        {view !== 'profile' && posts !== null && <div>
            {posts.map((post) => {
                function handleToggleLikeButtonClick() {
                    handleToggleLikePostClick(post.id)
                }

                return <article key={post.id} classname="post">
                    <h2>{post.author}</h2>
                    <img className="post-image" src={post.image} />
                    <p>{post.text}</p>
                    <button onClick={handleToggleLikeButtonClick}>{post.isFav ? 'corazon rojo' : 'corazon blanco'} {post.likes.length} Likes</button>
                </article>
            })}
        </div>}
    </div>
}