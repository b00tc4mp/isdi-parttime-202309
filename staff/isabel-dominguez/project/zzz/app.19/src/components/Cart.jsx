import React from 'react'
import { useUser } from '../hooks/UserContext'
import logic from '../logic'


export default function Cart() {
    const { isLoggedIn, userId } = useUser()
    const [cartItems, setCartItems] = useState([]) //Esto habrá que llevarlo a Home como los favorites

    useEffect(() => {
        // Obtener los productos del carrito cuando el usuario está autenticado Esto se puede meter en el mismo useEffect que los favs
        if (isLoggedIn) {
            // Lógica para obtener los productos del carrito usando el userId logica retrieveUserOrder
            // Debes implementar esto según la estructura de tu backend
        }
    }, [isLoggedIn, userId]);

    const handleAddToCart = (productId) => {
        // Lógica para añadir un producto al carrito
        addToCart(productId, userId)
            .then(() => {
                // Actualizar la lista de productos del carrito después de añadir un producto logica addToCart
                // Debes implementar esto según la estructura de tu backend
            })
            .catch(error => console.error(error));
    };

    const handleDeleteOrder = () => {
        // Lógica para eliminar la orden del carrito
        deleteOrder(orderId)
            .then(() => {
                // Actualizar la lista de productos del carrito después de eliminar la orden logica deleteOrder
                // Debes implementar esto según la estructura de tu backend
            })
            .catch(error => console.error(error));
    };

    const handleUpdateQuantity = (productId, quantityDelta) => {
        // Lógica para actualizar la cantidad de un producto en el carrito
        updateCartItemQuantity(productId, orderId, userId, quantityDelta)
            .then(() => {
                // Actualizar la lista de productos del carrito después de actualizar la cantidad logica updateQuantity
                // Debes implementar esto según la estructura de tu backend
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Tu carrito de compras</h2>
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map(item => (
                                <li key={item.productId}>
                                    <p>{item.productName}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <button onClick={() => handleUpdateQuantity(item.productId, 1)}>+</button>
                                    <button onClick={() => handleUpdateQuantity(item.productId, -1)}>-</button>
                                </li>
                            ))}
                            <button onClick={handleDeleteOrder}>Comprar</button>
                        </ul>
                    ) : (
                        <p>Tu carrito está vacío.</p>
                    )}
                </div>
            ) : (
                <h1>Inicia sesión para ver tu carrito.</h1>
            )}
        </div>
    )
}