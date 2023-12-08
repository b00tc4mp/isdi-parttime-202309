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
        window.scrollTo(0,0)
    }
    
    function handleNewPostCancel() {
        setView(null)
    }

    function handleChangeEmailSubmit(event) {
        event.preventDefault()
        const newEmailInput = event.target.querySelector('#new-email-input')
        const newEmailConfirmInput = event.target.querySelector('#new-email-confirm-input')
        const passwordInput = event.target.querySelector('#password-input')

        const newEmail = newEmailInput.value
        const newEmailConfirm = newEmailConfirmInput.value
        const password = passwordInput.value

        try {
            logic.changeUserEmail(newEmail, newEmailConfirm, password)

            alert('E-mail changed')

            setView(null)


        } catch (error) {
            alert(error.message)

        }
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()
        const passwordInput = event.target.querySelector('#password-input')
        const newPasswordInput = event.target.querySelector('#new-password-input')
        const newPasswordConfirmInput = event.target.querySelector('#new-password-confirm-input')

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const newPasswordConfirm = newPasswordConfirmInput.value

        try {
            logic.changeUserPassword(newPassword, newPasswordConfirm, password)

            alert('Password changed')

            event.target.reset()
            setView(null)
        } catch (error) {
            alert(error.message)
        }
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

        {view === 'profile' && <Profile onChangeEmailSubmit={handleChangeEmailSubmit} onChangePasswordSubmit={handleChangePasswordSubmit} />}

        {(view === null || view === 'new-post') && <Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} />}

        {view === 'favs'  && <Posts loadPosts={logic.retrieveFavPosts.bind(logic)} />}
        
        <footer className="footer">
            {view !== 'new-post' && <Button id="new-post-button" onClick={handleNewPostClick}>+</Button>}
            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} />}
        </footer>
    </div >
}

export default Home