import React from 'react'
import { useUser } from '../hooks/UserContext'
import Product from './Product'



export default function Favorites({ favProducts, onSuccess }) {
    const { isLoggedIn } = useUser()


    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2 className='fav-title'>Productos guardados</h2>
                    <div className="products">{favProducts.map(product => (<Product key={product.id} {...product} favProducts={favProducts} onSuccess={onSuccess} />))}</div>
                </div>
            ) : (
                <h1 className='fav-title'>Inicia sesión para ver tus productos guardados</h1>
            )}
        </div>
    )
}

