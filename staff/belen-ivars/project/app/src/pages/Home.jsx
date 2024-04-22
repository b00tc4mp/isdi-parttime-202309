import { useState, useEffect, useContext } from "react"
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import logic from "../logic"
import { Button, Link, Container } from "../library"
import Profile from './Profile'
import Context from "../Context"
import NewRecipe from "../components/NewRecipeForm"
import { Recipes, TopProfileImage } from "../components"
import Search from "../components/Search"
import Login from "./Login"


function Home(props) {
	console.log('Home')

	const context = useContext(Context)

	const [view, setView] = useState(null)
	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [stamp, setStamp] = useState(null)

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
		setView(null)
		navigate('/')

		window.scrollTo(0, 0)
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


	return <div>
		<header className="header">
			<h1><Link className="link-header" onClick={handleHomeClick}>Basic Pantry</Link></h1>

			<TopProfileImage email={email} name={name} />

		</header>

		<Routes>
			<Route path="/profile" element={<Profile />} />
			<Route path='/favs' element={<Recipes showRecipes={logic.retrieveFavRecipes} />} />
			<Route path='/new-recipe' element={<NewRecipe />} />
			<Route path='/' element={<Recipes showRecipes={logic.retrieveRecipes} stamp={stamp} />} />
		</Routes>

		<footer className="footer">
			<Container>
				{view === 'new-recipe' && <NewRecipe onPublish={handleNewRecipePublish} onCancel={handleNewRecipeCancel} />}

				{view !== 'new-recipe' && <Button className="button-new-recipe" onClick={handleNewRecipeClick}>+</Button>}

			</Container>

			<Container>

				{view === 'search' && <Search onPublish={handleSearchPublish} onCancel={handleSearchCancel} />}

				{view !== 'search' && <Button className="button-search" onClick={handleSearchClick}>🔍</Button>}

			</Container>

		</footer>
	</div>

}

export default Home