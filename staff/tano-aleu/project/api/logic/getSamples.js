
import { SystemError } from 'com/errors.js'
import { Sample } from '../data/models.js'

function getSamples() {
    return (async () => {
        try {
            const samples = await Sample.find({}, 'filePath').lean()
            return samples.map(sample => sample.filePath)
        } catch (error) {
            throw new SystemError(error.message)
        }
    })()
}

export default getSamples
