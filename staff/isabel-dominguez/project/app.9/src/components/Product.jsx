import React from 'react'

export default function Product({ name, image, price }) {
    const handleClickAddToCart = () => {
        console.log(`Producto ${name} agregado al carrito`)
    }

    const handleDetailsClick = () => {
        console.log(`Detalles del producto ${name}`)
    }

    return (
        <div className="product">
            <h2>{name}</h2>
            <img src={image} />
            <p>Precio: {price}</p>
            <button className="cart-button" onClick={handleClickAddToCart}>🛒</button>
            <button className="details-button" onClick={handleDetailsClick}>Ver detalles</button>
        </div>
    )
}