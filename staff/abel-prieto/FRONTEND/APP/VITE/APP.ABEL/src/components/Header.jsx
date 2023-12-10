import logic from "../logic"

// HEADER
function Header(props) {
    console.log('Home -> Header')

    // STATE & EFFECT - NAME 
    useEffect(() => {
        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.setName(user.name)
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

    // LIST FAVS POSTS 
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

    return <>
        <header className="home-header">
            <h1><Link href="" onClick={handleHomeClick}>Home</Link></h1>

            <div>
                <Button onClick={handleNewPostClick}>+</Button> <Link href="" onClick={handleProfileClick}>{props.name}</Link> <Button onClick={handleFavsPostsClick}>Favs</Button> <Button onClick={handleLogoutClick}>Logout ❌</Button>
            </div>
        </header>
    </>
}

export default Header