import React from "react"
import logic from "../logic"


import { Button, Form, Link, Field, Container } from '../library'
import { Post } from "../components"
import NewPost from "../components/NewPost"
import UpdatePasswordForm from "../components/UpdatePasswordForm"
import UpdateEmailForm from "../components/updateEmailForm"

function Home(props) {
    console.log('Home')

    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [posts, setPosts] = React.useState(null)
    const [favs, setFavs] = React.useState(null)


    /*const timestampState = React.useState(null)
    const setTimestamp = timestampState[1]
*/
    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)
                return
            }
        })

        props.onLogoutClick()

    }

    //  let name = null
    //let favPosts = null

    React.useEffect(() => {
        console.log('Home -> effect (name')

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
    }, [view])


    function handleProfileClick(event) {
        event.preventDefault()
        setView('profile')
    }

    function handleFavPostsClick(event) {
        event.preventDefault()
        setView('fav-posts')
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

    function refreshPosts() {
        if (view === null || view === 'new-post')
            try {
                logic.retrievePosts((error, posts) => {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    posts.reverse()
                    setPosts(posts)
                })
            } catch (error) {
                alert(error.message)
            } else if (view === 'favs')
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

    React.useEffect(() => {
        console.log('Home -> effect(posts)')
        refreshPosts()
    }, [view])

    function handleNewPostSubmit(event) {
        event.preventDefault()
        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const text = textInput.value

        try {
            logic.publishPost(image, text, error => {
                if (error) {
                    alert(error.message)
                    return
                }
                try {
                    logic.retrievePosts((error, posts) => {
                        if (error) {
                            alert(error.message)
                            return
                        }
                        posts.reverse()
                        setPosts(posts)
                        setView(null)
                    })
                } catch (error) {
                    alert(error.message)
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleToggleLikePostClick(postId) {
        try {
            logic.toggleLikePost(postId, error => {
                if (error) {
                    alert(error.message)
                    return
                }
                refreshPosts()
            })
        } catch (error) {
            alert(error.message)
        }
    }

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

            alert('E-mail changed')

            setView(null)


        } catch (error) {
            alert(error.message)

        }
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()
        const passwordInput = event.target.querySelector('#password-input')
        const newPasswordInput = event.target.querySelector('#new-password-input')
        const newPasswordConfirmInput = event.target.querySelector('#new-password-confirm-input')

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value

        try {
            logic.changeUserPassword(newPassword, newPasswordConfirm, password)

            alert('Password changed')

            event.target.reset()
            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function handleDeletePostClick(postId) {
        if (confirm('Delete post?')) {
            try {
                logic.deletePost(postId, error => {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    refreshPosts()

                })
            } catch (error) {
                alert(error.message)

            }
        }
    }

    function handleToggleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleFavPostsClick(event) {
        event.preventDefault()

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

    return <div>
        <header className="home-header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Button id="new-post-button" onClick={handleNewPostClick}>+</Button>
                &nbsp;

                <Link onClick={handleProfileClick}>{name}</Link>
                &nbsp;
                <Link onClick={handleFavPostsClick}>Favs</Link>
                &nbsp;

                <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>
        {view === 'profile' && <div className="container">
            <UpdateEmailForm
                onChangeEmailSubmit={handleChangeEmailSubmit}>
            </UpdateEmailForm>

            <UpdatePasswordForm
                onChangePasswordSubmit={handleChangePasswordSubmit}>
            </UpdatePasswordForm>
        </div>}

        {view === 'new-post' && <div className="container">
            <NewPost
                onNewPostSubmit={handleNewPostSubmit}
                onCancelNewPostClick={handleCancelNewPostClick}
            ></NewPost>

        </div>}

        {(view === null || view === 'new-post') && posts !== null && <div>
            {posts.map((post) => {

                return <Post key={post.id} post={post}
                    onToggleLikeClick={handleToggleLikePostClick}
                    onToggleFavPostClick={handleToggleFavPostClick}
                    onToggleDeletePostClick={handleDeletePostClick} />

            })}
        </div>
        }

        {view === 'favs' && favs !== null && <div>
            {favs.map((post) => {

                return <Post key={post.id} post={post}
                    onToggleLikeClick={handleToggleLikePostClick}
                    onToggleFavPostClick={handleToggleFavPostClick}
                    onToggleDeletePostClick={handleDeletePostClick} />

            })}
        </div>
        }

    </div >

}

export default Home