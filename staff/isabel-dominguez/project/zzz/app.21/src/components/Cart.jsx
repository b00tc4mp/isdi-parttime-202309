import React from 'react'
import { useUser } from '../hooks/UserContext'
import Product from './Product'
import logic from '../logic'

export default function Cart({ cartItems }) {
    const { isLoggedIn } = useUser()
    console.log(cartItems)

    const handleUpdateQuantity = (productId, quantityDelta) => { //TRAER LA FUNCIÓN A LA APP
        // Lógica para actualizar la cantidad de un producto en el carrito
        logic.updateCartItemQuantity(productId, cartItems._id, cartItems.user, quantityDelta)
            // .then(() => { Poner la función de update })
            .catch(error => console.error(error))
    }

    const handleIncrement = (productId) => {
        handleUpdateQuantity(productId, 1)
    }

    const handleDecrement = (productId) => {
        handleUpdateQuantity(productId, -1)
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2 className='fav-title'>Tu carrito de compras</h2>
                    {cartItems.products.length > 0 ? (
                        <div className="products">
                            {cartItems.products.map(product => (
                                <div key={product.id}>
                                    <Product {...product.product} isCartView={true} />
                                    <div className="quantity-controls">
                                        <button onClick={() => handleDecrement(product.id)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => handleIncrement(product.id)}>+</button>
                                    </div>
                                </div>
                            ))}
                        </div> //ENVOLVER DENTRO DE OTRO DIV Y EN EL DIV ESE EL BUTTON
                    ) : (
                        <p className='fav-title'>Tu carrito está vacío</p>
                    )}
                </div>
            ) : (
                <h1 className='fav-title'>Inicia sesión para ver tu carrito</h1>
            )}
        </div>
    )
}






// const handleDeleteOrder = () => {
//     // Lógica para eliminar la orden del carrito
//     deleteOrder(orderId)
//         .then(() => {
//             // Actualizar la lista de productos del carrito después de eliminar la orden logica deleteOrder
//             // Debes implementar esto según la estructura de tu backend
//         })
//         .catch(error => console.error(error))
// }
