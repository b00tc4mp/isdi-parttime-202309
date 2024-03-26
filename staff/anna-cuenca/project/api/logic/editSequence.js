import { validate, errors } from 'com'
import { User, Movement, SequenceMovement } from '../data/models.js'
const { SystemError, NotFoundError, ValidationError } = errors

function editSequence(sequenceId, movementId, action) {
    validate.id(sequenceId, 'sequence id')
    validate.id(movementId, 'movement id')


    return (async () => {

        //primero busco la secuencia
        let sequence

        try {
            sequence = await SequenceMovement.findById(sequenceId).populate('movements')
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!sequence) {
            throw new NotFoundError('Sequence not found')
        }

        // pongo en la variable movements, los movimientos de la secuencia

        const movements = sequence.movements

        // dentro de esos movimientos, busco por id, el movimiento que me pasan
        const movementIndex = movements.findIndex(movement => movement.id === movementId)

        // si el index es -1, es que no ha encontrado el movimiento
        if (movementIndex === -1) {
            throw new NotFoundError('Movement not found in sequence')
        }

        //hago un switch con las diferentes acciones que puedo hacer una vez tengo el movimiento

        switch (action) {
            case 'delete':
                movements.splice(movementIndex, 1)
                break;
            case 'moveUp':
                if (movementIndex === 0) {
                    //compruebo si la posición ya es la primera
                    throw new ValidationError('Movement is already at the top')
                }
                // Intercambiar la posición con el movimiento anterior
                [movements[movementIndex], movements[movementIndex - 1]] = [movements[movementIndex - 1], movements[movementIndex]]
                break;
            case 'moveDown':
                if (movementIndex === movements.length - 1) {
                    throw new ValidationError('Movement is already at the bottom')
                }
                // Intercambiar la posición con el movimiento siguiente
                [movements[movementIndex], movements[movementIndex + 1]] = [movements[movementIndex + 1], movements[movementIndex]]
                break;
            default:
                throw new ValidationError('Invalid action')
        }

        // Guardo los cambios en la base de datos
        await sequence.save()

        return sequence // Devuelvo la secuencia actualizada
    })()
}

export default editSequence