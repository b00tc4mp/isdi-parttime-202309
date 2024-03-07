import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../Context"
import { CommandBar, Pointer } from "../utils"

function Download() {

    // POINTER, UKNOWN COMMAND & POINTER STATE
    const [commandText, setCommandText] = useState('')
    const [uknownCommand, setUknownCommand] = useState(false)
    const { pointer } = Pointer()

    // VIEWS
    const navigate = useNavigate()
    const { handleError } = useContext(Context)

    // ESCUCHA TECLADO, ERROR Y ESCRITURA
    useEffect(() => {
        const handleKeyPress = (event) => {
            let commandText = document.getElementById('command').value

            if ((commandText === 'desktop' || commandText === 'DESKTOP') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/desktop')
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

    return <>
        <div className="container">

            <p>~$</p>
            <p id="client-error-upload">Entry 'ls' command to list all your save files:  </p>

            <br />

            <div className="command-bar">
                <CommandBar />
                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" value={commandText} onChange={(event) => setCommandText(event.target.value)}
                        style={{ width: `${Math.max(10, commandText.length * 8)}px` }} />
                </div>
                <p>{pointer}</p>
            </div>

            <br />

            {uknownCommand && (
                <>
                    <span>
                        <p>shell: command not found: '{commandText}'. Entry desktop, ls or exit</p>
                    </span>
                </>
            )}
        </div>
    </>
}

export default Download