import React, { useState } from 'react'

export default function Recipe({ title, image, ingredients, instructions }) {
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <div className="recipe-compo">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            {!showDetails && (
                <button onClick={toggleDetails}>Ver detalles</button>
            )}
            {showDetails && (
                <div>
                    <h3>Ingredientes:</h3>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instrucciones de preparación:</h3>
                    <ol>
                        {instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                    <button onClick={toggleDetails}>Ocultar detalles</button>
                </div>
            )}
        </div>
    )
}