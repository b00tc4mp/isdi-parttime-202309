import { useState, useEffect } from 'react'

import logic from "../logic"

import { Button, Link, Container } from "../library"
import { Posts, Profile, NewPost } from "../components"

import { useContext } from '../hooks'



function Home(props) {
    console.log('Home')

    const context = useContext()

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    // const [id, setId] = useState(null)
    const [stamp, setStamp] = useState(null)

    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                context.handleError(error)

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
                    context.handleError(error)

                    return
                }

                setName(user.name)

                // setId(user.id)
            })

        } catch (error) {
            context.handleError(error)
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
        setStamp(Date.now())
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
        {(view === null || view === 'new-post') && <Posts loadPosts={logic.retrievePosts} stamp={stamp} />}
        {view === 'favs' && <Posts loadPosts={logic.retrieveFavPosts} />}


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