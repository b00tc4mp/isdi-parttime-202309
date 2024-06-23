import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import { errors } from 'shared'
const { NotFoundError, SystemError } = errors

import { Resource } from '../data/models.js'
import createResource from './createResource.js'
import deleteResource from './deleteResource.js'

dotenv.config()

describe('delete resource', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))
  // beforeEach(() => Resource.deleteMany())

  // HAPPY path
  it('succeeds on resource being deleted', () => {
    const title = random.title()
    const description = random.description()
    const resourceType = 'book'
    const topic = ['lgbt+', 'diversidad funcional']
    const link = random.link()
    const image = random.image()
    const author = 'Roald Dahl'
    const ageRange = ['infantil', '6-7']

    return createResource({
      title,
      description,
      resourceType,
      link,
      topic,
      image,
      author,
      ageRange,
    }).then((value) => {
      expect(value).to.be.undefined
      return Resource.findOne({ title: title }).then((resource) => {
        expect(resource.description).to.equal(description)
        expect(resource.resourceType).to.equal(resourceType)
        // In Mongoose, when you retrieve an array field from a document, it returns a JS array object, not a plain array. This means that direct comparison using expect(resource.topic).to.equal(topic) may fail because they are two different array objects, even though they contain the same elements. To fix this, you can use Chai's deep equality assertion deep.equal() instead of equal() to compare arrays, because it looks manually through each element and compares them:
        expect(resource.topic).to.deep.equal(topic)
        expect(resource.link).to.equal(link)
        expect(resource.image).to.equal(image)
        expect(resource.author).to.equal(author)
        expect(resource.ageRange).to.deep.equal(ageRange)
        return deleteResource({ _id: resource._id }).then((deletedResource) => {
          expect(deletedResource).to.be.undefined

          return Resource.findById(resource._id).then((resource) => {
            expect(resource).to.be.null
          })
        })
      })
    })
  })

  // UNHAPPY path
  it('fails on nonexisting resource', () => {
    const id = random.id()

    return deleteResource(id)
      .then(() => {
        throw new Error('should not reach this point')
      })
      .catch((error) => {
        expect(error).to.be.instanceOf(NotFoundError)
        expect(error.message).to.equal(`Resource with id ${id} not found`)
      })
  })
})
