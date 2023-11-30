import logic from "../logic"
import { refreshPosts } from "../utils/refreshPosts"

import { Profile, Newpost } from "../components"
import Post2 from "../components/Post2"
import { Button, Link } from "../librery"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect

// HOME

function Home2(props) {
    console.log('Home')

    // STATE VIEWS's (Home)
    const [view, setView] = useState(null)

    // STATE NAME (Profile) 
    const [name, setName] = useState(null)

    // STATE POSTS - FAVS
    const [posts, setPosts] = useState(null)
    const [favs, setFavs] = useState(null)

    // EFFECT - NAME 
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

    // EFFECT - VIEW POSTS
    useEffect(() => {
        console.log('Home -> Effect (Refresh posts)')

        refreshPosts(view, setPosts, setFavs)
    }, [view]) // Metemos [view] como arreglo de dependecia; se ejecutará cada vez que view cambie

    // HOME BUTTON
    function handleHomeClick(event) {
        event.preventDefault()

        window.scrollTo(0, 0)

        setView(null)
        // Cambiamos la vista a 'null' - home
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

    // FAVS BUTTON 
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

    // TEMPLATE
    return <div className="home-view">

        <header className="home-header">
            <h1><Link href="" onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Link href="" onClick={handleProfileClick}>{name}</Link> <Button onClick={handleFavsPostsClick}>Favs</Button> <Button onClick={handleLogoutClick}>Logout ❌</Button>
            </div>
        </header>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {view === 'profile' && <Profile onClick={handleProfileClick} />}

        {view === 'new-post' && <Newpost onClick={handleNewPostClick} setPosts={setPosts} setView={setView} />}
        {/* Metemos setPosts y setView como props para poder manerajarlas en el componente 'Newpost' */}

        {view !== 'profile' && view !== 'favs' && posts !== null && <Post2 posts={posts} favs={favs} setPosts={setPosts} setFavs={setFavs} view={view} />}

        {view === 'favs' && <Post2 posts={posts} favs={favs} setPosts={setPosts} setFavs={setFavs} view={view} setView={setView} />}

        <br></br>
        <br></br>
        <br></br>

        <footer>
            <div className="footer">
                <Button onClick={handleNewPostClick}>+</Button>
            </div>
        </footer>
    </div >
}

export default Home2