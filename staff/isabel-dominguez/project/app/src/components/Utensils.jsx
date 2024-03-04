import React, { useState, useEffect } from 'react'

import Product from './Product'
import logic from '../logic'

export default function Utensils() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        logic.retrieveProducts()
            .then(data => setProducts(data))
            .catch(error => alert(error.message))
    }, [])

    const utensilsProducts = products.filter(product => product.type === 'Utensils')

    return (
        <div>
            <div className="products">{utensilsProducts.map(product => (<Product key={product.id} {...product} />))}</div>
        </div>
    )
}