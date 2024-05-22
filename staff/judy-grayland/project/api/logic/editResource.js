import { errors } from 'shared'
import { Resource } from '../data/models.js'
const { SystemError, NotFoundError } = errors

function editResource(resourceId, newData) {
  return Resource.findOne({ _id: resourceId })
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((resource) => {
      if (!resource) {
        throw new NotFoundError(`Resource with id ${resourceId} not found`)
      }

      //Object.assign is a JS method used to update an object with new values. In the context of updating a resource (resource), it helps merge the new data (newData) into the existing resource object, ensuring only the provided fields are updated while keeping the rest of the resource intact.
      Object.assign(resource, newData)

      // .save() is a method provided by Mongoose to save a document to the db.
      return resource.save().catch((error) => {
        throw new SystemError(error.message)
      })
    })
}

export default editResource
