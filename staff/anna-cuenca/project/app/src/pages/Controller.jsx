

// import { useState, useEffect } from 'react'
// import { Button } from '../library/index'
// import logic from '../logic'



// import { useContext } from '../hooks'
// import session from '../logic/session'

// let userId = session.sessionUserId
// console.log(userId)




// export default function Controller() {
//     const context = useContext()
//     const [userData, setUserData] = useState({ name: '', robot: '' })
//     const [sequences, setSequences] = useState([])
//     const [showSequences, setShowSequences] = useState(false)
//     const [reloadSequences, setReloadSequences] = useState(false)

//     const [editingSequenceId, setEditingSequenceId] = useState(null)


//     useEffect(() => {
//         logic.retrieveUserInfo()
//             .then(user => {
//                 console.log(user)
//                 setUserData({ name: user.name, robot: user.robot })


//             })
//             .catch(error => {
//                 context.handleError(error)
//             })
//         logic.retrieveSequence()
//             .then(sequences => {
//                 setSequences(sequences)
//             })
//             .catch(error => {
//                 context.handleError(error)
//             })
//     }, [reloadSequences])

//     const toggleSequencesVisibility = () => setShowSequences(!showSequences)

//     const handleAction = async (action) => {
//         const userId = session.sessionUserId
//         console.log(userId)

//         if (!userId) {
//             console.error('No userId found')
//             return
//         }
//         try {


//             if (action === 'sayHi') {
//                 const messagePart1 = `Hola ${userData.name}`
//                 const messagePart2 = `Soy ${userData.robot}`
//                 await logic.ottoController(action, messagePart1, null, userId)

//                 setTimeout(async () => {
//                     // Limpiar la pantalla
//                     await logic.ottoController('clearLCD', '', null, userId)

//                     // Mensaje parte 2
//                     setTimeout(async () => {
//                         await logic.ottoController(action, messagePart2, null, userId)
//                     }, 1000)
//                 }, 2000)

//             } else if (action === 'endSequence') {

//                 //esto lo podría quitar...

//                 await logic.ottoController(action, '', null, userId)
//                 console.log(`${action} action executed successfully`)

//                 //actualizo 
//                 setReloadSequences(prev => !prev)
//             } else {

//                 await logic.ottoController(action, '', null, userId)
//                 console.log(`${action} action executed successfully`)
//                 setReloadSequences(prev => !prev)
//             }
//         } catch (error) {
//             console.error(`Error executing ${action} action:`, error)
//             context.handleError(error)
//         }
//     }



//     function handlePlaySequence(sequenceId) {
//         //llamo a la logica de ejecutar la funcion 
//         logic.ottoController('executeSequenceById', '', sequenceId)
//             .then(response => {
//                 console.log('Sequence executed', response)
//             })
//             .catch(error => {
//                 console.error('Error al ejecutar la secuencia:', error)
//                 context.handleError(error)
//             })

//     }

//     function handleDeleteSequence(sequenceId) {

//         logic.deleteSequence(sequenceId)
//             .then(response => {
//                 console.log('Sequence deleted')
//                 setReloadSequences(prev => !prev)
//             })
//             .catch(error => {
//                 console.error('Error al ejecutar la secuencia:', error)
//                 context.handleError(error)
//             })

//     }



//     function handleEditSequence(sequenceId) {

//         if (editingSequenceId === sequenceId) {
//             //si el usuario vuelve a darle al boton, se desactiva
//             setEditingSequenceId(null)
//         } else {
//             //sino activa la edicion
//             setEditingSequenceId(sequenceId)

//         }
//     }

//     function handleEditMovement(sequenceId, movementId, action) {
//         logic.editSequence(sequenceId, movementId, action)
//             .then(() => {
//                 // recargamos las secuencias
//                 setReloadSequences(prev => !prev)
//             })
//             .catch(error => {
//                 console.error('Error editing movement:', error)
//                 context.handleError(error)
//             })
//     }



//     return (
//         <div className="controller-container flex flex-col justify-between">


//             {/* Sección de acciones */}
//             <div className="controller-wrapper">
//                 {/* <h2 className="h2-robotic-controller">Controller</h2> */}
//                 {/* <h3>Actions</h3> */}
//                 <div className="controller-actions">
//                     <button className="button-forward button" onClick={() => handleAction('walkForward')}></button>
//                     <button className="button-stop button" onClick={() => handleAction('stop')}></button>
//                     <button className="button-backward button" onClick={() => handleAction('walkBackward')}></button>
//                     <button className="button-right button" onClick={() => handleAction('turnRight')}></button>
//                     <button className="button-left button" onClick={() => handleAction('turnLeft')}></button>

