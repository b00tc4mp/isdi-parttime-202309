// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// import { Button, Container } from '../library/index'
// import logic from '../logic'

// import { useContext } from '../hooks'


// export default function Controller() {
//     const handleLedBlink = () => {
//         logic.arduinoLed().then(() => {
//             alert('Arduino connected successfully!')
//         }).catch(error => {
//             alert(`Error: ${error.message}`)
//         })
//     }

//     return (
//         <div className="container">
//             <h2>On progress</h2>
//             <Button onClick={handleLedBlink}>Blink the Led!!</Button>
//         </div>
//     )
// }

import { useState } from 'react';
import { Button, Container } from '../library/index';
import logic from '../logic';

export default function Controller() {
    const handleWalkForward = () => {
        logic.ottoWalkForward().then(() => {
            alert('Otto walked forward successfully!');
        }).catch(error => {
            alert(`Error: ${error.message}`);
        });
    };

    const handleMoveRight = () => {
        logic.ottoMoveRight().then(() => {
            alert('Otto moved right successfully!');
        }).catch(error => {
            alert(`Error: ${error.message}`);
        });
    };

    const handleMoveLeft = () => {
        logic.ottoMoveLeft().then(() => {
            alert('Otto moved left successfully!');
        }).catch(error => {
            alert(`Error: ${error.message}`);
        });
    };

    const handleMoveBackward = () => {
        logic.ottoMoveBackward().then(() => {
            alert('Otto moved backward successfully!');
        }).catch(error => {
            alert(`Error: ${error.message}`);
        });
    };

    const handleStopServos = () => {
        logic.ottoStopServos().then(() => {
            alert('Otto stopped successfully!');
        }).catch(error => {
            alert(`Error: ${error.message}`);
        });
    };

    return (
        <div className="container">
            <h2>Controller</h2>
            <Button onClick={handleWalkForward}>Forward</Button>
            <Button onClick={handleMoveRight}>Right</Button>
            <Button onClick={handleMoveLeft}>Left</Button>
            <Button onClick={handleMoveBackward}>Backward</Button>
            <Button onClick={handleStopServos} style={{ backgroundColor: 'red' }}>Stop</Button>
        </div>
    );
}