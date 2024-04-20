import { validate, errors } from 'shared'
const { SystemError, DuplicityError } = errors

import { Resource } from '../data/models.js'

function createResource({
  title,
  description,
  resourceType,
  tag,
  link,
  image,
  author,
  ageRange,
}) {
  validate.text(title, 'title')
  validate.text(description, 'description')
  validate.resourceType(resourceType, 'resourceType')
  validate.tagArray(tag, 'tag array')

  if (resourceType === 'activity') {
    validate.text(link, 'link')
    validate.text(image, 'image')
  }
  if (resourceType === 'book') {
    validate.text(author, 'author')
    validate.text(image, 'image')
    validate.ageRange(ageRange, 'ageRange')
  }

  if (resourceType === 'specialDate') {
    validate.text(link, 'link')
  }

  return Resource.create({
    title,
    description,
    resourceType,
    tag,
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
