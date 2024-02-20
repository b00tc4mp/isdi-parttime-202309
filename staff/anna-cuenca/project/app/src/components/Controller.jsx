import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Container } from '../library/index'
import logic from '../logic'
import { useContext } from '../hooks'

export default function Controller() {
    const handleConnectClick = () => {
        logic.arduinoLedBuiltIn().then(() => {
            alert('Arduino connected successfully!')
        }).catch(error => {
            alert(`Error: ${error.message}`)
        })
    }

    return (
        <div className="container">
            <h2>Working page</h2>
            <Button onClick={handleConnectClick}>Connect to Arduino</Button>
        </div>
    )
}

