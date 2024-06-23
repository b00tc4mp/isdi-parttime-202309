import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { expect } from 'chai'

import retrieveResources from './retrieveResources.js'

dotenv.config()

describe('retrieveResources', () => {
  before(() => mongoose.connect(process.env.MONGODB_URL_TEST))

  it('succeeds', () => {
    return retrieveResources().then(() => {
      expect()
    })
  })
})
