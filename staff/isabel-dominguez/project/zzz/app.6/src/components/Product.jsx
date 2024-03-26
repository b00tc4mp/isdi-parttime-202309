import React from 'react'

export default function Product({ image, productName, price }) {
    const handleClickAddToCart = () => {
        console.log(`Producto ${productName} agregado al carrito`)
    }

    const handleDetailsClick = () => {
        console.log(`Detalles del producto ${productName}`)
    }

    return (
        <div className="product">
            <img src={image} />
            <h3>{productName}</h3>
            <p>Precio: {price}</p>
            <button className="cart-button" onClick={handleClickAddToCart}>🛒</button>
            <button className="details-button" onClick={handleDetailsClick}>Ver detalles</button>
        </div>
    )
}