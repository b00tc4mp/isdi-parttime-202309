import React from "react"
import logic from "../logic"
import casaIcono from "../icons/houseIcon.png"
import lupa from "../icons/lupa.png"
import addPost from "../icons/añadir.png"
import settings from "../icons/settings.png"




import { Button, Form, Link, Field, Container } from '../library'
import { Posts, NewPost, Profile } from "../components"

function Home(props) {
    console.log('Home')

    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [stamp, setStamp] = React.useState(null)
  //  const [favs, setFavs] = React.useState(null)



    React.useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            logic.retrieveUser((error, user) => {
                console.log('User retrieved')
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
                props.onError(error)
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



    return <div>
        <header className="header">
            <div className="header-content">


                <Link onClick={handleFavPostsClick}>Favs</Link>

                <Button onClick={handleLogoutClick}>Logout</Button>
            </div>

        </header>

        {view === 'profile' && <Profile onCancel={handleChangeProfileCancel} onChangeEmailSubmit={handleChangeEmailSubmit} onError={props.onError} onChangePasswordSubmit={handleChangePasswordSubmit} />}

        {(view === null || view === 'new-post') && <Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} onError={props.onError}/>}

        {view === 'favs' && <Posts loadPosts={logic.retrieveFavPosts.bind(logic)} onError={props.onError} />}

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
                {/*name*/}
                <img className="icons" src={settings} />
            </Link>
        </footer>
    </div >
}

export default Home