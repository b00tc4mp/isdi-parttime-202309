import React, { useState, useEffect } from 'react'
import { useUser } from "../hooks/UserContext"
import logic from '../logic'


export default function Product({ id, name, image, price, description, onSuccess, favProducts, isCartView }) {

    const [showDetails, setShowDetails] = useState(false)
    const [isProductFav, setIsProductFav] = useState(false)

    const { isLoggedIn } = useUser()

    useEffect(() => {
        if (favProducts) {
            const isFav = favProducts.some(product => product.id === id && product.fav === true)
            setIsProductFav(isFav)
        }
    }, [favProducts, id])

    const handleAddToCart = () => {
        try {
            logic.addToCart(id)
                .then(() => {
                    onSuccess()
                    alert("Producto agregado al carrito correctamente")
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDetailsClick = () => {
        console.log(`Detalles del producto ${name}`)
        setShowDetails(!showDetails)
    }

    const handleToggleFavClick = () => {
        try {
            logic.toggleFavProduct(id)
                .then(() => onSuccess())
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
            {!isCartView && <>
                {isLoggedIn && <button className="cart-button" onClick={handleAddToCart}>🛍️</button>}
                <button className="details-button" onClick={handleDetailsClick}>Ver detalles</button>
                {isLoggedIn && <button className="favs-button" onClick={handleToggleFavClick}>{isProductFav ? "🩷" : "💟"}</button>}</>}
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