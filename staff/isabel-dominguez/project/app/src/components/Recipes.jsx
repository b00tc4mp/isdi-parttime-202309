import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
import logic from '../logic'

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        logic.retrieveRecipes()
            .then(data => setRecipes(data))
            .catch(error => alert(error.message))
    }, [])

    return (
        <div className="recipes-compo">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.id}
                    name={recipe.name}
                    description={recipe.description}
                    image={recipe.image}
                    products={recipe.products}
                    type={recipe.type}
                />
            ))}
        </div>
    )
}


//este compo se va y hago un compo para cada tipo de receta (por filtrado)