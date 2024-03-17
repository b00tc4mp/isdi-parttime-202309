import { useState, useEffect, useContext } from "react"
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import logic from "../logic"
import { Button, Link, Container } from "../library"
import Profile from './Profile'
import FavsUser from "./FavsUser"
import FullHeader from "../components/FullHeader"
import Context from "../Context"


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

	function handleNewRecipeClick() {

		setView('new-recipe')
		//Component i lògica per a fer de 0, o bé, copiant de newPost
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
			<h1><Link onClick={handleHomeClick}>Basic Pantry</Link></h1>

			<FullHeader email={email} name={name} />

		</header>

		<Routes>
			<Route path="/profile" element={<Profile />} />
			<Route path='/favs' element={<FavsUser />} />


		</Routes>
		<footer className="footer">
			<Container className="footer-menu">
				{view === 'new-recipe' && <NewRecipe onPublish={handleNewRecipePublish} onCancel={handleNewRecipeCancel} />}

				{view !== 'new-recipe' && location.pathname !== '/favs' && <Button onClick={handleNewRecipeClick}>+</Button>}

			</Container>

		</footer>
	</div>

}

export default Home