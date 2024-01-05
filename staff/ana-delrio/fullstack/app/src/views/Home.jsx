import { useState, useEffect } from 'react'
import logic from '../logic'
import { Button, Link } from '../library'
import { Posts, Profile, NewPost } from '../components'

// The Home component is one of the views rendered by the App component based on the current state (view === 'home')


function Home(props) {
    console.log('Home')

    // State variables (view, name, stamp) are declared using useState
    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [stamp, setStamp] = useState(null)

    // Function to handle logout
    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)

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
                    alert(error.message)

                    return
                }

                setName(user.name)
            })

        } catch (error) {
            alert(error.message)
        }
    }, [])

    // Function to handle clicking on the profile link
    function handleProfileClick(event) {
        event.preventDefault()

        setView('profile')
    }

    // Function to handle clicking on the Home link
    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
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
        // Set the 'view' state to null, changing the current view to null
        setView(null)

        // Scroll the window to the top of the page
        window.scrollTo(0, 0)

    }

    // Function to handle clicking on the Favs link
    function handleFavPostsClick(event) {
        event.preventDefault()

        setView('favs')
    }


    return <div>
        {/* To apply CSS classes to a component in React we use the prop className */}
        <header className="header">
            <h1><Link href="" onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Link href="" onClick={handleProfileClick}>{name}</Link> <Link href="" onClick={handleFavPostsClick}>Favs</Link> <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>

        {view === 'profile' && <Profile />}

        {/* lo que estamos enviando es la función, el logic es solo para traer el contexto */}
        {(view === null || view === 'new-post') && <Posts loadPost={logic.retrievePosts.bind(logic)} stamp={stamp} />}

        {view === 'favs' && <Posts loadPost={logic.retrieveFavPosts.bind(logic)} />}


        <footer className="footer">

            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleCancelNewPostClick} />}

            {view !== "new-post" && <Button onClick={handleNewPostClick}>+</Button>}
        </footer>
    </div>
}

export default Home

