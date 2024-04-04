import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({ type, recipeId, name, image }) {
    return (
        <div className="recipe-compo">
            <h2>{name}</h2>
            <img className="product-image" src={image} alt={name} />
            <Link className="details-button" to={`/recipes/${type}/${recipeId}`}>Ver preparación</Link>
        </div>
    )
}