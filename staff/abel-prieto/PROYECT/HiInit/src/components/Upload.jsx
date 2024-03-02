import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { CommandBar, Pointer } from '../utils'

import logic from '../logic'

function Upload() {

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

    // UPLOAD FILE
    function handleUploadFile(event) {
        event.preventDefault()

        const fileInput = document.querySelector('input[type="file"]')
        const file = fileInput.files[0]

        const clientError = document.querySelector('#client-error')

        if (file === undefined) {
            clientError.innerText = `File is empty. Please, try again ♻`

            return
        }

        logic.uploadFile(file)
            .then(() => {
                clientError.innerText = 'File successfully upload ✅'
                clientError.style.color = 'green'
            })
            .catch(error => {
                clientError.innerText = `${error.message} ❌`
                clientError.style.color = 'red'

                return
            })
    }

    // REFRESH PAGE
    function reRender(event) {
        event.preventDefault()

        window.location.reload()
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
            <p id="client-error">Select upload files or press Reload to refresh: </p>

            <br />

            {uknownCommand && (
                <>
                    <span>
                        <p>shell: command not found: '{commandText}'. Entry desktop or exit</p>
                    </span>
                </>
            )}

            <div className="command-bar">
                <CommandBar />
                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" value={commandText} onChange={(event) => setCommandText(event.target.value)}
                        style={{ width: `${Math.max(10, commandText.length * 8)}px` }} />
                </div>
                <p>{pointer}</p>
            </div>

            <div id="command-form" className="command-form">
                <form onSubmit={handleUploadFile}>
                    <input type="file" name="file" id="file" />
                    <button type="submit" className='button-form'>Upload</button>
                    <button onClick={reRender} className='button-form'>Reload</button>
                </form>
            </div>
        </div>
    </>
}

export default Upload