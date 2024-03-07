import React, { useState } from 'react'

export default function Product({ name, image, price, description }) {
    const [showDetails, setShowDetails] = useState(false)

    const handleClickAddToCart = () => {
        console.log(`Producto ${name} agregado al carrito`)
    }

    const handleDetailsClick = () => {
        console.log(`Detalles del producto ${name}`)
        setShowDetails(!showDetails)
    }

    return (
        <div className="product">
            <h2>{name}</h2>
            <img className='product-image' src={image} alt={name} />
            <p>Precio: {price}</p>
            <button className="cart-button" onClick={handleClickAddToCart}>🛒</button>
            <button className="details-button" onClick={handleDetailsClick}>Ver detalles</button>
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