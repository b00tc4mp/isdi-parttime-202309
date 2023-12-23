import React from "react"
import logic from "../logic"
import { Button, Link, Container } from "../library"
import { NewPost, Post, Profile } from "../components"

function Home(props) {
    // Declaración de estados usando React.useState
    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [posts, setPosts] = React.useState(null)
    const [favPosts, setFavs] = React.useState(null)

    function handleNewPostClick() {
        setView("new-post")

        window.scrollTo(0, 0)
    }

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

        setView("profile")
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    function refreshPosts() {
        if (view === null || view === "new-post")
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
        else if (view === "list-fav-post")
            try {
                logic.retrieveFavPosts((error, favs) => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    setFavs(favs)
                })
            } catch (error) {
                alert(error.message)
            }
    }

    React.useEffect(() => {
        refreshPosts()
    }, [view])

    function handleLikeClick(postId) {
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
        if (confirm("Are you sure you want to delete this post?")) {

            try {
                logic.deletePost(postId, (error) => {
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

    function handleFavPostClick(postId) {
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

    function handleListFavPostsClick(event) {
        event.preventDefault()

        try {
            logic.retrieveFavPosts((error, favs) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setFavs(favs)
                setView("list-fav-post")
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleEditPostClick() {
        setEditTextPost("edit-text-post")
    }

    return <div>
        <header className="home-header">
            <h1><a className="home-link" href="" onClick={handleHomeClick}>Home</a></h1>
            <div>
                <Link onClick={handleProfileClick}>{name}</Link> <Button onClick={handleListFavPostsClick}>favs</Button> <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>

        {view === "profile" && <Profile onSuccess={handleHomeClick} />}

        {view === "new-post" && <NewPost onSuccess={handleHomeClick} onClick={setView} />}

        {view !== "profile" && view !== "list-fav-post" && posts !== null && (<Container className="posts">
            {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} onToggleEditClick={handleEditPostClick} />)}
        </Container>)}

        {view === "list-fav-post" && (<Container className="posts">
            <h1>⭐ Favorite posts ⭐</h1>
            {favPosts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} onToggleEditClick={handleEditPostClick} />)}
        </Container>)}

        <footer className="footer">
            {view !== "new-post" && <Button className="footer-button" onClick={handleNewPostClick}>+</Button>}
        </footer>
    </div>
}

export default Home