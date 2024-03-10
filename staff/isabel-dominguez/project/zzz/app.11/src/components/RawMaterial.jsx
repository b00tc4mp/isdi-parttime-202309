import React, { useState, useEffect } from 'react'

import Product from './Product'
import logic from '../logic'

export default function RawMaterial() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        logic.retrieveProductsByType('RawMaterial')
            .then(data => setProducts(data))
            .catch(error => alert(error.message))
    }, [])



    return (
        <div>
            <div className="products">{products.map(product => (<Product key={product.id} {...product} />))}</div>
        </div>
    )
}