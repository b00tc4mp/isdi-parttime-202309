import React from 'react'
import { useState } from 'react'

import RawMaterial from '../components/RawMaterial'
import Packings from '../components/Packings'
import Utensils from '../components/Utensils'
import Login from '../components/Login'


export default function Home() {

    const [view, setView] = useState('raw-material')
    const [name, setName] = useState(null)

    const handleLogout = () => {

        setName(null)
    }

    const handleHomeClick = (event) => {
        event.preventDefault()

        setView('raw-material')
    }

    const handleClickRawMaterial = (event) => {
        event.preventDefault()

        setView('raw-material')
    }

    const handleClickPackings = (event) => {
        event.preventDefault()

        setView('packings')
    }

    const handleClickUtensils = (event) => {
        event.preventDefault()

        setView('utensils')
    }

    const handleClickRecipes = (event) => {
        event.preventDefault()

        console.log('Se hizo clic en el apartado RECETAS')
    }

    const handleClickUserIcon = (event) => {
        event.preventDefault()

        setView('user-icon')
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
                    <h1><a className="home-link" href="" onClick={handleHomeClick}>Maketics</a></h1>
                    <div className="search-container">
                        <input className="search-input" type="text" placeholder="Buscar..." />
                        <button className="search-button" type="submit">Buscar</button>
                    </div>
                </div>
            </header>

            <section>
                <div className="first-section">
                    <h2><a className="raw-material" href="#" onClick={handleClickRawMaterial}>MATERIA PRIMA</a></h2>
                    <h2><a className="packings" href="#" onClick={handleClickPackings}>ENVASES</a></h2>
                    <h2><a className="utensils" href="#" onClick={handleClickUtensils}>UTENSILIOS</a></h2>
                    <h2><a className="recipes" href="#" onClick={handleClickRecipes}>RECETAS</a></h2>

                    <div className="welcome-user">
                        {name ? (<div>Bienvenido, {name}! <button onClick={handleLogout}>Cerrar sesión</button></div>) : (<div>Accede | Regístrate 👉</div>)}
                    </div>

                    <div className="icons">
                        <button className="user-icon" onClick={handleClickUserIcon}><img src="images/icons8-user-64.png" /></button>
                        <button className="heart-icon" onClick={handleClickHeartIcon}><img src="images/icons8-heart-50.png" /></button>
                        <button className="cart-icon" onClick={handleClickCartIcon}><img src="images/icons8-shopping-trolley-64.png" /></button>
                    </div>
                </div>
            </section>

            <section>
                <div className="second-section">
                    <h2>Encuentra los mejores productos al mejor precio</h2>
                </div>
            </section>

            {view === 'raw-material' && <RawMaterial />}
            {view === 'packings' && <Packings />}
            {view === 'utensils' && <Utensils />}
            {view === 'user-icon' && <Login />}
        </>
    )
}