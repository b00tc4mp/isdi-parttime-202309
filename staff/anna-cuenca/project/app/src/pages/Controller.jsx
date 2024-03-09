

import { useState, useEffect } from 'react'
import { Button } from '../library/index'
import logic from '../logic'



import { useContext } from '../hooks'
import session from '../logic/session'

let userId = session.sessionUserId
console.log(userId)


export default function Controller() {
    const context = useContext()
    const [userData, setUserData] = useState({ name: '', robot: '' })
    const [sequences, setSequences] = useState([])
    const [showSequences, setShowSequences] = useState(false)
    const [reloadSequences, setReloadSequences] = useState(false)

    useEffect(() => {
        logic.retrieveUserInfo()
            .then(user => {
                console.log(user)
                setUserData({ name: user.name, robot: user.robot })


            })
            .catch(error => {
                context.handleError(error)
            })

        logic.retrieveSequence()
            .then(sequences => {
                setSequences(sequences);
            })
            .catch(error => {
                context.handleError(error);
            })
    }, [reloadSequences])

    const toggleSequencesVisibility = () => setShowSequences(!showSequences)


    const handleAction = async (action) => {

        const userId = session.sessionUserId;
        console.log(userId)

        if (!userId) {
            console.error('No userId found');
            return;
        }
        try {


            if (action === 'sayHi') {
                const messagePart1 = `Hola ${userData.name}`
                const messagePart2 = `Soy ${userData.robot}`

                // Mensaje parte 1
                await logic.ottoController(action, messagePart1, null, userId)

                setTimeout(async () => {
                    // Limpiar la pantalla
                    await logic.ottoController('clearLCD', '', null, userId)

                    // Mensaje parte 2
                    setTimeout(async () => {
                        await logic.ottoController(action, messagePart2, null, userId)
                    }, 1000)
                }, 2000)
            } else if (action === 'endSequence') {
                // Aquí se asume que endSequence necesita el userId, que ya verificamos
                await logic.ottoController(action, '', null, userId)
                console.log(`${action} action executed successfully`)

                // Actualizar el estado para recargar o actualizar la UI según sea necesario
                setReloadSequences(prev => !prev)
            } else {
                // Para todas las demás acciones que no requieren un mensaje específico
                await logic.ottoController(action, '', null, userId)
                console.log(`${action} action executed successfully`)
            }
        } catch (error) {
            console.error(`Error executing ${action} action:`, error)
            context.handleError(error)
        }
    };



    function handlePlaySequence(sequenceId) {
        //llamo a la logica de ejecutar la funcion 
        logic.ottoController('executeSequenceById', '', sequenceId)
            .then(response => {
                console.log('Sequence executed', response)
            })
            .catch(error => {
                console.error('Error al ejecutar la secuencia:', error)
                context.handleError(error)
            })

    }



    function handleDeleteSequence(sequenceId) {

        logic.deleteSequence(sequenceId)
            .then(response => {
                console.log('Sequence deleted')
                setReloadSequences(prev => !prev)
            })
            .catch(error => {
                console.error('Error al ejecutar la secuencia:', error)
                context.handleError(error)
            })

    }

    //// TO DO ////

    function handleEditSequence() {

    }



    return (
        <div className="container">
            <h2>Controller</h2>


            <div>
                <h3>Actions</h3>
                <Button onClick={() => handleAction('walkForward')}>Forward</Button>
                <Button onClick={() => handleAction('walkBackward')}>Backward</Button>
                <Button onClick={() => handleAction('turnRight')}>Turn Right</Button>
                <Button onClick={() => handleAction('turnLeft')}>Turn Left</Button>
                <Button onClick={() => handleAction('stop')}>Stop</Button>
                <Button onClick={() => handleAction('sayHi')}>Say Hi</Button>
                <Button onClick={() => handleAction('clearLCD')}>Clear LCD</Button>
                <Button onClick={() => handleAction('jump')}>Jump</Button>
                <Button onClick={() => handleAction('endSequence')}>End Sequence</Button>
            </div>


            <Button onClick={toggleSequencesVisibility}>
                {showSequences ? 'Hide' : 'Show'} Sequences
            </Button>

            {/* si el boton de showSequences está activo, haz lo siguiente */}
            {showSequences && (
                <div>
                    <h3>Sequences</h3>
                    {sequences.length > 0 ? sequences.map(sequence => (
                        <div key={sequence.id} style={{ marginBottom: '20px' }}>
                            <h4>Sequence ID: {sequence.id}</h4>
                            <p>Created at: {new Date(sequence.createdAt).toLocaleString()}</p>
                            {/* compruebo si la secuencia tiene movimientos o está vacia */}
                            {sequence.movements.length > 0 ? (
                                <div>
                                    <h5>Movements:</h5>
                                    <ul>
                                        {sequence.movements.map(movement => (
                                            <li key={movement.id}>{`${movement.name} (Type: ${movement.type}, Ordinal: ${movement.ordinal})`}</li>
                                            // convierte un objeto Date a una cadena de texto
                                        ))}
                                    </ul>
                                </div>
                            ) : <p>No movements in this sequence.</p>}
                            {/* Botones de acción para cada secuencia */}
                            <div>
                                <Button onClick={() => handlePlaySequence(sequence.id)}>Play</Button>
                                <Button onClick={() => handleDeleteSequence(sequence.id)}>Delete</Button>
                                <Button onClick={() => handleEditSequence(sequence.id)}>Edit</Button>
                            </div>
                        </div>
                    )) : <p>No sequences found.</p>}
                </div>
            )}
        </div>
    )
}