import React, { useState } from 'react';

export default function Recipe({ name, description, image, products, type }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="recipe-compo">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            {!showDetails && (
                <button onClick={toggleDetails}>Ver detalles</button>
            )}
            {showDetails && (
                <div>
                    <h3>Descripción:</h3>
                    <p>{description}</p>
                    <h3>Productos:</h3>
                    <ul>
                        {products.map((product, index) => (
                            <li key={index}>{product}</li>
                        ))}
                    </ul>
                    <h3>Tipo:</h3>
                    <p>{type}</p>
                    <button onClick={toggleDetails}>Ocultar detalles</button>
                </div>
            )}
        </div>
    )
}