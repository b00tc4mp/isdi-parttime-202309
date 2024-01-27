import React from "react"

import logic from "../logic"

import { Button, Link, Form, Field, Homeheader } from '../library/index'
import { Post } from '../components'



function Home(props) {
    console.log('Home')

    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [posts, setPosts] = React.useState(null)
    const [favs, setFavs] = React.useState(null)

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
            }
        else if (view === 'favs')
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
        console.log('Home -> effect (posts)')

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
        <Homeheader>
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Button onClick={handleNewPostClick}>+</Button> 
                <Link onClick={handleProfileClick}>{name}</Link> 
                <Link onClick={handleFavPostsClick}>Favs</Link> 
                <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </Homeheader>

        {view === 'profile' && <div className="container">
            <h2>Update e-mail</h2>

            <Form>
                <Field id="new-email-input">New e-mail</Field>
                <Field id="new-email-confirm-input">Confirm new e-mail</Field>
                <Field id="password-input">Password</Field>

                <Button type="submit">Update e-mail</Button>
            </Form>

            <h2>Update password</h2>

            <Form>
                <Field id="password-input">Current password</Field>
                <Field id="new-password-input">New password</Field>
                <Field id="new-password-confirm-input">Confirm new password</Field>

                <Button type="submit">Update password</Button>
            </Form>
        </div>}

        {view === 'new-post' && <div className="container">
            <h2>New post</h2>

            <Form onSubmit={handleNewPostSubmit}>
                <Field id="image-input">Image</Field>
                <Field id="text-input">Text</Field>

                <Button type="submit">Post</Button>
                <Button onClick={handleCancelNewPostClick}>Cancel</Button>
            </Form>
        </div>}

        {(view === null || view === 'new-post') && posts !== null && <div>
            {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={handleToggleLikePostClick} onToggleFavClick={handleToggleFavPostClick}/>)}
        </div>}

        {view === 'favs' && favs !== null && <div>
            {favs.map(post => <Post key={post.id} post={post} onToggleLikeClick={handleToggleLikePostClick} onToggleFavClick={handleToggleFavPostClick}/>)}
        </div>}
    </div>
}

export default Home