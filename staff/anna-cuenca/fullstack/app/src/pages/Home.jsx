import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import logic from '../logic'

import { useContext } from '../hooks'

import { Button, Form, Link, Field } from '../library'
import { Posts, Profile, NewPost, UserPosts } from '../components'


function Home(props) {
    console.log('Home')
    const context = useContext()

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [stamp, setStamp] = useState(null)

    // están declaradas en null porque es el estado inicial

    const navigate = useNavigate()
    const location = useLocation()



    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                //alert(error.message)
                context.handleError(error)
                return
            }
        })

        props.onLogoutClick()
    }

    //use.Effect es un hook de React que permite realizar efectos secundarios en componentes funcionales
    // () => { ... } es el cuerpo de la función que representa el efecto secundario. Este código se
    //ejecuta después de que el componente se haya renderizaddo en el DOM
    useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    //alert(error.message)
                    context.handleError(error)
                    return
                }
                setName(user.name)
            })

        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }, []) //es un array de dependencias, indica a React qué variables o propiedades deben cambiar
    // para que el efecto secundario se vuelva a ejecutar. Si el array está vacío [] significa
    // que sólo se ejecutará una vez.

    function handleProfileClick(event) {
        event.preventDefault()

        //setView('profile')
        navigate('/profile')
    }

    function handleHomeClick(event) {
        event.preventDefault()
        //setView(null)
        navigate('/')
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancel() {
        setView(null)
    }


    function handleNewPostPublish() {
        setStamp(Date.now())
        setView(null)
        navigate('/')
        window.scrollTo(0, 0)
    }





    function handleFavPostsClick(event) {
        event.preventDefault()

        navigate('/favs')


        //setView('favs')

    }

    return <div>
        <header className="header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <div>

                <Link onClick={handleProfileClick}>{name}</Link>
                <Link onClick={handleFavPostsClick}>Favs</Link>


                <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>


        {/* {view === 'profile' && <Profile onSuccess={() => setView(null)} />} */}

        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/favs" element={< Posts loadPosts={logic.retrieveFavPosts} onError={context.handleError} />} />
            <Route path="/users/:userId" element={<UserPosts />} />
            <Route path="/" element={< Posts loadPosts={logic.retrievePosts} stamp={stamp} onError={context.handleError} />} />
        </Routes>


        {/* {(view === null || view === 'new-post') && < Posts loadPosts={logic.retrievePosts} stamp={stamp} onError={context.handleError} />} */}



        {/* {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}

        {/* 
        {view === 'favs' && < Posts loadPosts={logic.retrieveFavPosts} onError={context.handleError} />} */}



        {/* {favs.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}






        <footer className="footer">

            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} onError={context.handleError} />}
            {view !== 'new-post' && location.pathname !== '/profile' && location.pathname !== '/favs' && <Button onClick={handleNewPostClick}>+</Button>}

        </footer>

    </div >

}

export default Home