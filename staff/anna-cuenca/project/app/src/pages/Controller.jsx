

import React from 'react'
import { Button } from '../library/index'
import logic from '../logic'

export default function Controller() {
    const handleAction = (action) => {
        // Llamada a la función ottoController dentro del objeto logic con la acción deseada
        logic.ottoController(action).then(() => {
            alert(`Otto ${action === 'walkForward' ? 'walked forward' : 'stopped'} successfully!`)
        }).catch(error => {
            alert(`Error: ${error.message}`)
        });
    };

    return (
        <div className="container">
            <h2>Controller</h2>
            <Button onClick={() => handleAction('walkForward')}>Forward</Button>
            <Button onClick={() => handleAction('stop')} style={{ backgroundColor: 'red' }}>Stop</Button>
            {/* Implementa botones adicionales y manejadores para otras acciones aquí */}
        </div>
    )
}