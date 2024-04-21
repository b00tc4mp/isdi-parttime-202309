import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'

import logic from '../logic'
import RawMaterial from '../components/RawMaterial'
import Packings from '../components/Packings'
import Utensils from '../components/Utensils'
import Login from '../components/Login'
import Register from '../components/Register'


export default function Home() {
    console.log('El componente Home se está renderizando.')

    const [name, setName] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            console.log('isLoggedIn is true')
            try {
                logic.retrieveUser()
                    .then(user => {
                        console.log('Userr:', user)
                        setName(user.name)
                    })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        }
    }, [isLoggedIn])

    function handleLogout() {
        logic.logoutUser()
            .then(() => { setName(null) })
            .catch(error => alert(error.message))
    }

    const handleHomeClick = (event) => {
        event.preventDefault()

        navigate('/raw-material')
    }

    const handleClickRawMaterial = (event) => {
        event.preventDefault()

        navigate('/raw-material')
    }

    const handleClickPackings = (event) => {
        event.preventDefault()

        navigate('/packings')
    }

    const handleClickUtensils = (event) => {
        event.preventDefault()

        navigate('/utensils')
    }

    const handleClickRecipes = (event) => {
        event.preventDefault()

        console.log('Se hizo clic en el apartado RECETAS')
    }

    const handleClickUserIcon = (event) => {
        event.preventDefault()

        navigate('/user-icon')
    }

    const handleClickHeartIcon = (event) => {
        event.preventDefault()

        console.log('Se hizo clic en el botón de corazón')
    }

    const handleClickCartIcon = (event) => {
        event.preventDefault()

        console.log('Se hizo clic en el botón del carrito')
    }

    return (
        <>
            <header>
                <div className="home-header">
                    <h1><Link className="home-link" onClick={handleHomeClick}>Maketics</Link></h1>
                    <div className="search-container">
                        <input className="search-input" type="text" placeholder="Buscar..." />
                        <button className="search-button" type="submit">Buscar</button>
                    </div>
                </div>
            </header>

            <section>
                <div className="first-section">
                    <h2><Link className="raw-material" onClick={handleClickRawMaterial}>MATERIA PRIMA</Link></h2>
                    <h2><Link className="packings" onClick={handleClickPackings}>ENVASES</Link></h2>
                    <h2><Link className="utensils" onClick={handleClickUtensils}>UTENSILIOS</Link></h2>
                    <h2><Link className="recipes" onClick={handleClickRecipes}>RECETAS</Link></h2>

                    <div className="welcome-user">
                        {name ? (<div>Bienvenido, {name}! <button onClick={handleLogout}>Cerrar sesión</button></div>) : (<div>Accede | Regístrate 👉</div>)}
                    </div>

                    <div className="icons">
                        <Link className="user-icon" onClick={handleClickUserIcon}><img src="images/icons8-user-64.png" /></Link>
                        <Link className="heart-icon" onClick={handleClickHeartIcon}><img src="images/icons8-heart-50.png" /></Link>
                        <Link className="cart-icon" onClick={handleClickCartIcon}><img src="images/icons8-shopping-trolley-64.png" /></Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="second-section">
                    <h2>Encuentra los mejores productos al mejor precio</h2>
                </div>
            </section>

            <Routes>
                <Route path="/raw-material" element={<RawMaterial />} />
                <Route path="/packings" element={<Packings />} />
                <Route path="/utensils" element={<Utensils />} />
                <Route path="/user-icon" element={<Login />} />
                <Route path="/user-icon/register" element={<Register onSuccess={handleClickUserIcon} />} />
            </Routes>
        </>
    )
}
