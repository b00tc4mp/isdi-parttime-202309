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
      title: 'Bee Bop Bops',
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

  //   // HAPPY path - activity
  //   it('succeeds on new activity being correctly created', () => {
  //     const title = random.title()
  //     const description = random.description()
  //     const resourceType = 'activity'
  //     const topic = ['igualdad de genero']
  //     const link = random.link()
  //     const image = random.image()
  //     const author = ''
  //     const ageRange = ''

  //     return createResource({
  //       title,
  //       description,
  //       resourceType,
  //       topic,
  //       link,
  //       image,
  //       author,
  //       ageRange,
  //     }).then((value) => {
  //       expect(value).to.be.undefined
  //       return Resource.findOne({ title: title }).then((resource) => {
  //         expect(resource.description).to.equal(description)
  //         expect(resource.link).to.equal(link)
  //         expect(resource.resourceType).to.equal(resourceType)
  //         expect(resource.topic).to.deep.equal(topic)
  //         expect(resource.image).to.equal(image)
  //         expect(resource.author).to.equal('')
  //         expect(resource.ageRange).to.deep.equal([''])
  //       })
  //     })
  //   })
  // })

  // // UNHAPPY path - activity on missing required field for all resources
  // it('fails on missing resourceType', async () => {
  //   const title = random.title()
  //   const description = random.description()
  //   const resourceType = ''
  //   const topic = ['bullying']
  //   const link = random.link()
  //   const image = random.image()
  //   const author = ''
  //   const ageRange = ''

  //   await expect(() => {
  //     createResource({
  //       title,
  //       description,
  //       resourceType,
  //       topic,
  //       link,
  //       image,
  //       author,
  //       ageRange,
  //     }).to.throw(ContentError, 'resourceType is empty')
  //   })
  // })

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
