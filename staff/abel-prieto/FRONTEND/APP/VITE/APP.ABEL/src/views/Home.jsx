import logic from "../logic"
import { refreshPosts } from "../utils/refreshPosts"

import { Profile, Newpost, Posts } from "../components"

import { Button, Link } from "../librery"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect

// HOME

function Home(props) {
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
                <Button onClick={handleNewPostClick}>+</Button> <Link href="" onClick={handleProfileClick}>{name}</Link> <Button onClick={handleFavsPostsClick}>Favs</Button> <Button onClick={handleLogoutClick}>Logout ❌</Button>
            </div>
        </header>

        {view === 'profile' && <Profile onClick={handleProfileClick} />}

        {view === 'new-post' && <Newpost onClick={handleNewPostClick} setPosts={setPosts} setView={setView} />}
        {/* Metemos setPosts y setView como props para poder manerajarlas en el componente 'Newpost' */}

        {view !== 'profile' && view !== 'favs' && posts !== null && <div className='container'>
            {posts.map(post => <Posts key={post.id} post={post} setPosts={setPosts} setFavs={setFavs} view={view} />)}
        </div>}

        {view === 'favs' && <div className="container">
            <h1>⭐ All your favorite posts ⭐</h1>
            {favs.map(post => <Posts key={post.id} post={post} setPosts={setPosts} setFavs={setFavs} view={view} />)}
        </div>}
    </div >
}

export default Home