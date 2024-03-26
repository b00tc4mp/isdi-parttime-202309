import React, { useState, useEffect } from 'react'
import { useUser } from '../hooks/UserContext'
import Product from './Product'
import logic from '../logic'

function Favorites() {
    const { user, IsLoggedIn } = useUser()
    const [products, setProducts] = useState([])

    useEffect(() => {
        logic.retrieveFavs(user.id)
            .then(favProducts => {
                setProducts(favProducts)
            })
            .catch(error => {
                alert(error.message)
            })
    }, [IsLoggedIn])

    return (
        <div>
            <h2>Tienes los siguientes productos en tu lista de deseos:</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <Product
                            productId={product.productId}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            description={product.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites