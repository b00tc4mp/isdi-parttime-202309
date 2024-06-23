import { errors } from 'shared'
const { SystemError } = errors

import { Resource } from '../data/models.js'

function retrieveResources() {
  return Resource.find()
    .select('-__v')
    .lean()
    .catch((error) => {
      throw new SystemError(error.message)
    })
    .then((resources) => {
      return resources
    })
}

export default retrieveResources
