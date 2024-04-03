import { validate, errors } from 'shared'
const { SystemError, DuplicityError } = errors

import { Activity } from '../data/models.js'

function createActivity(title, description, image, link) {
  validate.text(title, 'title')
  validate.text(description, 'description')
  validate.text(image, 'image')
  validate.text(link, 'link')

  //   return User.findById(userId)
  //     .lean()
  //     .catch((error) => {
  //       throw new SystemError(error.message)
  //     })
  //     .then((user) => {
  //       if (!user) {
  //         throw new NotFoundError('user not found')
  //       }

  return Activity.create({
    title,
    description,
    image,
    link,
  }).catch((error) => {
    if (error.code === 11000) {
      throw new DuplicityError('activity already exists')
    }
    throw new SystemError(error.message)
  })
}

export default createActivity
