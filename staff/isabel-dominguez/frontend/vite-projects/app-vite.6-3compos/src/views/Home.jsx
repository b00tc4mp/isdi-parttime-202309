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
            {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleDeleteClick={refreshPosts} onToggleEditClick={refreshPosts} />)}
        </Container>)}

        {view === "list-fav-post" && (<Container className="posts">
            {favPosts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleDeleteClick={refreshPosts} onToggleEditClick={refreshPosts} />)}
        </Container>)}

        <footer className="footer">
            {view !== "new-post" && <Button className="footer-button" onClick={handleNewPostClick}>+</Button>}
        </footer>
    </div>
}

export default Home