import React, { useState, useEffect } from 'react'

import Product from './Product'
import logic from '../logic'

export default function Packings() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        logic.retrieveProducts()
            .then(data => setProducts(data))
            .catch(error => alert(error.message))
    }, [])

    const packingsProducts = products.filter(product => product.type === 'Packings')

    return (
        <div>
            <div className="products">{packingsProducts.map(product => (<Product key={product.id} {...product} />))}</div>
        </div>
    )
}