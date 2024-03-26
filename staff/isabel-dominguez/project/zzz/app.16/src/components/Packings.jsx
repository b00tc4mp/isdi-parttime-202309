import React, { useState, useEffect } from 'react'

import Product from './Product'
import logic from '../logic'

export default function Packings({ loadProducts, favProducts }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        logic.retrieveProductsByType('Packings')
            .then(data => setProducts(data))
            .catch(error => alert(error.message))
    }, [])

    const refreshProducts = () => {
        try {
            loadProducts()
                .then(products => setProducts(products))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    // useEffect(() => {
    //     refreshProducts()

    // }, [props.stamp])


    return (
        <div>
            <div className="products">{products.map(product => (<Product key={product.id} {...product} onFavSuccess={refreshProducts} favProducts={favProducts} />))}</div>
        </div>
    )
}