import logic from "../logic"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect

import Profile from "../components/Profile"
import {Button, Field, Form, Link, Container} from '../library'

// HOME

function Home(props) {
    console.log('Home')

    // STATE VIEWS's
    const [view, setView] = useState(null)

    // STATE NAME (Profile) & ID (Posts-Favs)
    const [name, setName] = useState(null)
    const [id, setId] = useState(null)

    // STATE POSTS - FAVS
    const [posts, setPosts] = useState(null)
    const [favs, setFavs] = useState(null)

    // STATE & EFFECT - NAME
    useEffect(() => {
        console.log('Home -> Effect (name-id)')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setName(user.name)
                // Guardamos en STATE el user para usar el "NAME"
                setId(user.id)
                // Guardamos en STATE el user para usar el "ID"
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    // STATE & EFFECT - POSTS
    useEffect(() => {
        console.log('Home -> Effect (posts)')

        refreshPosts()
    }, [])

    // RENDER POSTS & FAVS POSTS
    function refreshPosts() {
        if (view === null || view === 'new-post') {
            try {
                logic.retrievePosts((error, posts) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    posts.reverse()

                    setPosts(posts)
                    // Renderizamos la vista de los posts
                })
            } catch (error) {
                alert(error.message)
            }
        } else if (view === 'favs') {
            try {
                logic.retrieveFavUserPosts((error, favs) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    favs.reverse()

                    setFavs(favs)
                    // Renderizamos la vista de los favoritos
                })
            } catch (error) {
                alert(error.message)
            }
        }
    }

    // LOGOUT
    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)

                return
            }
        })

        props.onLogoutClick()
        // Mediante 'props' nos traemos de APP la función de cambiar la vista a 'LOGIN'
    }

    // SETTINGS BUTTON
    function handleProfileClick(event) {
        event.preventDefault()

        setView('profile')
        // Cambiamos la vista a 'profile'
    }

    // HOME BUTTON
    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
        // Cambiamos la vista a 'null' - home
    }

    // LIST FAVS POSTS 
    function handleFavsPostsClick() {
        try {
            logic.retrieveFavUserPosts((error, favs) => {
                if (error) {
                    alert(error.message)

                    return
                }

                favs.reverse()

                setFavs(favs)
                // Estado de los favoritos
                setView('favs')
                // Cambiamos la vista a 'FAVS'

            })
        } catch (error) {
            alert(error.message)
        }
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
                        // Estado de los posts
                        setView(null)
                        // Cambiamos la vista a "NULL" (los posts)
                    })
                } catch (error) {
                    alert(error.message)
                }
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // LIKE BUTTON
    function handleToggleLikeClick(postId) {
        try {
            logic.toggleLikePost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts()
                // Hacemos un repintado de los posts-favs
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // DELETE BUTTON
    function handleToggleDeletePostClick(postId) {
        if (confirm('Are you sure that you want to delete this post?')) {

            try {
                logic.deletePost(postId, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    refreshPosts()
                    // Hacemos un repintado de los posts-favs
                })

            } catch (error) {
                alert(error.message)
            }
        }
    }

    // FAVS POST BUTTON
    function handleToggleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts()
                // Hacemos un repintado de los posts-favs
            })

        } catch (error) {
            alert(error.message)
        }
    }
/////////////////////////////////////////////////////////////////////////////////////////
    // TEMPLATE
    return <Container>

        <header className="home-header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <Container>
                <Link onClick={handleProfileClick}>{name}</Link>
                <Button onClick={handleNewPostClick}>+</Button>
                <Button onClick={handleFavsPostsClick}>Favs</Button>
                <Button onClick={handleLogoutClick}>Logout🚫</Button>
            </Container>
        </header>


        {view === 'profile' && <Profile/>}{/*(HANDLE IN PROFILE)*/}


        {view === 'new-post' && <Container>
            <h2>New Post</h2>

            <Form className="form" onSubmit={handleNewPostSubmit}>
                <Field id="image-input">Image</Field>
                <Field id="text-input">Text</Field>

                <Button type="submit">Post</Button>
                <Button onClick={handleCancelNewPostClick}>Cancel</Button>
            </Form>
        </Container>}

        {view !== 'profile' && view !== 'favs' && posts !== null && <Container>
            {posts.map((post) => <article key={post.id} className="post">
                <h2>{post.author.email}</h2>
                <img className='post-img' src={post.image} />
                <p>{post.text}</p>
                <Container>
                    <Button onClick={() => handleToggleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                    <Button onClick={() => handleToggleFavPostClick(post.id)}>{post.fav ? '⭐' : '☆'}Fav</Button>
                    {post.author.id === id && (<Button onClick={() => handleToggleDeletePostClick(post.id)}>Delete post</Button>)}
                </Container>
            </article>)}
        </Container>}

        {view === 'favs' && <Container>
            <h1>⭐ All your favorite posts ⭐</h1>
            {favs.map((fav) => <article key={fav.id} className="post">
                <h2>{fav.author.email}</h2>
                <img className="post-img" src={fav.image} />
                <p>{fav.text}</p>
                <Container>
                    <Button onClick={() => handleToggleLikeClick(fav.id)}>{fav.liked ? '❤️' : '🤍'} {fav.likes.length} likes</Button>
                    <Button onClick={() => handleToggleFavPostClick(fav.id)}>{fav.fav ? '⭐' : '☆'}Fav</Button>
                    {fav.author.id === id && (<Button onClick={() => handleToggleDeletePostClick(fav.id)}>Delete post</Button>)}
                </Container>
            </article>)}
        </Container>}
    </Container >
}

export default Home