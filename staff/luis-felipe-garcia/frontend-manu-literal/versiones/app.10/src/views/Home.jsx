import React from "react"
import logic from "../logic"


import { Button, Form, Link, Field, Container } from '../library'
import { Posts, NewPost, Profile } from "../components"

function Home(props) {
    console.log('Home')

    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [stamp, setStamp] = React.useState(null)
    const [favs, setFavs] = React.useState(null)



    React.useEffect(() => {
        console.log('Home -> effect (name')

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

    function handleHomeClick(event) {
        event.preventDefault()
        setView(null)
    }

    function handleProfileClick(event) {
        event.preventDefault()
        setView('profile')
    }

    function handleFavPostsClick(event) {
        event.preventDefault()
        setView('favs')
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

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostPublish() {
        setStamp(Date.now())
        setView(null)
        window.scrollTo(0, 0)
    }

    function handleNewPostCancel() {
        setView(null)
    }

    function handleChangeProfileCancel() {
        setView(null)
    }

    function handleChangeEmailSubmit() {

        setView(null)
    }

    function handleChangePasswordSubmit() {

        setView(null)

    }






    /* function handleFavPostsClick(event) {
         event.preventDefault()
 
         try {
             logic.retrieveFavPosts((error, favs) => {
                 if (error) {
                     alert(error.message)
                     return
                 }
                 favs.reverse()
                 setFavs(favs)
                 setView('favs')
             })
         } catch (error) {
             alert(error.message)
         }
     }*/

    return <div>
        <header className="home-header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <div className="logout">
                <Link onClick={handleProfileClick}>{name}</Link>
                &nbsp;
                <Link onClick={handleFavPostsClick}>Favs</Link>
                &nbsp;
                <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>

        {view === 'profile' && <Profile onCancel={handleChangeProfileCancel} onChangeEmailSubmit={handleChangeEmailSubmit} onChangePasswordSubmit={handleChangePasswordSubmit} />}

        {(view === null || view === 'new-post') && <Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} />}

        {view === 'favs' && <Posts loadPosts={logic.retrieveFavPosts.bind(logic)} />}

        <footer className="footer">
            {view !== 'new-post' && <Button id="new-post-button" onClick={handleNewPostClick}>+</Button>}
            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} />}
        </footer>
    </div >
}

export default Home