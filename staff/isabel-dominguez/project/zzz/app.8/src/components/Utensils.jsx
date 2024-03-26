import React from 'react'
import Product from './Product'

export default function Utensils({ products }) {

    const utensilsProducts = products.filter(product => product.type === 'Utensils')

    return (
        <section className="products">
            {utensilsProducts.map(product => (
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