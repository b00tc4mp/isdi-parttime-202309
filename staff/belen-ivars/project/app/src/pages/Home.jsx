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
	const [complexity, setComplexity] = useState('')
	const [method, setMethod] = useState('')

	const [isSearching, setIsSearching] = useState(false)

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
		setIsSearching(true)
		window.scrollTo(0, 0)
		setView(null)

	}

	function resetInputs() {
		setIngredients('')
		setDiet('')
		setComplexity('')
		setMethod('')
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

	function handleRecipeClick(recipeId) {
		navigate(`/recipe/${recipeId}`)
	}


	return <div className="body-home">
		<header className="header">
			<div className="page-title-div">
				<h1><Link className="page-title-text" onClick={handleHomeClick}>Basic Pantry</Link></h1>
			</div>

			<TopProfileImage email={email} name={name} />

		</header>
		<div className="container-recipes">

			<Routes>
				<Route path='/recipe/:recipeId' element={<CompleteRecipe />} />
				<Route path="/profile" element={<Profile />} />
				<Route path='/favs' element={<Recipes setRecipe={handleRecipeClick} showRecipes={logic.retrieveFavRecipes} />} />
				<Route path='/new-recipe' element={<NewRecipe />} />
				<Route path='/' element={isSearching ? <Recipes setRecipe={handleRecipeClick} resetInputs={resetInputs} showRecipes={() => logic.searchRecipes(ingredients, diet, complexity, method)} stamp={stamp} /> : <Recipes setRecipe={handleRecipeClick} showRecipes={logic.retrieveRecipes} stamp={stamp} />} />
			</Routes>
		</div>

		<div className="footer">
			<footer >
				{view === 'new-recipe' && <NewRecipe onPublish={handleNewRecipePublish} onCancel={handleNewRecipeCancel} />}

				{view !== 'new-recipe' && view !== 'search' && <Button className="button-footer" onClick={handleNewRecipeClick}>+</Button>}

				{view === 'search' && <NewSearch setIngredients={setIngredients} setDiet={setDiet} setComplexity={setComplexity} setMethod={setMethod} onPublish={handleSearchPublish} onCancel={handleSearchCancel} />}

				{view !== 'search' && view !== 'new-recipe' && <Button className="button-footer" onClick={handleSearchClick}>🔍</Button>}
			</footer>
		</div>
	</div >

}

export default Home