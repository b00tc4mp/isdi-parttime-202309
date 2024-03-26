import { validate, errors } from 'com'
import { User, Movement, SequenceMovement } from '../data/models.js'
const { SystemError, NotFoundError } = errors

function retrieveSequence(userId) {
    validate.id(userId, 'user id')

    return (async () => {

        let user
        try {
            user = await User.findById(userId).lean() //busco el usuario
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!user)
            throw new NotFoundError('User not found')



        try {
            //recupero las secuencias que son del usuario por el id
            let userSequences = await SequenceMovement.find({ userId: userId })
            //mapeo las secuencias
            userSequences = userSequences.map(sequence => {
                const transformedSequence = {
                    id: sequence._id.toString(),
                    movements: sequence.movements.map(movement => ({
                        id: movement._id.toString(),
                        name: movement.name,
                        type: movement.type,
                        ordinal: movement.ordinal
                    })),
                    createdAt: sequence.createdAt
                }

                return transformedSequence
            })
            console.log(JSON.stringify(userSequences, null, 2)) //convierto el objeto en json
            // tiene ese formato (value, replacer, space). Value representa el objeto
            // replacer es por si queremos filtrar, como no, se pone null
            // space es el num de espacios
            return userSequences
        } catch (error) {
            throw new SystemError(error.message)
        }


    })()



}

export default retrieveSequence