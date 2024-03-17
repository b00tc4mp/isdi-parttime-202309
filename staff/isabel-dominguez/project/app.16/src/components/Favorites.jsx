import React from 'react'
import { useUser } from '../hooks/UserContext'
import Product from './Product'



export default function Favorites({ favProducts }) {
    const { isLoggedIn } = useUser()


    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Tu lista de favoritos 👇</h2>
                    <div className="products">{favProducts.map(product => (<Product key={product.id} {...product} favProducts={favProducts} />))}</div>
                </div>
            ) : (
                <h1>Inicia sesión para ver tus favoritos</h1>
            )}
        </div>
    )
}

