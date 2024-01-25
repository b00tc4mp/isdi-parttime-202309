import { useState, useEffect } from 'react'

import logic from '../logic'

import { Button, Link } from '../library'
import { Posts, Profile, NewPost } from '../components'


function Home(props) {
    console.log('Home')

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [stamp, setStamp] = useState(null)

    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                props.onError(error)

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
                    props.onError(error)

                    return
                }

                setName(user.name)
            })

        } catch (error) {
            props.onError(error)
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
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Link onClick={handleProfileClick}>{name}</Link> <Link onClick={handleFavPostsClick}>Favs</Link> <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>

        {view === 'profile' && <Profile />}

        {(view === null || view === 'new-post') && <Posts loadPosts={logic.retrievePosts} stamp={stamp} onError={props.onError} />}

        {view === 'favs' && <Posts loadPosts={logic.retrieveFavPosts} onError={props.onError} />}

        <footer className="footer">
            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} onError={props.onError} />}

            {view !== 'new-post' && <Button onClick={handleNewPostClick}>+</Button>}
        </footer>
    </div>
}

export default Home