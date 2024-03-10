// Para convertir los nombres de los productos en enlaces que redirijan a las páginas de los productos en tu tienda, necesitas tener una forma de mapear los nombres de los productos a las URLs de los productos en tu tienda.

// Supongamos que tienes una función llamada getProductUrl(id) que toma el ID del producto y devuelve la URL del producto en tu tienda. Aquí te muestro cómo podrías modificar el código para crear enlaces dinámicos:

import React, { useState } from 'react';

export default function Recipe({ name, description, image, products, type }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleDetailsClick = () => {
        setShowDetails(!showDetails);
    };

    // Función para obtener la URL del producto
    const getProductUrl = (productId) => {
        // Aquí puedes implementar la lógica para generar la URL del producto
        // Por ejemplo:
        return `/products/${productId}`;
    };

    return (
        <div className="recipe-compo">
            <h2>{name}</h2>
            <img className="product-image" src={image} alt={name} />
            <button className="details-button" onClick={handleDetailsClick}>
                Ver detalles
            </button>
            {showDetails && (
                <div className="details-overlay">
                    <div className="details-content">
                        <h2>{name}</h2>
                        <h3>Productos:</h3>
                        <ul>
                            {products.map((product, index) => (
                                <li key={index}>
                                    {product._id ? (
                                        <a href={getProductUrl(product._id)}>{product.name}</a>
                                    ) : (
                                        product.name
                                    )}
                                </li>
                            ))}
                        </ul>
                        <h3>Descripción:</h3>
                        <p>{description}</p>
                        <button className="close-button" onClick={handleDetailsClick}>Ocultar detalles</button>
                    </div>
                </div>
            )}
        </div>
    );
}



// En este código, estamos verificando si el producto tiene un _id. Si lo tiene, lo consideramos como un enlace y obtenemos la URL del producto usando la función getProductUrl(). Si no tiene _id, simplemente mostramos el nombre del producto. Debes definir la función getProductUrl(id) de acuerdo a cómo esté estructurada tu tienda y cómo generas las URLs de los productos.