import React from 'react'
import { useUser } from '../hooks/UserContext'
import Product from './Product'
import logic from '../logic'

export default function Cart({ cartItems, onSuccess }) {
    const { isLoggedIn } = useUser()

    const handleIncrement = (productId) => {
        try {
            logic.updateCartItemQuantity(productId, cartItems._id, 1)
                .then(() => onSuccess())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDecrement = (productId) => {
        try {
            logic.updateCartItemQuantity(productId, cartItems._id, -1)
                .then(() => onSuccess())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteOrder = () => {
        try {
            logic.deleteOrder(cartItems._id)
                .then(() => {
                    onSuccess()
                    alert('Ha realizado su compra con éxito!')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2 className='fav-title'>Tu carrito de compras</h2>
                    {cartItems && cartItems.products && cartItems.products.length > 0 ? (
                        <div className="products">
                            {cartItems.products.map(product => (
                                <div key={product.product._id}>
                                    <Product {...product.product} isCartView={true} onSuccess={onSuccess} />
                                    <div className="quantity-controls">
                                        <button onClick={() => handleDecrement(product.product._id)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => handleIncrement(product.product._id)}>+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No tienes ningun artículo en el carro. A que esperas!</p>
                    )}
                    {cartItems && cartItems.products && cartItems.products.length ? (
                        <div>
                            <button className='finish-order' onClick={handleDeleteOrder}>Realizar compra</button>
                        </div>
                    ) : null}
                </div>
            ) : (
                <h1 className='fav-title'>Inicia sesión para ver tu carrito</h1>
            )}
        </div>
    )
}