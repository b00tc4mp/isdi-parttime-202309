import { useEffect, useState } from "react"
import Recipe from './Recipe'
import { useContext } from "../hooks"
import logic from "../logic"

function Recipes(props) {
	console.log('Recipes')

	const [recipes, setRecipes] = useState([])

	const context = useContext()

	const refreshRecipes = () => {
		(async () => {

			try {
				const content = await logic.retrieveRecipes()

				setRecipes(content)
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
		{recipes.map(recipe => <Recipe key={recipe._id} recipe={recipe} onError={props.onError} onSuccess={refreshRecipes} />)}
	</div>

}

export default Recipes