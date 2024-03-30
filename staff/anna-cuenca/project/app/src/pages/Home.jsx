import { useState, useEffect } from 'react'
//son hooks de React para gestionar el estado del component y efectos secundarios, respectivamente
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
//son parte de React Router y se utilizan para la navegacion y la gestión de rutas
import logic from '../logic'

import { useContext } from '../hooks'


//como en App hemos envuelto 

import { Button, Form, Link, Field } from '../library'

import Profile from './Profile'
import Controller from './Controller'
import Tutorials from './Tutorials'
import Forum from './Forum'


function Home(props) {
    console.log('Home')
    const context = useContext()
    const { setUserRole } = context

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)

    const [role, setRole] = useState(null)
    const [stamp, setStamp] = useState(null)



    // permiten navegar a diferentes rutas dentro de la aplicación y acceder a la ruta actual, respectivamente
    const navigate = useNavigate()
    const location = useLocation()


    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {

                context.handleError(error)
                return
            }
        })

        props.onLogoutClick()
    }


    useEffect(() => {
        console.log('Home -> effect (name)')

        try {
            logic.retrieveUser()
                .then(user => {
                    setName(user.name)
                    console.log(user)
                    setRole(user.role)
                    context.setUserRole(user.role)
                    //context.userRole = user.role


                    console.log(context)


                })
                .catch(error => context.handleError(error))


        } catch (error) {

            context.handleError(error)
        }
    }, []) //es un array de dependencias, indica a React qué variables o propiedades deben cambiar
    // para que el efecto secundario se vuelva a ejecutar. Si el array está vacío [] significa
    // que sólo se ejecutará una vez.



    function handleProfileClick(event) {
        event.preventDefault()

        navigate('/profile')
    }

    function handleTutorialClick(event) {
        event.preventDefault()

        navigate('/tutorials')
    }

    function handleForumClick(event) {
        event.preventDefault()

        navigate('/forum')
        //si da tiempo crear la working page de Forum
    }

    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    function handleControllerClick(event) {
        event.preventDefault()

        navigate('/controller')
    }



    return (

        <div className="home-wrapper">
            <header className="header">
                <h1><Link onClick={handleHomeClick}>Home</Link></h1>


                <div>

                    <Link onClick={handleProfileClick}>{name}</Link>



                    <Button onClick={handleLogoutClick}>Logout</Button>
                </div>
            </header>

            <div className="home-container flex flex-col justify-between">


                {location.pathname === '/' && (
                    <>
                        <main>
                            <h2 className="h2-robotic">Welcome back, {name} </h2>
                            <img src="/ottoHome4.gif" alt="Descripción del GIF" />
                            <div className="home-button-container">
                                <button className="home-connect-button button" onClick={handleControllerClick}>Connect</button>
                            </div>
                            <div className="home-button-container">
                                <button className="home-tutorials-button button" onClick={handleTutorialClick}>Tutorials</button>
                            </div>

                            <div className="home-button-container">
                                <button className="home-forum-button button" onClick={handleForumClick}>Forum</button>
                            </div>
                        </main>
                    </>
                )}





                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/controller" element={<Controller />} />
                    <Route path="/tutorials" element={<Tutorials loadTutorials={logic.retrieveTutorials} stamp={stamp} />} />
                    <Route path="/forum" element={<Forum />} />
                    {/* <Route path="/favs" element={< Posts loadPosts={logic.retrieveFavPosts} onError={context.handleError} />} /> */}

                    {/* <Route path="/users/:userId" element={<UserPosts loadPosts={logic.retrieveUserPosts} stamp={stamp} onError={context.handleError} />} /> */}
                    {/* <Route path="/" element={< Posts loadPosts={logic.retrievePosts} stamp={stamp} onError={context.handleError} />} /> */}
                </Routes>

                {/* 
        <footer className="footer">

            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} onError={context.handleError} />}
            {view !== 'new-post' && location.pathname !== '/profile' && location.pathname !== '/favs' && <Button onClick={handleNewPostClick}>+</Button>}

        </footer> */}

            </div>

        </div >)


}

export default Home