import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import logic from '../logic'

export default function RecipeDetail() {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {

        logic.retrieveRecipeById(recipeId)
            .then(data => {
                setRecipe(data)
            })
            .catch(error => {
                console.error('Error fetching recipe details:', error)
            })
    }, [recipeId])

    return (
        <div>
            {recipe && (
                <div className="recipe-details">
                    <div className="recipe-header">
                        <h2 className=''>{recipe.name}</h2>
                        <img className="product-image" src={recipe.image} alt={recipe.name} />
                    </div>
                    <div className="recipe-details-two">
                        <h3 className='recipe-products-details'>Productos:</h3>
                        <ul>
                            {recipe.products.map(product => (
                                <li key={product._id}>{product.name}</li>
                            ))}
                        </ul>
                        <h3 className='recipe-description-details'>Descripción:</h3>
                        <ul>
                            {recipe.description.split('\n').map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}