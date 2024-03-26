import React from 'react'
import Product from './Product'

export default function Packings({ products }) {

    const packingProducts = products.filter(product => product.type === 'Packings')

    return (
        <section className="products">
            {packingProducts.map(product => (
                <Product
                    key={product.id}
                    image={product.image}
                    productName={product.name}
                    price={product.price}
                />
            ))}
        </section>
    )
}