import logic from "../logic"

import { Profile, NewPost, Posts, } from "../components"

import { Button, Link } from "../librery"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect

// HOME

function Home(props) {
    console.log('Home')

    // STATE VIEWS's
    const [view, setView] = useState(null)

    // STATE NAME (Profile) & ID (Posts-Favs)
    const [name, setName] = useState(null)

    // STATE STAMP
    const [stamp, setStamp] = useState(null)

    // STATE & EFFECT - NAME & ID
    useEffect(() => {
        console.log('Home -> Effect (NAME)')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setName(user.name)
                // Guardamos en STATE el user para usar el "NAME"
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

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

        window.scrollTo(0, 0)
    }

    // LIST FAVS POSTS 
    function handleFavsPostsClick() {
        setView('favs')
    }

    // NEW POST BUTTON
    function handleNewPostClick() {
        setView('new-post')
        // Cambiamos la vista a 'new-post'

        window.scrollTo(0, 0)
    }

    // PUBLISH NEW POST
    function handleNewPostPublish() {
        setStamp(Date.now())
        setView(null)

    }

    // CANCEL NEW POST
    function handleCancelNewPostClick() {

        setView('null')
        // Cambiamos la vista a 'null' - home
    }

    // TEMPLATE
    return <div>

        <header className="home-header">
            <h1><Link href="" onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Link href="" onClick={handleProfileClick}>{name}</Link> <Button onClick={handleFavsPostsClick}>Favs</Button> <Button onClick={handleLogoutClick}>Logout ❌</Button>
            </div>
        </header>

        <div className="home-view">
            {view === 'profile' && <Profile onClick={handleProfileClick} />}

            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleCancelNewPostClick} />}

            {/*view !== 'profile' && view !== 'favs' && <Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} />*/}

            {view === 'favs' && <Posts loadPosts={logic.retrieveFavUserPosts.bind(logic)} />}

            <br></br>
            <br></br>
            <br></br>

            <footer className="footer">
                {view !== 'new-post' && <Button onClick={handleNewPostClick}>+</Button>}
            </footer>
        </div>

    </div >
}

export default Home