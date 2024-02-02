import React from "react"

import logic from "../logic"

import { Button, Link } from '../library'

import { Post } from "../components"


function Home(props) {
    console.log('Home')

    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [posts, setPosts] = React.useState(null)
    const [favs, setFavs] = React.useState(null)


   /*  
   Arriba reescribimos el useState hook que cambia las vistas, usando destructuring. Luego añadimos otros para cambiar otras vistas 
   const viewState = React.useState(null)
   const view = viewState[0]
   const setView = viewState[1] */

    //LOG OUT
    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)

                return
            }
        })
        props.onLogoutClick()
    }

    React.useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setName(user.name)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])
    
 
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

   function refreshPosts() {
        if(view === null || view === 'new-post') {
            try {
                logic.retrievePosts((error, posts) => {
                    if(error) {
                        alert(error.message)

                        return
                    }

                    posts.reverse()
                
                    setPosts(posts)
                })
            } catch(error) {
                alert(error.message)
            }
        } else if (view === 'favs') {
            try {
                logic.retrieveFavPosts((error, favs) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    favs.reverse()

                    setFavs(favs)
                })
            } catch (error) {
                alert(error.message)            
            }
        }   
    }

    React.useEffect(() => {
        console.log('Home -> effect (posts)')

        refreshPosts()
    }, [view])

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const text = textInput.value

        try{
            logic.publishPost(image, text, error => {
                if (error) {
                    alert(error.message)

                    return
            }

                try{
                    logic.retrievePosts((error, posts) => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        posts.reverse()

                        setPosts(posts)
                        setView(null)

                        window.scrollTo(0,0)
                    })
                } catch(error) {
                    alert(error.message)
                }
            })
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
        try {
            logic.retrieveFavPosts((error, favs) => {
                if (error) {
                    alert(error.message)

                    return
                }

                favs.reverse()

                setFavs(favs)
                setView('favs')
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // TEMPLATE
    return <div>
        <header className="header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>
    
            <div>
                <Link onClick={handleProfileClick}>{name}</Link> <Button onClick={handleFavPostsClick}>🌟 My Favs</Button> <Button onClick={handleLogoutClick}>Log out</Button>
            </div>
        </header>

        {view === 'profile' && <div className="container">
            <h2>Update e-mail</h2>

            <form className="form" onSubmit={handleChangeEmailSubmit}>
                <label htmlFor="new-email-input">New e-mail:</label>
                <input className = "input" type="email" id="new-email-input"/>

                <label htmlFor="new-email-confirm-input">Confirm new email:</label>
                <input className = "input" type="email" id="new-email-confirm-input"/>

                <label htmlFor="password-input">Password:</label>
                <input className = "input" type="password" id="password-input"/>

                <Button type="submit">Update e-mail</Button>
            </form>

            <h2>Update password</h2>

            <form className="form" onSubmit={handleChangePasswordSubmit}>
                <label htmlFor="password-input" >Current password:</label>
                <input className = "input" type="password" id="password-input"/>

                <label htmlFor="new-password-input">New password:</label>
                <input className = "input" type="password" id="new-password-input"/>

                <label htmlFor="new-password-confirm-input">Confirm new password:</label>
                <input className = "input" type="password" id="new-password-confirm-input"/>

                <Button type="submit">Update password</Button>
            </form>
        </div>}

        {(view === null || view === 'new-post') && posts !== null && <div className="posts">
            {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onDeletePostClick={refreshPosts}/>)}
        </div>}
        
        {view === 'favs' && <div className="posts">
            {favs.map(post => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onDeletePostClick={refreshPosts}/>)}
        </div>}

        {view === 'new-post' && <div className="container new-post">
                <h2>New post</h2>

                <form className="form" onSubmit={handleNewPostSubmit}>
                    <label htmlFor="image-input">Image</label>
                    <input type="url" id="image-input"/>

                    <label htmlFor="text-input">Text</label>
                    <input type="text" id="text-input"/>

                    <Button type="submit">Post</Button>
                    <Button onClick={handleCancelNewPostClick}>Cancel</Button>
                </form>
            </div>}
            

        <footer className='footer'>
            {view === 'new-post' && <div className="container new-post">
                <h2>New post</h2>

                <form className="form" onSubmit={handleNewPostSubmit}>
                    <label htmlFor="image-input">Image</label>
                    <input type="url" id="image-input"/>

                    <label htmlFor="text-input">Text</label>
                    <input type="text" id="text-input"/>

                    <Button type="submit">Post</Button>
                    <Button onClick={handleCancelNewPostClick}>Cancel</Button>
                </form>
            </div>}
            
            {view !== 'new-post' && <Button onClick={handleNewPostClick}>+</Button>}
        </footer>
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
        <button className= "button" className='button-submit' onClick={() => handleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</button>
        {post.author.id === user.id && (<button className= "button" className='button-submit' onClick={() => handleDeletePostClick(post.id)}>Delete post</button>)}
    </div>
</article>)}
</div>}
*/

export default Home