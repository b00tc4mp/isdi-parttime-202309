import { useState, useEffect } from "react"

import logic from "../logic"

import { Button, Link, Container } from "../library"
import { Posts, Profile, NewPost } from "../components"



function Home(props) {
    console.log('Home')

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    // const [id, setId] = useState(null)
    const [stamp, setStamp] = useState(null)

    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)

                return
            }
        })

        props.onLogoutClick()
    }

    useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setName(user.name)

                // setId(user.id)
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

    function handleNewPostCancel() {
        setView(null)
    }

    function handleNewPostPublish() {
        setStamp(Date.now)
        setView(null)

        window.scrollTo(0, 0)
    }

    function handleFavPostsClick(event) {
        event.preventDefault()

        setView('favs')
    }

    return <div>
        <header className="header">

            <div>
                <Link onClick={handleFavPostsClick}>Favs</Link> <Button onClick={handleLogoutClick}>Logout 🔚</Button>
            </div>
        </header>

        {view === 'profile' && <Profile />}
        {(view === null || view === 'new-post') && <Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} />}
        {view === 'favs' && <Posts loadPosts={logic.retrieveFavPosts.bind(logic)} />}


        <footer className="footer">
            <Container className="footer-menu">
                <Button className="button-menu" onClick={handleHomeClick}>🏠</Button>
                {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} />}
                {view !== 'new-post' && <Button className="button-menu" onClick={handleNewPostClick}>+</Button>}
                <Button className="button-menu" onClick={handleProfileClick}>⚙️</Button>
            </Container>
        </footer>
    </div>
}

export default Home