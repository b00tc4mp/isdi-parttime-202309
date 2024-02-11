import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import logic from '../logic'

import { Button, Link } from '../library'
import { Posts, Profile, NewPost, UserPosts } from '../components'

import { useContext } from '../hooks'

// The Home component is one of the views rendered by the App component based on the current state (view === 'home')


function Home(props) {
    console.log('Home')

    const context = useContext()

    // State variables (view, name, stamp) are declared using useState
    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [stamp, setStamp] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()

    // Function to handle logout
    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                context.handleError(error)

                return
            }
        })

        props.onLogoutClick()
    }

    // Effect to retrieve user name when the component mounts
    // this useEffect is used to retrieve user information (probably asynchronously) when the Home component is first mounted
    // After getting the user information, it updates the name state with the user's name
    useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    context.handleError(error)

                    return
                }

                setName(user.name)
            })

        } catch (error) {
            context.handleError(error)
        }
    }, [])

    // Function to handle clicking on the profile link
    function handleProfileClick(event) {
        event.preventDefault()

        navigate('/profile')
    }

    // Function to handle clicking on the Home link
    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')

    }

    // Function to handle clicking on the New Post link
    function handleNewPostClick() {
        setView('new-post')
    }

    // Function to handle canceling a new post
    function handleCancelNewPostClick() {

        setView(null)
    }
    // Function to handle publishing a new post
    function handleNewPostPublish(event) {
        // Date.now() returns the current time in milliseconds since 1 January 1970
        // setStamp updates the stamp status with this value, so stamp now contains the timestamp of the time the new post was published
        setStamp(Date.now())
        setView(null)
        navigate('/')

        // Scroll the window to the top of the page
        window.scrollTo(0, 0)

    }

    // Function to handle clicking on the Favs link
    function handleFavPostsClick(event) {
        event.preventDefault()

        navigate('/favs')
    }


    return <div>
        {/* To apply CSS classes to a component in React we use the prop className */}
        <header className="header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Link onClick={handleProfileClick}>{name}</Link> <Link onClick={handleFavPostsClick}>Favs</Link> <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>

        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/favs" element={<Posts loadPosts={logic.retrieveFavPosts} />} />
            <Route path="/users/:userId" element={<UserPosts />} />
            <Route path="/" element={<Posts loadPosts={logic.retrievePosts} stamp={stamp} />} />
        </Routes>

        {/* {view === 'profile' && <Profile />}
        {/* lo que estamos enviando es la función, el logic es solo para traer el contexto */}
        {/* {(view === null || view === 'new-post') && <Posts loadPost={logic.retrievePosts} stamp={stamp} onError={props.onError} />}
        {view === 'favs' && <Posts loadPost={logic.retrieveFavPosts.bind} onError={props.onError} />} */}

        <footer className="footer">

            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleCancelNewPostClick} onError={props.onError} />}

            {view !== 'new-post' && location.pathname !== '/profile' && location.pathname !== '/favs' && <Button onClick={handleNewPostClick}>+</Button>}
        </footer>
    </div>
}

export default Home

