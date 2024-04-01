import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Recipe from './Recipe'
import logic from '../logic'

export default function Recipes(props) {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        if (!props.type) {
            logic.retrieveRecipesByType('Make-up')
                .then(data => setRecipes(data))
                .catch(error => alert(error.message))
        } else {
            logic.retrieveRecipesByType(props.type)
                .then(data => setRecipes(data))
                .catch(error => alert(error.message))
        }
    }, [props.type])

    return (
        <div>
            <div className='recipes-type' >
                <Link to="/recipes/make-up"><button>Maquillaje</button></Link>
                <Link to="/recipes/treatment"><button>Tratamientos</button></Link>
                <Link to="/recipes/hair"><button>Cabello</button></Link>
                <Link to="/recipes/body"><button>Cuerpo</button></Link>
                <Link to="/recipes/fragrance"><button>Perfumes</button></Link>
            </div>

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
        </div>
    )
};