import { useState, useEffect } from "react";
//son hooks de React para gestionar el estado del componente y efecto secundarios, respectivamente

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
//son parte de React Router y se utilizan para la navegacion y la gestion de rutas

import { Profile, Metronome } from '../components'

import logic from '../logic'

import { Button, Form, Link, Field } from '../library'

import { useContext } from "../hooks";




function Home(props) {
    console.log('Home')

    const session = useContext()

    const [name, setName] = useState(null)
    //permiten navegar a diferentes rutas dentro de la aplicacion y acceder a la ruta actual, respectivamente
    const navigate = useNavigate()



    useEffect(() => {
        console.log('Home -> effect (name)')


        try {
            logic.retrieveUser()
                .then(user => setName(user.name))
                .catch(error => session.handleError(error))

        } catch (error) {

            session.handleError(error)
        }



    }, []) // es un array de dependencias, indica a React que variables o propiedades deben cambiar
    //para que el efecto secundario se vuelva a ejecutar. Si el array esta vacio [], 
    //significa que solo se ejecutará una vez 

    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {

                session.handleError(error)
                return
            }
        })

        props.onLogoutClick()
    }

    function handleProfileClick(event) {
        event.preventDefault()

        navigate('/profile')
    }

    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    function handleSamplesClick(event) {
        event.preventDefault()

        navigate('/samples')
    }

    function handleMetronomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    return <div>

        <footer className="footer">

            <h1><Link onClick={handleMetronomeClick}>Synqple app</Link></h1>

            <Link>Samples</Link>

            <Link onClick={handleProfileClick}>Settings</Link>

            <Button className="button" onClick={handleLogoutClick}>Logout</Button>

        </footer>


        <Routes>

            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Metronome />} />


        </Routes>

    </div>

}

export default Home


// <Link onClick={handleSampleClick}>Samples</Link>
//<Route path="/samples" element={<Samples />} />