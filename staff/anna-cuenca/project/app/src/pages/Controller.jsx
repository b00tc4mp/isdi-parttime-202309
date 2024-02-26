

import React from 'react'
import { Button } from '../library/index'
import logic from '../logic'

export default function Controller() {
    const handleAction = (action) => {

        logic.ottoController(action).then(() => {
            let message = "successfully!"
            switch (action) {
                case 'walkForward':
                    message = "Otto walked forward successfully!"
                    break
                case 'walkBackward':
                    message = "Otto walked backward successfully!"
                    break
                case 'stop':
                    message = "Otto stopped successfully!"
                    break
                default:
                    message = "Action was successful!"
                    break
            }
            alert(message)
        }).catch(error => {
            alert(`Error: ${error.message}`)
        })
    }

    return (
        <div className="container">
            <h2>Controller</h2>
            <Button onClick={() => handleAction('walkForward')}>Forward</Button>
            <Button onClick={() => handleAction('walkBackward')}>Backward</Button>
            <Button onClick={() => handleAction('stop')}>Stop</Button>

        </div>
    )
}