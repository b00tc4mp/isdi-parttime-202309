import { errors } from 'shared'
import { Resource } from '../data/models.js'
const { SystemError, NotFoundError } = errors

function deleteResource(resourceId) {
  return Resource.findOneAndDelete({ _id: resourceId })
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((deletedResource) => {
      if (!deletedResource) {
        throw new NotFoundError(`Resource with id ${resourceId} not found`)
      }
    })
}

export default deleteResource