//                 </div>
//                 <h3>Comunication</h3>
//                 <button className="button-sayHi" onClick={() => handleAction('sayHi')}>Say Hi</button>
//                 <button className="button-clearLCD" onClick={() => handleAction('clearLCD')}>Clear LCD</button>
//                 <h3>Movements</h3>
//                 <div className="movement-buttons">
//                     <Button onClick={() => handleAction('jump')}>Jump</Button>
//                     <Button onClick={() => handleAction('snakeMove')}>Snake</Button>
//                     <Button onClick={() => handleAction('moonwalker')}>Moonwalker</Button>
//                     <Button onClick={() => handleAction('crusaito')}>Crusaito</Button>
//                     <Button onClick={() => handleAction('swing')}>Swing</Button>
//                     <Button onClick={() => handleAction('upDown')}>upDown</Button>
//                     <Button onClick={() => handleAction('kickLeft')}>kickLeft</Button>
//                     <Button onClick={() => handleAction('noGravity')}>noGravity</Button>
//                     <Button onClick={() => handleAction('shakeLegRight')}>Shake Leg Right</Button>
//                     <Button onClick={() => handleAction('shakeLegLeft')}>Shake Leg Left</Button>
//                     <Button onClick={() => handleAction('endSequence')}>End Sequence</Button>


//                     {/* Sección para mostrar/ocultar secuencias */}
//                     <Button onClick={toggleSequencesVisibility}>
//                         {showSequences ? 'Hide' : 'Show'} Sequences
//                     </Button>

//                 </div>

//                 {/* Sección de secuencias */}
//                 {showSequences && (
//                     <div>
//                         <h3>Sequences</h3>


//                         {sequences.length > 0 ? sequences.map(sequence => (
//                             <div key={sequence.id} style={{ marginBottom: '20px' }}>
//                                 <h4>Sequence ID: {sequence.id}</h4>
//                                 <p>Created at: {new Date(sequence.createdAt).toLocaleString()}</p>
//                                 <h5>Movements:</h5>
//                                 <ul>
//                                     {sequence.movements.map((movement, index) => (
//                                         <li key={movement.id}>
//                                             {`${movement.name} (Type: ${movement.type}, Ordinal: ${movement.ordinal})`}
//                                             <p>Index: {index}</p>
//                                             {editingSequenceId === sequence.id && (
//                                                 <>
//                                                     <Button onClick={() => handleEditMovement(sequence.id, movement.id, 'delete')}>❌</Button>
//                                                     {index !== 0 && <Button onClick={() => handleEditMovement(sequence.id, movement.id, 'moveUp')}>⬆️</Button>}
//                                                     {index !== sequence.movements.length - 1 && <Button onClick={() => handleEditMovement(sequence.id, movement.id, 'moveDown')}>⬇️</Button>}
//                                                 </>
//                                             )}
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <div>
//                                     <Button onClick={() => handlePlaySequence(sequence.id)}>Play</Button>
//                                     <Button onClick={() => handleDeleteSequence(sequence.id)}>Delete</Button>
//                                     <Button onClick={() => handleEditSequence(sequence.id)}>{editingSequenceId === sequence.id ? 'Finish Edit' : 'Edit'}</Button>
//                                 </div>
//                             </div>
//                         )) : <p>No sequences found.</p>}

//                     </div>
//                 )}
//             </div>


//         </div>
//     )


// }


///



import { useState, useEffect } from 'react'
import { Button } from '../library/index'
import logic from '../logic'
import { useContext } from '../hooks'
import session from '../logic/session'

