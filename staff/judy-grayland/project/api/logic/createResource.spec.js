import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'
import random from './helpers/random.js'
import { errors } from 'shared'
const { DuplicityError, ContentError } = errors

import { Resource } from '../data/models.js'
import createResource from './createResource.js'

dotenv.config()

describe('createResource', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))
  beforeEach(() => Resource.deleteMany())

  // HAPPY path - book
  it('succeeds on new book being correctly created', () => {
    const title = random.title()
    const description = random.description()
    const resourceType = 'book'
    const tag = ['lgbt+', 'diversidad funcional']
    const link = random.link()
    const image = random.image()
    const author = 'Roald Dahl'
    const ageRange = ['infantil', '6-7']

    return createResource({
      title,
      description,
      resourceType,
      link,
      tag,
      image,
      author,
      ageRange,
    }).then((value) => {
      expect(value).to.be.undefined
      return Resource.findOne({ title: title }).then((resource) => {
        expect(resource.description).to.equal(description)
        expect(resource.resourceType).to.equal(resourceType)
        // In Mongoose, when you retrieve an array field from a document, it returns a JS array object, not a plain array. This means that direct comparison using expect(resource.tag).to.equal(tag) may fail because they are two different array objects, even though they contain the same elements. To fix this, you can use Chai's deep equality assertion deep.equal() instead of equal() to compare arrays, because it looks manually through each element and compares them:
        expect(resource.tag).to.deep.equal(tag)
        expect(resource.link).to.equal(link)
        expect(resource.image).to.equal(image)
        expect(resource.author).to.equal(author)
        expect(resource.ageRange).to.deep.equal(ageRange)
      })
    })
  })

  // HAPPY path - activity
  it('succeeds on new activity being correctly created', () => {
    const title = random.title()
    const description = random.description()
    const resourceType = 'activity'
    const tag = ['igualdad de genero']
    const link = random.link()
    const image = random.image()
    const author = ''
    const ageRange = ''

    return createResource({
      title,
      description,
      resourceType,
      tag,
      link,
      image,
      author,
      ageRange,
    }).then((value) => {
      expect(value).to.be.undefined
      return Resource.findOne({ title: title }).then((resource) => {
        expect(resource.description).to.equal(description)
        expect(resource.link).to.equal(link)
        expect(resource.resourceType).to.equal(resourceType)
        expect(resource.tag).to.deep.equal(tag)
        expect(resource.image).to.equal(image)
        expect(resource.author).to.equal('')
        expect(resource.ageRange).to.deep.equal([''])
      })
    })
  })

  // UNHAPPY path - activity on missing required field for all resources
  it('fails on missing resourceType', () => {
    const title = random.title()
    const description = random.description()
    const resourceType = ''
    const tag = ['igualdad de genero']
    const link = random.link()
    const image = random.image()
    const author = ''
    const ageRange = ''

    return createResource({
      title,
      description,
      resourceType,
      tag,
      link,
      image,
      author,
      ageRange,
    })
      .then((value) => {
        throw new Error('should not reach this point')
      })
      .catch((error) => {
        expect(error).to.be.instanceof(ContentError)
        expect(error.message).to.equal('resourceType is empty')
      })
  })
})
