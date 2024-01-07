function Home(props) {
    console.log('Home')

    const viewState = React.useState(null)
    const view = viewState[0]
    const setView = viewState[1]

    // Estado de LIKES
    const timestampState = React.useState(null)
    // const timestamp = timestampState[0]
    const setTimestamp = timestampState[1]

    //LOG OUT
    function handleLogoutClick() {
        logic.logoutUser()
        props.onLogoutClick()
    }

    let name = null
    
    try {
        const user = logic.retrieveUser()
        name = user.name
    } catch(error){
        alert(error.message)
    }

    // USER SETTINGS BUTTON
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
    let favs = null

    if(view === null || view === 'new-post') {
        try {
            posts = logic.retrievePosts()

            posts.reverse()
        } catch(error) {
            alert(error.message)
        }
    }
    else if(view === 'favs') {
        try {
            favs = logic.retrieveFavPosts()

            favs.reverse()

        } catch (error) {
            alert(error.message)            
        }

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

    function handleToggleLikePostClick(postId) {
        try {
            logic.toggleLikePost(postId)

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    // DELETE BUTTON
    function handleDeletePostClick(postId) {
        if(confirm('Are you sure you want to delete this post?')) {

            try {
                logic.deletePost(postId)

                setTimestamp(Date.now())

            } catch (error) {
                alert(error.message)
            }
        }
    }

    // FAV POST BUTTON
    function handleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId)

            setTimestamp(Date.now())   
        } catch (error) {
            alert(error.message)
        }
    }

    // CHANGE EMAIL
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
            
            alert('Email changed correctly')

        } catch (error) {
            alert(error.message)
        }
    }

    // CHANGE PASSWORD
    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector('#password-input')
        const newPasswordInput = event.target.querySelector('#new-password-input')
        const newPasswordConfirmInput = event.target.querySelector('#new-password-confirm-input')

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value

        try {
            logic.changeUserPassword(password, newPassword, newPasswordConfirm)

            alert('Password changed correctly')

        } catch (error) {
            alert(error.message)
        }
    }

    function handleFavPostsClick() {
        setView('favs')
    }

    // TEMPLATE
    return <div>
        <header className="home-header">
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>
    
            <div>
                <button onClick={handleNewPostClick}>+</button> <a href="" onClick={handleProfileClick}>{name}</a> <button onClick={handleFavPostsClick}>🌟 My Favs</button> <button onClick={handleLogoutClick}>Log out</button>
            </div>
        </header>

        {view === 'profile' && <div className="view">
            <h2>Update e-mail</h2>

            <form className="form" onSubmit={handleChangeEmailSubmit}>
                <label htmlFor="new-email-input">New e-mail:</label>
                <input type="email" id="new-email-input"/>

                <label htmlFor="new-email-confirm-input">Confirm new email:</label>
                <input type="email" id="new-email-confirm-input"/>

                <label htmlFor="password-input">Password:</label>
                <input type="password" id="password-input"/>

                <button type="submit">Update e-mail</button>
            </form>

            <h2>Update password</h2>

            <form className="form" onSubmit={handleChangePasswordSubmit}>
                <label htmlFor="password-input" >Current password:</label>
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

        {(view === null || view === 'new-post') && posts !== null && <div>
            {posts.map((post) => {
                function handleToggleLikeButtonClick() {
                    handleToggleLikePostClick(post.id)
                }
                function handleDeletePostButtonClick() {
                    handleDeletePostClick(post.id)
                }
            
            return <article key={post.id} className="post">
                <h2>{post.author.name}</h2>
                <img className="post-image" src={post.image}/>
                <p>{post.text}</p>
                <button onClick={handleToggleLikeButtonClick}>{post.liked ? '♥️' : '🤍'} {post.likes.length} likes</button>
                <button onClick={() => handleFavPostClick(post.id)}>{post.fav ? '🌟' : '☆'} Fav</button>
                {//we do the onClick fav post button with an arrow function, therefore skipping the functions usually declared in posts.mpa() a few lines up. Because we skip that step, the naming is slightly different, ie. we skip handleToggleFavButtonClick()
                }
                {post.author.id === logic.sessionUserId && <button onClick={handleDeletePostButtonClick}>Delete Post</button>}
            </article>
            })}
        </div>}
        
        {view === 'favs' && <div>
            {favs.map((post) => {
                function handleToggleLikeButtonClick() {
                    handleToggleLikePostClick(post.id)
                }
                function handleDeletePostButtonClick() {
                    handleDeletePostClick(post.id)
                }
            
            return <article key={post.id} className="post">
                <h2>{post.author.name}</h2>
                <img className="post-image" src={post.image}/>
                <p>{post.text}</p>
                <button onClick={handleToggleLikeButtonClick}>{post.liked ? '♥️' : '🤍'} {post.likes.length} likes</button>
                <button onClick={() => handleFavPostClick(post.id)}>{post.fav ? '🌟' : '☆'} Fav</button>
                {//we do the onClick fav post button with an arrow function, therefore skipping the functions usually declared in posts.mpa() a few lines up. Because we skip that step, the naming is slightly different, ie. we skip handleToggleFavButtonClick()
                }
                {post.author.id === logic.sessionUserId && <button onClick={handleDeletePostButtonClick}>Delete Post</button>}
            </article>
            })}
        </div>}
    </div>
}

/* 
An alternative way of showing a post: using arrow functions inside the button onClicks, instead of declaring separate functions. 

It also uses a div to group together the buttons (Likes and delete)

{view !== 'profile' && posts !== null && <div className='view'>
{posts.map((post) => <article key={post.id} className="post">
    <h2>{post.author.email}</h2>
    <img className='post-img' src={post.image} />
    <p>{post.text}</p>
    <div className="buttons-post">
        <button className='button-submit' onClick={() => handleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</button>
        {post.author.id === user.id && (<button className='button-submit' onClick={() => handleDeletePostClick(post.id)}>Delete post</button>)}
    </div>
</article>)}
</div>}
*/
