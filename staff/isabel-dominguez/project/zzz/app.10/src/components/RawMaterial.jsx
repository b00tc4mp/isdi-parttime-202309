import React, { useState, useEffect } from 'react'

import Product from './Product'
import logic from '../logic'

export default function RawMaterial() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        logic.retrieveProducts()
            .then(data => setProducts(data))
            .catch(error => alert(error.message))
    }, [])

    const rawMaterialProducts = products.filter(product => product.type === 'RawMaterial');

    return (
        <div>
            <div className="products">{rawMaterialProducts.map(product => (<Product key={product.id} {...product} />))}</div>
        </div>
    )
}