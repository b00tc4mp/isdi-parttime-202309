// HOME

function Home(props) {

    const viewState = React.useState(null)

    const view = viewState[0]
    const setView = viewState[1]

    const user = logic.retrieveUser()
    const name = user.name

    let posts = null
    
    try {
        posts = logic.retrievePosts() 
        
        posts.reverse()

    } catch(error) {
        alert(error.message)
    }

    // LOGOUT
    function handleLogoutClick() {
        logic.loggedInEmail = null

        props.onLogoutClick()
        // Mediante 'props' nos traemos de APP la función de cambiar la vista a 'LOGIN'
    }

    // SETTINGS BUTTON
    function handleProfileClick(event) {
        event.preventDefault()
    
        setView('profile')
        // Cambiamos la vista a 'profile'
    }

    // SETTINGS - CHANGE EMAIL
    function handleChangeEmailSubmit(event) {
        event.preventDefault()

        const newEmailInput = event.target.querySelector('#new-email')
        const confirmNewEmailInput = event.target.querySelector('#confirm-new-email')
        const passwordInput = event.target.querySelector('#password')

        const newEmail = newEmailInput.value
        const confirmNewEmail = confirmNewEmailInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, confirmNewEmail, password)

            alert('Email changed successfully!')
        } catch(error) {
            alert(error.message)
        }
    }

    // SETTINGS - CHANGE PASSWORD
    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector('#current-password')
        const newPasswordInput = event.target.querySelector('#new-password')
        const againNewPasswordInput = event.target.querySelector('#again-new-password')

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const againNewPassword = againNewPasswordInput.value

        try {
            logic.changeUserPassword(password, newPassword, againNewPassword)

            alert('Password changed successfully!')
        } catch(error) {
            alert(error.message)
        }
    }

    // HOME BUTTON
    function handleHomeClick(event) {
        event.preventDefault()

        setView('null')
        // Cambiamos la vista a 'null' - home
    }

    // NEW POST BUTTON
    function handleNewPostClick() {
        setView('new-post')
        // Cambiamos la vista a 'new-post'
    }

    // CANCEL NEW POST
    function handleCancelNewPostClick(event) {
        event.preventDefault()

        setView('null')
        // Cambiamos la vista a 'null' - home
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

            setView('null')
        } catch(error) {
            alert(error.message)
        }
    }

    // LIKE BUTTON
    function handleLikeClick(index) {
        const reverseIndex = db.posts.length - 1 - index

        try {
            logic.toggleLikePost(reverseIndex)

        } catch(error) {
            alert(error.message)
        }

        // setView('null') Solo actualiza una vez
        root.render(<App />)
    }

    // TEMPLATE
    return <div className="home-view">
 
    <header className="home-header">
        <h1><a href="" onClick={handleHomeClick}>Home</a></h1>

        <div>
            <button className="button-submit" onClick={handleNewPostClick}>+</button> <a href="" onClick={handleProfileClick}>{name}</a> <button className="button-submit" onClick={handleLogoutClick}>Logout ❌</button>
        </div>
    </header>

    { view === 'profile' && <div className="view">
        <h2>Changes credentials</h2>

        <form className="form" onSubmit={handleChangeEmailSubmit}>
            <h3>Change your email: </h3>

            <label htmlFor="new-email">New email</label>
            <input id="new-email" type="text" />

            <label htmlFor="confirm-new-email">Confirm new email</label>
            <input id="confirm-new-email" type="text" />

            <label htmlFor="password">Password</label>
            <input id="password" type="password" />

            <button className='button-submit' type="submit">Change Email</button>
        </form>

        <form className="form" onSubmit={handleChangePasswordSubmit}>
            <h3>Change your password: </h3>

            <label htmlFor="current-password">Actual password</label>
            <input id="current-password" type="text" />

            <label htmlFor="new-password">New password</label>
            <input id="new-password" type="password" />

            <label htmlFor="again-new-password">Confirm new password</label>
            <input id="again-new-password" type="password" />

            <button className='button-submit' type="submit">Change Password</button>
        </form>

    </div>}

    { view === 'new-post' && <div className="view">
        <h2>New Post</h2>

        <form className="form" onSubmit={handleNewPostSubmit}>
            <label htmlFor="image-input">Image</label>
            <input id="image-input" type="url" />

            <label htmlFor="text-input">Text</label>
            <input id="text-input" type="text" />

            <button className='button-submit' type="submit">Post</button>
            <button className='button-submit' onClick={handleCancelNewPostClick}>Cancel</button>
        </form>
    </div>}

    { view !== 'profile' && posts !== null && <div className='view'>
        {posts.map((post, index) => <article key={index} className="post">
            <h2>{post.author}</h2>
            <img className='post-img' src={post.image}/>
            <p>{post.text}</p> 
            <button className='button-submit' onClick={() => {handleLikeClick(index)}}>{post.likes.length ? '❤️' : '🤍'} {post.likes.length} likes</button>
        </article>)}
    </div>}
</div>}