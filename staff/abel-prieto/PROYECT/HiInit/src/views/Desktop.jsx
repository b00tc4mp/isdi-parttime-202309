import { Pointer, CommandBar } from '../utils'
import { useState, useEffect } from 'react'
import { Router, useNavigate } from 'react-router-dom'

function Desktop({ onLogout }) {
    const [commandText, setCommandText] = useState('')
    const [uknownCommand, setUknownCommand] = useState(false)
    const { pointer } = Pointer()

    const navigate = useNavigate()

    // ESCUCHA TECLADO, ERROR Y ESCRITURA
    useEffect(() => {
        const handleKeyPress = (event) => {
            let commandText = document.getElementById('command').value

            if ((commandText === 'EXIT' || commandText === 'exit') && event.key === 'Enter') {
                onLogout()
            } else if ((commandText === 'UPLOAD' || commandText === 'upload') && event.key === 'Enter') {
                navigate('/upload')
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
                        <p>shell: command not found: '{commandText}'. Entry login or register</p>
                    </span>
                )}

                <p>{pointer}</p>
            </div>
        </div>
    </>
}

export default Desktop