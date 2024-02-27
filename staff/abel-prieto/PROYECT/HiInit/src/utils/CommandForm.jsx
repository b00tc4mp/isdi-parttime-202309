import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CommandForm() {
    const [commandText, setCommandText] = useState('')
    const [uknownCommand, setUknownCommand] = useState(false)

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
}