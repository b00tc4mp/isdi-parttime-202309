import React, { useState, useEffect } from 'react'
import logic from '../logic'


export default function Product({ id, name, image, price, description, onFavSuccess, favProducts }) {

    const [showDetails, setShowDetails] = useState(false)
    const [isProductFav, setIsProductFav] = useState(false)


    useEffect(() => {
        const idFavs = favProducts.filter(_product => {
            return _product._id === id
        })

        idFavs.length > 0 ? setIsProductFav(true) : setIsProductFav(false)

    }, [favProducts])


    const handleClickAddToCart = () => {
        console.log(`Producto ${name} agregado al carrito`)
    }

    const handleDetailsClick = () => {
        console.log(`Detalles del producto ${name}`)
        setShowDetails(!showDetails)
    }

    const handleToggleFavClick = () => {
        try {
            logic.toggleFavProduct(id)
                .then(() => {
                    onFavSuccess()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="product">
            <h2>{name}</h2>
            <img className='product-image' src={image} alt={name} />
            <p>Precio: {price}</p>
            <button className="cart-button" onClick={handleClickAddToCart}>🛍️</button>
            <button className="details-button" onClick={handleDetailsClick}>Ver detalles</button>
            <button className="favs-button" onClick={handleToggleFavClick}>{isProductFav ? "🩷" : "💟"}</button>
            {showDetails && (
                <div className="details-overlay">
                    <div className="details-content">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <button className="close-button" onClick={handleDetailsClick}>Ocultar detalles</button>
                    </div>
                </div>
            )}
        </div>
    )
}