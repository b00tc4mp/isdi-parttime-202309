import { validate, errors } from 'com'

import { User, Sample } from '../data/models.js'

const { SystemError, NotFoundError } = errors

function togglefavSample(userId, sampleId) {
    validate.text(userId, 'user id')
    validate.text(sampleId, 'sample id')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('user not found')

            return Sample.findById(sampleId).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(sample => {
                    if (!sample)
                        throw new NotFoundError('sample not found')

                    const index = user.favSamples.findIndex(sampleObjectId => sampleObjectId.toString() === sampleId)

                    if (index < 0)
                        user.favSamples.push(sampleId)
                    else
                        user.favSamples.splice(index, 1)

                    return user.save()
                        .catch(error => { throw new SystemError(error.message) })
                        .then(() => { })
                })
        })
}

export default togglefavSample
