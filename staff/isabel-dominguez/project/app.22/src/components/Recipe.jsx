import React, { useState } from 'react'

export default function Recipe({ name, description, image, products }) {
    const [showDetails, setShowDetails] = useState(false)

    const handleDetailsClick = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div className="recipe-compo">
            <h2>{name}</h2>
            <img className="product-image" src={image} alt={name} />
            <button className="details-button" onClick={handleDetailsClick}>Ver preparación</button>
            {showDetails && (
                <div className="details-overlay">
                    <div className="details-content">
                        <h2>{name}</h2>
                        <h3>Productos:</h3>
                        <ul>
                            {products.map(product => (
                                <li key={product._id}>{product.name}</li>
                            ))}
                        </ul>
                        <h3>Descripción:</h3>
                        <ul>
                            {description.split('\n').map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                        <button className="close-button" onClick={handleDetailsClick}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    )
}