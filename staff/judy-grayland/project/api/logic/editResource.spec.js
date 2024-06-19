import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import { errors } from 'shared'
const { NotFoundError, ContentError } = errors

import { Resource } from '../data/models.js'
import editResource from './editResource.js'

dotenv.config()

describe('edit resource', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))
  // beforeEach(() => Resource.deleteMany())

  // HAPPY path - book
  it('succeeds on book being correctly edited', () => {
    const initialData = {
      title: random.title(),
      description: random.description(),
      resourceType: 'book',
      topic: ['lgbt+', 'diversidad funcional'],
      image: random.image(),
      author: 'Roald Dahl',
    }

    const newData = {
      title: 'Oh La La 6',
      author: 'Billy Bee Boo',
    }
    return Resource.create(initialData).then((resource) => {
      return editResource(resource._id, newData)
        .then(() => Resource.findOne(resource._id))
        .then((updatedResource) => {
          expect(updatedResource.title).to.equal(newData.title)
          expect(updatedResource.description).to.equal(initialData.description)
          expect(updatedResource.resourceType).to.equal(
            initialData.resourceType
          )
          expect(updatedResource.topic).to.deep.equal(initialData.topic)
          expect(updatedResource.image).to.equal(initialData.image)
          expect(updatedResource.author).to.equal(newData.author)
        })
    })
  })

  // HAPPY path - activity
  it('succeeds on activity being correctly edited', () => {
    const initialData = {
      title: random.title(),
      description: random.description(),
      resourceType: 'activity',
      topic: ['igualdad de genero'],
      link: random.link(),
      image: random.image(),
    }

    const newData = {
      topic: ['bullying'],
    }

    return Resource.create(initialData).then((resource) => {
      return editResource(resource._id, newData)
        .then(() => Resource.findOne(resource._id))
        .then((updatedResource) => {
          expect(updatedResource.title).to.equal(initialData.title)
          expect(updatedResource.link).to.equal(initialData.link)
          expect(updatedResource.resourceType).to.equal(
            initialData.resourceType
          )
          expect(updatedResource.topic).to.deep.equal(newData.topic)
          expect(updatedResource.image).to.equal(initialData.image)
        })
    })
  })

  // UNHAPPY path - activity on missing required field for all resources
  it('fails on activity being edited with empty field', () => {
    const initialData = {
      title: random.title(),
      description: random.description(),
      resourceType: 'activity',
      topic: ['igualdad de genero'],
      link: random.link(),
      image: random.image(),
    }

    const newData = {
      title: '',
    }

    return Resource.create(initialData).then((resource) => {
      return editResource(resource._id, newData)
        .then(() => {
          throw new Error('should not reach this point')
        })
        .catch((error) => {
          expect(error).to.be.instanceOf(ContentError)
          expect(error.message).to.equal('title is empty')
        })
    })
  })

  // // UNHAPPY path - book on already existing resources
  // it('fails on already existing resource', () => {
  //   const title = random.title()
  //   const description = random.description()
  //   const resourceType = 'activity'
  //   const topic = ['diversidad cultural', 'diversidad funcional']
  //   const link = random.link()
  //   const image = random.image()
  //   const author = ''
  //   const ageRange = ''

  //   return Resource.create({
  //     title,
  //     description,
  //     resourceType,
  //     topic,
  //     link,
  //     image,
  //     author,
  //     ageRange,
  //   }).then((resource) => {
  //     return createResource({
  //       title,
  //       description,
  //       resourceType,
  //       topic,
  //       link,
  //       image,
  //       author,
  //       ageRange,
  //     })
  //       .then(() => {
  //         throw new Error('should not reach this point')
  //       })
  //       .catch((error) => {
  //         expect(error).to.be.instanceOf(DuplicityError)
  //         expect(error.message).to.equal('resource already exists')
  //       })
  //   })
})
