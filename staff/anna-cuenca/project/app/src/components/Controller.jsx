import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Container } from '../library/index'
import logic from '../logic'

import { useContext } from '../hooks'


export default function Controller() {
    const handleLedBlink = () => {
        logic.arduinoLed().then(() => {
            alert('Arduino connected successfully!')
        }).catch(error => {
            alert(`Error: ${error.message}`)
        })
    }

    return (
        <div className="container">
            <h2>On progress</h2>
            <Button onClick={handleLedBlink}>Blink the Led!!</Button>
        </div>
    )
}