import { validate, errors } from 'shared'
const { SystemError, DuplicityError } = errors

import { Resource } from '../data/models.js'

function createResource({
  title,
  description,
  resourceType,
  link,
  image,
  author,
  ageRange,
}) {
  validate.text(title, 'title')
  validate.text(description, 'description')
  validate.resourceType(resourceType, 'resourceType')
  validate.text(link, 'link')

  return Resource.create({
    title,
    description,
    resourceType,
    link,
    image,
    author,
    ageRange,
  })
    .catch((error) => {
      if (error.code === 11000) {
        throw new DuplicityError('resource already exists')
      }
      throw new SystemError(error.message)
    })
    .then((resource) => {})
}

export default createResource
