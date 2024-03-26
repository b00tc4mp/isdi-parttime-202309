import React, { useState } from 'react'
import logic from '../logic'

export default function Product({ id, name, image, price, description, onFavSuccess }) {
    const [showDetails, setShowDetails] = useState(false)
    const [isFav, setIsFav] = useState(false)


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
                    setIsFav(!isFav)
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
            <button className="favs-button" onClick={handleToggleFavClick}>{isFav ? "🩷" : "💟"}</button>
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