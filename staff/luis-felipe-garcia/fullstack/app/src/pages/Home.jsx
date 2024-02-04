import React from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

import logic from "../logic"
import casaIcono from "../icons/houseIcon.png"
import lupa from "../icons/lupa.png"
import addPost from "../icons/añadir.png"
import settings from "../icons/settings.png"




import { Button, Form, Link, Field, Container } from '../library'
import { Posts, NewPost, Profile, UserPosts } from "../components"

import { useContext } from '../hooks'

function Home(props) {
    console.log('Home')

    const contextApp = useContext()

    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [stamp, setStamp] = React.useState(null)
    //  const [favs, setFavs] = React.useState(null)

    const navigate = useNavigate()
    const location = useLocation()

    React.useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            logic.retrieveUser((error, user) => {
                console.log('User retrieved')
                if (error) {
                    contextApp.handleError(error)
                    return
                }
                setName(user.name)
            })
        } catch (error) {
            contextApp.handleError(error)

        }
    }, [])

    function handleHomeClick(event) {
        event.preventDefault()
        navigate('/')
    }

    function handleProfileClick(event) {
        event.preventDefault()
        navigate('/profile')
    }

    function handleFavPostsClick(event) {
        event.preventDefault()
        navigate('/favs')
    }

    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                contextApp.handleError(error)
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
        navigate('/')
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



    return <div>
        <header className="header">
            <div className="header-content">


                <Link onClick={handleFavPostsClick}>Favs</Link>

                <Button onClick={handleLogoutClick}>Logout</Button>
            </div>

        </header>

        <Routes>
            <Route path='/profile' element={<Profile onCancel={handleChangeProfileCancel} onChangeEmailSubmit={handleChangeEmailSubmit} onError={props.onError} onChangePasswordSubmit={handleChangePasswordSubmit} />} />
            <Route path='favs' element={<Posts loadPosts={logic.retrieveFavPosts} onError={props.onError} />} />
            <Route path='/users/:userId' element={<UserPosts />} />
            <Route path='/' element={<Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} onError={props.onError} />} />
        </Routes>


        <footer className="footer">

            <h1><Link onClick={handleHomeClick}>
                <img className="icons" src={casaIcono} />
            </Link></h1>
            <img className="icons" src={lupa}></img>
            {view !== 'new-post' && <Button id="new-post-button" onClick={handleNewPostClick}>
                <img className="icons" src={addPost} />
            </Button>}
            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onError={props.onError} onCancel={handleNewPostCancel} />}
            <Link className="text-menu" onClick={handleProfileClick}>
                {name}
                <img className="icons" src={settings} />
            </Link>
        </footer>
    </div >
}

export default Home