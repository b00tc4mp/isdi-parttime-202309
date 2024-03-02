

import { useState, useEffect } from 'react'
import { Button } from '../library/index'
import logic from '../logic'



import { useContext } from '../hooks'



export default function Controller() {
    const context = useContext()
    const [userData, setUserData] = useState({ name: '', robot: '' })

    useEffect(() => {
        logic.retrieveUserInfo()
            .then(user => {
                setUserData({ name: user.name, robot: user.robot })
            })
            .catch(error => {
                context.handleError(error)
            })
    }, [])

    const handleAction = async (action) => {
        if (action === 'sayHi') {
            const messagePart1 = `Hola ${userData.name}`
            const messagePart2 = `Soy ${userData.robot}`

            try {
                // Mensaje parte 1
                await logic.ottoController(action, messagePart1)

                setTimeout(async () => {
                    // Limpiar la pantalla
                    await logic.ottoController('clearLCD', '')

                    //Mensaje parte 2

                    setTimeout(async () => {
                        await logic.ottoController(action, messagePart2)
                    }, 1000)
                }, 2000)
            } catch (error) {
                console.error(`Error executing ${action} action:`, error)
                context.handleError(error)
            }
        } else {
            // De momento no necesito la pantalla
            try {
                await logic.ottoController(action)
                console.log(`${action} action executed successfully`)
            } catch (error) {
                console.error(`Error executing ${action} action:`, error)
                context.handleError(error)
            }
        }
    }

    return (
        <div className="container">
            <h2>Controller</h2>
            <Button onClick={() => handleAction('walkForward')}>Forward</Button>
            <Button onClick={() => handleAction('walkBackward')}>Backward</Button>
            <Button onClick={() => handleAction('turnRight')}>Turn Right</Button>
            <Button onClick={() => handleAction('stop')}>Stop</Button>
            <Button onClick={() => handleAction('sayHi')}>Say Hi</Button>
            <Button onClick={() => handleAction('clearLCD')}>Clear LCD</Button>
        </div>
    )
}