function Home(props) {
    console.log('Home')

    const viewState = React.useState(null)

    const view = viewState[0]
    const setView = viewState[1]

    const timestampState = React.useState(null)
    // const timestamp = timestampState[0]
    const setTimestampState = timestampState[1]

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

    /////

    /* const user = logic.retrieveUser()
    const name = user.name */


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

    function handleToggleLikePostClick(postId) {
        try {
            logic.toggleLikePost(postId)

            setTimestampState(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeletePostButtonClick(postId) {
        if (confirm('Are you sure you want to delete this post?')) {

            try {
                logic.deletePost(postId)

                setTimestampState(Date.now())

            } catch (error) {
                alert(error.message)
            }
        }
    }

    function handleToggleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId)

            setTimestampState(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    /////////
    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const newEmailInput = event.target.querySelector('#new-email-input')
        const newEmailConfirmInput = event.target.querySelector('#new-email-confirm-input')
        const passwordInput = event.target.querySelector('#password-input')

        const newEmail = newEmailInput.value
        const newEmailConfirm = newEmailConfirmInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, newEmailConfirm, password)

            alert('Email changed!')
            event.target.reset()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const newPasswordInput = event.target.querySelector('#new-password-input')
        const newPasswordConfirmInput = event.target.querySelector('#new-password-confirm-input')
        const passwordInput = event.target.querySelector('#password-input')

        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value
        const password = passwordInput.value

        try {
            logic.changeUserPassword(newPassword, newPasswordConfirm, password)

            alert('Password changed successfully!')
            event.target.reset()

        } catch (error) {
            alert(error.message)
        }
    }
    ///////

    return <div>
        <header className="home-header">
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>

            <div>
                <button onClick={handleNewPostClick}>+</button> <a href="" onClick={handleProfileClick}>{name}</a> <button onClick={handleLogoutClick}>Logout 🔚</button>
            </div>
        </header>

        {view === 'profile' && <div className="view">
            <h2>Update e-mail</h2>

            <form className="form" onSubmit={handleChangeEmailSubmit}>
                <label htmlFor="new-email-input">New e-mail</label>
                <input id="new-email-input" type="email" />

                <label htmlFor="new-email-confirm-input">Confirm new e-mail</label>
                <input id="new-email-confirm-input" type="email" />

                <label htmlFor="password-input">Password</label>
                <input id="password-input" type="password" />

                <button type="submit">Update e-mail</button>
            </form>

            <h2>Update password</h2>

            <form className="form" onSubmit={handleChangePasswordSubmit}>
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

        {view !== 'profile' && posts !== null && <div className="view">
            {posts.map((post) => {
                function handleToggleLikeButtonClick() {
                    handleToggleLikePostClick(post.id)
                }

                function handleToggleFavButtonClick() {
                    handleToggleFavPostClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h2>{post.author.name}</h2>
                    <img className="post-image" src={post.image} />
                    <p>{post.text}</p>
                    <div className="buttons-post">
                        <button onClick={handleToggleLikeButtonClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</button>
                        <button onClick={handleToggleFavButtonClick}>{post.fav ? '⭐️' : '✩'}</button>
                        {post.author.id === logic.sessionUserId && <button onClick={handleDeletePostButtonClick}>Delete post</button>}
                    </div>
                </article>
            })}
        </div>}
    </div>
} 