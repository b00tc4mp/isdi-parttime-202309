import { useState, useEffect } from "react";
//son hooks de React para gestionar el estado del componente y efecto secundarios, respectivamente

import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
//son parte de React Router y se utilizan para la navegacion y la gestion de rutas

import { Settings, Synqple, SamplesFolder } from '../components'

import logic from '../logic'

import { Form, Button, Field } from '../library'

import { useContext } from "../hooks";

import synqpleLogo from "../assets/footer_buttons/synqpleLogo.png"
import folder from "../assets/footer_buttons/folder.png"
import settings from "../assets/footer_buttons/settings.png"
import logout from "../assets/footer_buttons/logout.png"






function Home(props) {
    console.log('Home')

    const session = useContext();
    const [name, setName] = useState(null);
    const navigate = useNavigate();




    useEffect(() => {
        console.log('Home -> effect (name)')


        try {
            logic.retrieveUser()
                .then(user => setName(user.name))
                .catch(error => session.handleError(error))

        } catch (error) {

            session.handleError(error)
        }



    }, []) // es un array de dependencias, indica a React que variables o propiedades deben cambiar
    //para que el efecto secundario se vuelva a ejecutar. Si el array esta vacio [], 
    //significa que solo se ejecutará una vez 



    function handleSynqpleClick(event) {
        event.preventDefault()

        navigate('/')
    }



    function handleSamplesFolderClick(event) {
        event.preventDefault()

        navigate('/samplesfolder')
    }



    function handleSettingsClick(event) {
        event.preventDefault()

        navigate('/settings')
    }

    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {

                session.handleError(error)
                return
            }
        })

        props.onLogoutClick()
    }


    return <div>


        {/* Rutas */}
        <Routes>
            <Route path="/" element={<Synqple />} />

            <Route path="/samplesfolder" element={<SamplesFolder />} />

            <Route path="/settings" element={<Settings />} />


        </Routes>


        <footer className="footer">

            <Button className="button" onClick={handleSynqpleClick}><img src={synqpleLogo} alt="Synqple" /></Button>

            <Button className="button" onClick={handleSamplesFolderClick}><img src={folder} alt="Samples" /></Button>

            <Button className="button" onClick={handleSettingsClick}><img src={settings} alt="Settings" /></Button>

            <Button className="button" onClick={handleLogoutClick}><img src={logout} alt="Logout" /></Button>

        </footer>


    </div>

}

export default Home

//  <Route path="/" />
// <Button onClick={handleSampleClick}>Samples</Button>
//<Route path="/samples" element={<Samples />} />