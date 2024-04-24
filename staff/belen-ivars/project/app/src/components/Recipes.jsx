import { useEffect, useState } from "react"
import Recipe from './Recipe'
import { useContext } from "../hooks"
import logic from "../logic"
import { Container } from "../library"

function Recipes(props) {
	console.log('Recipes')

	const [recipes, setRecipes] = useState([])

	const context = useContext()

	const refreshRecipes = () => {
		(async () => {

			try {
				const content = await props.showRecipes()
				if (props.resetInputs) props.resetInputs()
				setRecipes(content)
				console.log(content)
			} catch (error) {
				context.handleError(error)
			}
		})()
	}

	useEffect(() => {
		console.log('Recipes effect')

		refreshRecipes()
	}, [props.stamp])

	return <div className="recipes">

		{recipes.length === 0 ? <div >
			<Container>
				<h1 className="recipe-title">No s'han trobat receptes</h1>
				<p className="recipe-text">
					Oooohhh, no hi ha receptes que conicidisquen amb els teus criteris de búsqueda!
				</p>

			</Container>
		</div> : recipes.map(recipe => <Recipe onRecipeClick={props.setRecipe} key={recipe._id} recipe={recipe} onError={props.onError} onSuccess={refreshRecipes} />)}

	</div >

}

export default Recipes