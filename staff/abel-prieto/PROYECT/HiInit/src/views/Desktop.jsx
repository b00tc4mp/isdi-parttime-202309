import { Pointer, CommandBar } from '../utils'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import logic from '../logic'

function Desktop() {
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
            } else if ((commandText === 'UPLOAD' || commandText === 'upload') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/upload')
            } else if ((commandText === 'PROFILE' || commandText === 'profile') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/profile')
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
            <p>Hi! Wellcome to your C:\Desktop</p>

            <br />

            <div className="command-bar">
                <CommandBar />

                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" value={commandText} onChange={(event) => setCommandText(event.target.value)}
                        style={{ width: `${Math.max(10, commandText.length * 8)}px` }} />
                </div>

                {uknownCommand && (
                    <span>
                        <p>shell: command not found: '{commandText}'. Press 'help' to list commands</p>
                    </span>
                )}

                <p>{pointer}</p>
            </div>
        </div>
    </>
}

export default Desktop