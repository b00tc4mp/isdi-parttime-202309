import React from 'react'
import Product from './Product'

export default function RawMaterial({ products }) { //donde tengo que enviar esta prop?

    const rawMaterialProducts = products.filter(product => product.type === 'RawMaterial')

    return (
        <section className="products">
            {rawMaterialProducts.map(product => (
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