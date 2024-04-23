import { useState, useEffect, useContext } from "react"
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import logic from "../logic"
import { Button, Link, Container } from "../library"
import Profile from './Profile'
import Context from "../Context"
import { Recipes, TopProfileImage, NewSearch, NewRecipe } from "../components"
import Login from "./Login"
import CompleteRecipe from './CompleteRecipe'


function Home(props) {
	console.log('Home')

	const context = useContext(Context)

	const [view, setView] = useState(null)
	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [stamp, setStamp] = useState(null)
	const [ingredients, setIngredients] = useState('')
	const [diet, setDiet] = useState('')
	const [isSearching, setIsSearching] = useState(false)
	const [recipe, setRecipe] = useState(null)


	const location = useLocation()
	const navigate = useNavigate()


	useEffect(() => {
		console.log('Home -> effect(name)');

		(async () => {
			try {
				const user = await logic.retrieveUser()
				setName(user.name)
				setEmail(user.email)

			} catch (error) {
				context.handleError(error)
			}
		})()
	}, [])


	function handleHomeClick(event) {
		event.preventDefault()
		setIsSearching(false)
		setStamp(Date.now())
		setRecipe(null)
		navigate('/')
	}

	function handleSearchClick() {

		setView('search')
	}

	function handleSearchCancel() {
		setView(null)
	}

	function handleSearchPublish() {
		setStamp(Date.now())
		console.log(ingredients, diet)
		setIsSearching(true)
		window.scrollTo(0, 0)
		setView(null)

	}

	function resetInputs() {
		setIngredients('')
		setDiet('')
	}

	function handleNewRecipeClick() {

		setView('new-recipe')
	}

	function handleNewRecipeCancel() {
		setView(null)
	}

	function handleNewRecipePublish() {
		setStamp(Date.now())
		setView(null)
		navigate('/')
		window.scrollTo(0, 0)
	}

	function handleRecipeClick(recipe) {
		setRecipe(recipe)
		navigate('/recipe')
	}


	return <div className="body-home">
		<header className="header">
			<div className="title-div">
				<h1><Link className="title-text" onClick={handleHomeClick}>Basic Pantry</Link></h1>
			</div>

			<TopProfileImage email={email} name={name} />

		</header>
		<div className="container-recipes">
			{/* traslladar a clase */}
			<Routes>
				{recipe && <Route path='/recipe' element={<CompleteRecipe recipe={recipe} />} />
				}
				<Route path="/profile" element={<Profile />} />
				<Route path='/favs' element={<Recipes setRecipe={handleRecipeClick} showRecipes={logic.retrieveFavRecipes} />} />
				<Route path='/new-recipe' element={<NewRecipe />} />
				<Route path='/' element={isSearching ? <Recipes setRecipe={handleRecipeClick} resetInputs={resetInputs} showRecipes={() => logic.searchRecipes(ingredients, diet)} stamp={stamp} /> : <Recipes setRecipe={handleRecipeClick} showRecipes={logic.retrieveRecipes} stamp={stamp} />} />
			</Routes>
		</div>

		<footer className="footer">
			<Container>
				{view === 'new-recipe' && <NewRecipe onPublish={handleNewRecipePublish} onCancel={handleNewRecipeCancel} />}

				{view !== 'new-recipe' && <Button className="button-footer" onClick={handleNewRecipeClick}>+</Button>}

			</Container>

			<Container>

				{view === 'search' && <NewSearch setIngredients={setIngredients} setDiet={setDiet} onPublish={handleSearchPublish} onCancel={handleSearchCancel} />}

				{view !== 'search' && <Button className="button-footer" onClick={handleSearchClick}>🔍</Button>}

			</Container>

		</footer>
	</div>

}

export default Home