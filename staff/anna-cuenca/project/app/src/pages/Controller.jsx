

import { useState, useEffect } from 'react'
import { Button } from '../library/index'
import logic from '../logic'



import { useContext } from '../hooks'




export default function MonitorController() {

    const context = useContext()

    const [userData, setUserData] = useState({ name: '', robot: '' });


    useEffect(() => {
        logic.retrieveUserInfo()
            .then(user => {
                // Suponiendo que la respuesta incluye el nombre del usuario y el nombre del robot
                setUserData({ name: user.name, robot: user.robot });
            })
            .catch(error => {
                context.handleError(error); // Maneja el error a través del contexto global
            });
    }, []);

    const sendMessageToLCD = () => {
        // Mensaje personalizado con el nombre del usuario y el nombre del robot
        const message = `Hola ${userData.name}, soy tu robot ${userData.robot}`;

        console.log(message)
        logic.arduinoLCD(message)
            .then(() => {
                alert("Mensaje enviado exitosamente!");
            })
            .catch(error => {
                context.handleError(error); // Maneja el error a través del contexto global
            });
    };

    return (
        <div className="container">
            <h2>Controlador del LCD de Arduino</h2>
            <Button onClick={sendMessageToLCD}>Enviar Mensaje</Button>
        </div>
    );
}

// COMENTADO PARA PROBAR EL MONITOR 

// export default function Controller() {
//     const handleAction = (action) => {

//         logic.ottoController(action).then(() => {
//             let message = "successfully!"
//             switch (action) {
//                 case 'walkForward':
//                     message = "Otto walked forward successfully!"
//                     break
//                 case 'walkBackward':
//                     message = "Otto walked backward successfully!"
//                     break
//                 case 'stop':
//                     message = "Otto stopped successfully!"
//                     break
//                 default:
//                     message = "Action was successful!"
//                     break
//             }
//             alert(message)
//         }).catch(error => {
//             alert(`Error: ${error.message}`)
//         })
//     }

//     return (
//         <div className="container">
//             <h2>Controller</h2>
//             <Button onClick={() => handleAction('walkForward')}>Forward</Button>
//             <Button onClick={() => handleAction('walkBackward')}>Backward</Button>
//             <Button onClick={() => handleAction('stop')}>Stop</Button>

//         </div>
//     )
// }