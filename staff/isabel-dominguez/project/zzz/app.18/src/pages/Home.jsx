import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import { useUser } from "../hooks/UserContext"

import logic from '../logic'
import { Login, Packings, RawMaterial, Register, Utensils, Recipes, Favorites } from '../components'


export default function Home() {

    const [name, setName] = useState(null)
    const [favProducts, setFavProducts] = useState([])

    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useUser()


    const refreshProducts = () => {
        try {
            Promise.all([
                logic.retrieveProductsByType('RawMaterial'),
                logic.retrieveProductsByType('Packings'),
                logic.retrieveProductsByType('Utensils')
            ])
                .then(() => {
                    logic.retrieveFavs()
                        .then((favs) => { setFavProducts(favs) })
                        .catch(error => { alert(error.message) })
                })
                .catch(error => alert(error.message));
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        if (isLoggedIn) {

            try {
                logic.retrieveUser()
                    .then(user => { setName(user.name) })
                    .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }

            try {
                logic.retrieveFavs()
                    .then((favs) => { setFavProducts(favs) })
                    .catch(error => { alert(error.message) })
            } catch (error) {
                console.error(error)
            }
        }
    }, [isLoggedIn])


    function handleLogout() {
        logic.logoutUser()
            .then(() => {
                sessionStorage.clear()
                setName(null)
                setIsLoggedIn(false)
                setFavProducts([])
            })
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

        navigate('/recipes')
    }

    const handleClickUserIcon = (event) => {
        event.preventDefault()

        navigate('/user-icon')
    }

    const handleClickHeartIcon = (event) => {
        event.preventDefault()

        navigate('/favorites')
    }

    const handleClickCartIcon = (event) => {
        event.preventDefault()

        console.log('Se hizo clic en el botón del carrito')
    }

    return (
        <>
            <header>
                <div className="home-header">
                    <h1><Link className="home-link" onClick={handleHomeClick}>Maketics Shop</Link></h1>
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
                        {name ? (<div>Bienvenido, <i>{name}!</i> <button className='logout-button' onClick={handleLogout}>✖️</button></div>) : (<div>Accede | Regístrate 👉</div>)}
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
                <Route path="/raw-material" element={<RawMaterial favProducts={favProducts} onFavSuccess={refreshProducts} />} />
                <Route path="/packings" element={<Packings favProducts={favProducts} onFavSuccess={refreshProducts} />} />
                <Route path="/utensils" element={<Utensils favProducts={favProducts} onFavSuccess={refreshProducts} />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/make-up" element={<Recipes type='Make-up' />} />
                <Route path="/recipes/treatment" element={<Recipes type='Treatment' />} />
                <Route path="/recipes/hair" element={<Recipes type='Hair' />} />
                <Route path="/recipes/body" element={<Recipes type='Body' />} />
                <Route path="/recipes/fragrance" element={<Recipes type='Fragrance' />} />
                <Route path="/user-icon" element={<Login />} />
                <Route path="/user-icon/register" element={<Register onSuccess={handleClickUserIcon} />} />
                <Route path="/favorites" element={<Favorites favProducts={favProducts} onFavSuccess={refreshProducts} />} />
            </Routes>
        </>
    )
}


// Lo mismo que con las turas de recetas, los detalles de cada producto. recipes/fragances/recipeId
