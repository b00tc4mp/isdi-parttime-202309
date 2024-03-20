
import { useState, useEffect, useContext } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'

import { Pointer, CommandBar } from '../utils'
import { RegisterAdmin, DeleteUser, CreateGroup } from '../components'

import Context from '../Context'
import logic from '../logic'

export default function Sudo() {
    const [commandText, setCommandText] = useState('')
    const [menu, setMenu] = useState(true)
    const [uknownCommand, setUknownCommand] = useState(false)
    const { pointer } = Pointer()

    const navigate = useNavigate()
    const { handleError } = useContext(Context)

    // ESCUCHA TECLADO, ERROR Y ESCRITURA
    useEffect(() => {
        const handleKeyPress = (event) => {
            let commandText = document.getElementById('command').value

            if ((commandText === 'EXIT' || commandText === 'exit') && event.key === 'Enter') {
                handleLogout()
            } else if ((commandText === 'DESKTOP' || commandText === 'desktop') && event.key === 'Enter') {
                setUknownCommand(false)
                setMenu(false)
                navigate('/desktop')
            } else if ((commandText === '1') && event.key === 'Enter') {
                setUknownCommand(false)
                setMenu(false)
                navigate('/create-admin')
            } else if ((commandText === '2') && event.key === 'Enter') {
                setUknownCommand(false)
                setMenu(false)
                navigate('/delete-user')
            } else if ((commandText === '3') && event.key === 'Enter') {
                setUknownCommand(false)
                setMenu(false)
                navigate('/create-group')
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
    }, [navigate, uknownCommand, menu])

    // LOGOUT VIEW
    function handleLogout() {
        logic.logoutUser(error => {
            if (error) {
                handleError(error, navigate)
            }

            navigate('/')
        })
    }

    return <>
        <div className="container">
            <p>~$</p>
            <p>ADMINISTRATOR: Select one of all different options. Entry DESKTOP or EXIT to return </p>

            <br />

            <div className="command-bar">
                <CommandBar />

                <div id="command-form">
                    <input id="command" type="text" contentEditable="true" autoFocus autoComplete="off" value={commandText} onChange={(event) => setCommandText(event.target.value)}
                        style={{ width: `${Math.max(10, commandText.length * 8)}px` }} />
                </div>
                <p>{pointer}</p>
            </div>

            <Routes>
                <Route path="/create-admin" element={<RegisterAdmin />} />
                <Route path="/delete-user" element={<DeleteUser />} />
                <Route path="/create-group" element={<CreateGroup />} />
            </Routes>

            <br />

            {menu && (
                <ol>
                    <li><p><strong>Create new ADMIN</strong></p></li>
                    <li><p><strong>Delete Users</strong></p></li>
                    <li><p><strong>Create new Group</strong></p></li>
                    <li><p><strong>Create new Command - In construction... ⌛</strong></p></li>
                </ol>
            )}

            <br />

            {uknownCommand && (
                <span>
                    <p>shell: command not found: '{commandText}'. Entry DESKTOP or EXIT</p>
                </span>
            )}
        </div>
    </>
}