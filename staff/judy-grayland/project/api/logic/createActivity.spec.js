import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import { errors } from 'shared'
const { DuplicityError, ContentError } = errors

import { Activity } from '../data/models.js'
import createActivity from './createActivity.js'

dotenv.config()

describe('createActivity', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))
  beforeEach(() => Activity.deleteMany())

  // HAPPY path
  it('succeeds on new activity begin correctly created', () => {
    const title = random.title()
    const description = random.description()
    const image = random.image()
    const link = random.link()

    return createActivity(title, description, image, link).then((value) => {
      expect(value).to.be.undefined
      return Activity.findOne({ title: title }).then((activity) => {
        expect(activity.description).to.equal(description)
        expect(activity.image).to.equal(image)
        expect(activity.link).to.equal(link)
      })
    })
  })

  it('fails on already existing activity', () => {
    const title = random.title()
    const description = random.description()
    const image = random.image()
    const link = random.link()

    return Activity.create({ title, description, image, link }).then(
      (activity) => {
        return createActivity(title, description, image, link)
          .then(() => {
            throw new Error('should not reach this point')
          })
          .catch((error) => {
            expect(error).to.be.instanceOf(DuplicityError)
            expect(error.message).to.equal('activity already exists')
          })
      }
    )
  })

  it('fails on empty field', () => {
    const title = random.title()
    const description = random.description()
    const image = ''
    const link = random.link()

    // our validate.js catches the error and throws a ContentError because the image field is empty. We don't need to put a separate if logic that throws an error if one of the parameters(title, descrip, image or link) is missing. If we add that, it doesn't catch the error.
    try {
      return createActivity(title, description, image, link)
    } catch (error) {
      expect(error).to.be.instanceOf(ContentError)
      expect(error.message).to.equal('image is empty')
    }
  })

  after(() => mongoose.disconnect())
})
