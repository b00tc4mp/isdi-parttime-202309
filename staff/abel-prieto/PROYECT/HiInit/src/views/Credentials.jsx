import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom'

import { Desktop } from '../views'
import { Login, Register } from '../components'
import { CommandBar, Pointer } from '../utils'

import logic from '../logic'

function Credentials() {

    // POINTER, UKNOWN COMMAND & POINTER STATE
    const [commandText, setCommandText] = useState('')
    const [uknownCommand, setUknownCommand] = useState(false)
    const { pointer } = Pointer()

    // VIEWS
    const navigate = useNavigate()

    // ESCUCHA TECLADO, ERROR Y ESCRITURA
    useEffect(() => {
        const handleKeyPress = (event) => {
            let commandText = document.getElementById('command').value

            if ((commandText === 'register' || commandText === 'REGISTER') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/credentials/register')
            } else if ((commandText === 'login' || commandText === 'LOGIN') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/credentials/login')
            } else if ((commandText === 'EXIT' || commandText === 'exit') && event.key === 'Enter') {
                handleLogout()
            } else if (event.key === 'Enter') {
                setUknownCommand(!uknownCommand)
            }
        }

        const handleKeyDown = () => {
            setUknownCommand(false)
        }

        document.addEventListener('keypress', handleKeyPress)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keypress', handleKeyPress)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [navigate, uknownCommand])

    // LOGIN VIEW
    function handleLoginShow() {
        navigate('/credentials/login')
    }

    // DESKTOP VIEW
    function handleDesktopShow() {
        navigate('/desktop')
    }

    // EXIT SESSION
    function ProtectedRoute({ element }) {
        return logic.isUserLoggedIn() ? element : <Navigate to="/" />;
    }


    // LOGOUT VIEW
    function handleLogout() {
        logic.logoutUser(error => {
            if (error) {
                throw new Error(error)
            }

            navigate('/')
        })
    }

    return <>
        <div className="container">

            <p>~$</p>
            <p>Please, entry login or register command to switch different components. Entry EXIT to return initial page</p>

            <div className="command-bar">
                <CommandBar />
                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" value={commandText} onChange={(event) => setCommandText(event.target.value)}
                        style={{ width: `${Math.max(10, commandText.length * 8)}px` }} />
                </div>
                <p>{pointer}</p>
            </div>

            <Routes>
                <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/login" /> : <Register onSuccess={handleLoginShow} />}></Route>
                <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/desktop" /> : <Login onSuccess={handleDesktopShow} />}></Route>
                <Route path="/desktop" element={<ProtectedRoute element={<Desktop onLogout={handleLogout} />} />} />
            </Routes>

            {uknownCommand && (
                <>
                    <span>
                        <p>shell: command not found: '{commandText}'. Entry login or register</p>
                    </span>
                </>
            )}
        </div>
    </>
}

export default Credentials