import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'

import { Pointer, CommandBar } from '../utils'
import { Email, Password } from '../components'

import logic from '../logic'

function Profile() {
    const [commandText, setCommandText] = useState('')
    const [uknownCommand, setUknownCommand] = useState(false)
    const { pointer } = Pointer()

    const navigate = useNavigate()

    // ESCUCHA TECLADO, ERROR Y ESCRITURA
    useEffect(() => {
        const handleKeyPress = (event) => {
            let commandText = document.getElementById('command').value

            if ((commandText === 'EXIT' || commandText === 'exit') && event.key === 'Enter') {
                handleLogout()
            } else if ((commandText === 'EMAIL' || commandText === 'email') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/profile/change-email')
            } else if ((commandText === 'PASSWORD' || commandText === 'password') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/profile/change-password')
            } else if ((commandText === 'DESKTOP' || commandText === 'desktop') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/desktop')
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
            <p>Please, entry email or password command to change different settings. Entry EXIT or DESTKOP to return </p>

            <br />

            <div className="command-bar">
                <CommandBar />

                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" value={commandText} onChange={(event) => setCommandText(event.target.value)}
                        style={{ width: `${Math.max(10, commandText.length * 8)}px` }} />
                </div>

                {uknownCommand && (
                    <span>
                        <p>shell: command not found: '{commandText}'. Entry email or password</p>
                    </span>
                )}

                <p>{pointer}</p>
            </div>

            <Routes>
                <Route path="/change-email" element={<Email />} />
                <Route path="/change-password" element={<Password />} />
            </Routes>
        </div>
    </>
}

export default Profile