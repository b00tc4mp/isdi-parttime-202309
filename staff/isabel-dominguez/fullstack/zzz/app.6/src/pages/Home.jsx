import { useState, useEffect } from "react"

import logic from "../logic"

import { Button, Link } from "../library"
import { NewPost, Profile, Posts } from "../components"

function Home(props) {
    // Declaración de estados usando React.useState
    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [stamp, setStamp] = useState(null)

    useEffect(() => {
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

    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)

                return
            }
        })

        props.onLogoutClick()
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    function handleProfileClick(event) {
        event.preventDefault()

        setView("profile")
    }

    function handleNewPostClick() {

        setView("new-post")

        window.scrollTo(0, 0)
        setStamp(Date.now())
    }

    function handleNewPostPublish() {
        setStamp(Date.now())
        setView(null)

        window.scrollTo(0, 0)
    }

    function handleListFavPostsClick(event) {
        event.preventDefault()

        setView("list-fav-post")
    }

    return <div>
        <header className="home-header">
            <h1><a className="home-link" href="" onClick={handleHomeClick}>Home</a></h1>
            <div>
                <Link onClick={handleProfileClick}>{name}</Link> <Button onClick={handleListFavPostsClick}>favs</Button> <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>

        {view === "profile" && <Profile onSuccess={handleHomeClick} />}

        {view === "new-post" && <NewPost onSuccess={handleNewPostPublish} onClick={setView} />}

        {view !== "profile" && view !== "list-fav-post" && <Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} />}

        {view === "list-fav-post" && <Posts loadPosts={logic.retrieveFavPosts.bind(logic)} />}

        <footer className="footer">
            {view !== "new-post" && <Button className="footer-button" onClick={handleNewPostClick}>+</Button>}
        </footer>
    </div>
}

export default Home