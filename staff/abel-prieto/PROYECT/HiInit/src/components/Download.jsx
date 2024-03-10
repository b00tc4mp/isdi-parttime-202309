import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../Context"
import logic from "../logic"
import { CommandBar, Pointer } from "../utils"

import Files from "./Files"

function Download() {

    // POINTER, UKNOWN COMMAND & POINTER STATE
    const [files, setFiles] = useState([])
    const [commandText, setCommandText] = useState('')
    const [uknownCommand, setUknownCommand] = useState(false)
    const [list, setList] = useState(false)
    const { pointer } = Pointer()

    // VIEWS
    const navigate = useNavigate()
    const { handleError } = useContext(Context)

    // ESCUCHA TECLADO, ERROR Y ESCRITURA
    useEffect(() => {
        const handleKeyPress = (event) => {
            let commandText = document.getElementById('command').value

            if ((commandText === 'DESKTOP' || commandText === 'desktop') && event.key === 'Enter') {
                setUknownCommand(false)
                navigate('/desktop')
            } else if ((commandText === 'LS' || commandText === 'ls') && event.key === 'Enter') {
                setList(true)
            } else if ((commandText === 'EXIT' || commandText === 'exit') && event.key === 'Enter') {
                handleLogout()
            } else if (event.key === 'Enter') {
                setUknownCommand(!uknownCommand)
            }
        }

        const handleKeyDown = () => {
            setUknownCommand(false)
            // setList(false)
        }

        document.addEventListener('keypress', handleKeyPress)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keypress', handleKeyPress)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [navigate, uknownCommand, setList])

    // FILES
    useEffect(() => {
        try {
            logic.retrieveFiles()
                .then(files => {
                    setFiles(files)
                })
                .catch(error => {
                    handleError(error)
                })
        } catch (error) {
            handleError(error)
        }
    }, [files])

    return <>
        <div className="container">

            <p>~$</p>
            <p id="client-error-download">Entry 'ls' command to list all your save files:  </p>

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

            {list && files.map(file => <Files key={file.id} file={file} clientError={'#client-error-download'} />)}
        </div>
    </>
}

export default Download