export default function Controller() {
    const context = useContext()
    const [userData, setUserData] = useState({ name: '', robot: '' })
    const [sequences, setSequences] = useState([])
    const [showSequences, setShowSequences] = useState(false)
    const [reloadSequences, setReloadSequences] = useState(false)
    const [editingSequenceId, setEditingSequenceId] = useState(null)

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
                setSequences(sequences)
            })
            .catch(error => {
                context.handleError(error)
            })
    }, [reloadSequences])

    const toggleSequencesVisibility = () => setShowSequences(!showSequences)

    const handleAction = async (action) => {
        const userId = session.sessionUserId
        console.log(userId)

        if (!userId) {
            console.error('No userId found')
            return
        }
        try {


            if (action === 'sayHi') {
                const messagePart1 = `Hola ${userData.name}`
                const messagePart2 = `Soy ${userData.robot}`
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

                //esto lo podría quitar...

                await logic.ottoController(action, '', null, userId)
                console.log(`${action} action executed successfully`)

                //actualizo 
                setReloadSequences(prev => !prev)
            } else {

                await logic.ottoController(action, '', null, userId)
                console.log(`${action} action executed successfully`)
                setReloadSequences(prev => !prev)
            }
        } catch (error) {
            console.error(`Error executing ${action} action:`, error)
            context.handleError(error)
        }
    }



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



    function handleEditSequence(sequenceId) {

        if (editingSequenceId === sequenceId) {
            //si el usuario vuelve a darle al boton, se desactiva
            setEditingSequenceId(null)
        } else {
            //sino activa la edicion
            setEditingSequenceId(sequenceId)

        }
    }

    function handleEditMovement(sequenceId, movementId, action) {
        logic.editSequence(sequenceId, movementId, action)
            .then(() => {
                // recargamos las secuencias
                setReloadSequences(prev => !prev)
            })
            .catch(error => {
                console.error('Error editing movement:', error)
                context.handleError(error)
            })
    }

    if (showSequences) {
        return (
            <div className="sequences-popup">
                <h3 className="h3-robotic-controller">Sequences</h3>
                {sequences.length > 0 ? sequences.map(sequence => (
                    // <div key={sequence.id} style={{ marginBottom: '20px' }}>
                    <div key={sequence.id} className="mb-5 p-4 border border-gray-200 rounded-lg shadow">
                        {/* <h4>Sequence ID: {sequence.id}</h4> */}
                        <p className="created-at">Created at: {new Date(sequence.createdAt).toLocaleString()}</p>
                        <h5 className="h5-movements">Movements:</h5>
                        <ul>
                            <div className="movements-list">
                                {sequence.movements.map((movement, index) => (
                                    <li key={movement.id}>
                                        {/* {`${movement.name} (Type: ${movement.type}, Ordinal: ${movement.ordinal})`} */}
                                        {`${movement.name}`}
                                        {/* <p>Index: {index}</p> */}

                                        {editingSequenceId === sequence.id && (
                                            <>
                                                <div className="edit-movement">
                                                    <button className="button-deleteMovement" onClick={() => handleEditMovement(sequence.id, movement.id, 'delete')}>❌</button>
                                                    {index !== 0 && <button className="button-upMovement" onClick={() => handleEditMovement(sequence.id, movement.id, 'moveUp')}>⬆️</button>}
                                                    {index !== sequence.movements.length - 1 && <button className="button-downMovement" onClick={() => handleEditMovement(sequence.id, movement.id, 'moveDown')}>⬇️</button>}
                                                </div>
                                            </>
                                        )}
                                    </li>

                                ))}
                            </div>
                        </ul>
                        <div className="edit-buttons">
                            <button className="button-playSequence button" onClick={() => handlePlaySequence(sequence.id)}>Play</button>
                            <button className="button-deleteSequence button" onClick={() => handleDeleteSequence(sequence.id)}>Delete</button>
                            <button className="button-editSequence button" onClick={() => handleEditSequence(sequence.id)}>{editingSequenceId === sequence.id ? 'Finish Edit' : 'Edit'}</button>
                        </div>
                    </div>
                )) : <p>No sequences found.</p>}
                <button className="button-hideSequences" onClick={toggleSequencesVisibility}>Hide Sequences</button>
            </div>
        )
    }

    return (
        <div className="controller-container flex flex-col justify-between">
            <h1 className="h1-robotic-controller">Control your robot</h1>
            <div className="controller-wrapper">
                <h3 className="h3-robotic-controller">Direction</h3>
                {/* Sección de acciones y demás componentes */}
                <div className="controller-actions">
                    <button className="button-forward button" onClick={() => handleAction('walkForward')}></button>
                    <button className="button-stop button" onClick={() => handleAction('stop')}></button>
                    <button className="button-backward button" onClick={() => handleAction('walkBackward')}></button>
                    <button className="button-right button" onClick={() => handleAction('turnRight')}></button>
                    <button className="button-left button" onClick={() => handleAction('turnLeft')}></button>
                </div>
                <h3 className="h3-robotic-controller">Comunication</h3>
                <div className="comunication-buttons">
                    <button className="button-sayHi" onClick={() => handleAction('sayHi')}>Say Hi</button>
                    <button className="button-clearLCD" onClick={() => handleAction('clearLCD')}>Clear LCD</button>
                </div>
                <h3 className="h3-robotic-controller">Movements</h3>
                <div className="movement-buttons">
                    <button className="button-jump" onClick={() => handleAction('jump')}>Jump</button>
                    <button className="button-snakeMove" onClick={() => handleAction('snakeMove')}>Snake</button>
                    <button className="button-moonwalker" onClick={() => handleAction('moonwalker')}>Moonwalker</button>
                    <button className="button-crusaito" onClick={() => handleAction('crusaito')}>Crusaito</button>
                    <button className="button-swing" onClick={() => handleAction('swing')}>Swing</button>
                    <button className="button-upDown" onClick={() => handleAction('upDown')}>upDown</button>
                    <button className="button-kickLeft" onClick={() => handleAction('kickLeft')}>kickLeft</button>
                    <button className="button-noGravity" onClick={() => handleAction('noGravity')}>noGravity</button>
                    <button className="button-shakeLegRight" onClick={() => handleAction('shakeLegRight')}>Shake Leg Right</button>
                    <button className="button-shakeLegLeft" onClick={() => handleAction('shakeLegLeft')}>Shake Leg Left</button>
                    <button className="button-endSequence" onClick={() => handleAction('endSequence')}>End Sequence</button>


                    {/* Botón para mostrar/ocultar secuencias */}
                    <button className="button-showSequence" onClick={toggleSequencesVisibility}>Show Sequences</button>
                </div>
                <div className="finalDance">
                    <button className="button-finalDance" onClick={() => handleAction('finalDance')}>Party Time</button>
                </div>
            </div>
        </div>
    )
}
