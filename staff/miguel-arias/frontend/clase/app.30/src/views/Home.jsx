import React from "react"
import logic from "../logic"
import Profile from "./Profile"

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
    }, []) //el array vacío al final sirve para que sólo se active la primera vez

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

        const image = event.target.querySelector('#image-input').value
        const text = event.target.querySelector('#text-input').value

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

    function handleDeletePostClick(postId) {
        if (confirm('Are you sure you want to delete this post?')) {
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

        return
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
            <h1><a href="" onClick={handleHomeClick}>Home</a></h1>

            <div className="home-header-buttons">
                <button className="new-post-button" onClick={handleNewPostClick}>➕</button>
                <a href="" onClick={handleProfileClick}>{name}</a>
                <a href="" onClick={handleFavPostsClick}>Fav list</a>
                <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
            </div>
        </header>

        {view === 'profile' && <Profile onClick={handleProfileClick} />}

        {view === 'new-post' && <div className="view">
            <div className="new-post-view">
                {console.log('new post view')}
                <h2>New post</h2>

                <form className="form" onSubmit={handleNewPostSubmit}>
                    <label htmlFor="image-input">Image</label>
                    <input type="url" id="image-input" />

                    <label htmlFor="text-input">Text</label>
                    <input type="text" id="text-input" />

                    <button type="submit">Post</button>
                    <button onClick={handleCancelNewPostClick}>Cancel</button>
                </form>
            </div>
        </div>}

        {(view === null || view === 'new-post') && posts !== null && <div className="post-div">
            {console.log('normalview')}
            {posts.map((post) => {
                function handleToggleLikeButtonClick() {
                    handleToggleLikePostClick(post.id)
                }

                function handleDeletePostButtonClick() {
                    handleDeletePostClick(post.id)
                }

                function handleToggleFavPostButtonClick() {
                    handleToggleFavPostClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h3>{post.author.name}</h3>
                    <img className="post-image" src={post.image} />

                    <div className="post-buttons">
                        <button onClick={handleToggleLikeButtonClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length}</button>
                        <button onClick={handleToggleFavPostButtonClick}>{post.fav ? '🌟' : '⭐'}</button>
                        {post.author.id == logic.sessionUserId && <button onClick={handleDeletePostButtonClick}>🚽</button>}
                    </div>

                    <div className="post-text">
                        <h4>{post.author.name}</h4>
                        <p>{post.text}</p>
                    </div>
                </article>
            })}
        </div>}

        {view === 'favs' && favs !== null && <div className="post-div">
            {console.log('favs')}

            {favs.map((post) => {
                function handleToggleLikeButtonClick() {
                    handleToggleLikePostClick(post.id)
                }

                function handleDeletePostButtonClick() {
                    handleDeletePostClick(post.id)
                }

                function handleToggleFavPostButtonClick() {
                    handleToggleFavPostClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h3>{post.author.name}</h3>
                    <img className="post-image" src={post.image} />

                    <div className="post-buttons">
                        <button onClick={handleToggleLikeButtonClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length}</button>
                        <button onClick={handleToggleFavPostButtonClick}>{post.fav ? '🌟' : '⭐'}</button>
                        {post.author.id == logic.sessionUserId && <button onClick={handleDeletePostButtonClick}>🚽</button>}
                    </div>

                    <div className="post-text">
                        <h4>{post.author.name}</h4>
                        <p>{post.text}</p>
                    </div>
                </article>
            })}
        </div>}
    </div>
}

export default Home