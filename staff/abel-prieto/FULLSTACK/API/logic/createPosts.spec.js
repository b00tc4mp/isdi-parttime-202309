import mongoose from 'mongoose'
import { expect } from 'chai'
import dotenv from 'dotenv'

import createPosts from './createPosts.js'
import { NotFoundError } from './errors.js'
import { Post, User } from '../data/models.js'

dotenv.config()

describe("createPosts", () => {
  before(() => mongoose.connect(process.env.TEST_MONGODB_URL))

  beforeEach(() => Post.deleteMany())
  beforeEach(() => User.deleteMany())

  // CASO POSITIVO
  it("success on NEW post", () => {
    return User.create({ name: "Le Chuga", email: "le@chuga.com", password: "123123123" })
      .then((user) => {
        return createPosts(user.id, "https://www.shutterstock.com/image-photo/fresh-lettuce-on-white-background-260nw-1787554472.jpg", "Hola Mundo!")
      })
  })

  // CASO NEGATIVO - Not Found
  it("fails on user not found", () => {
    return createPosts("659eb75801ced6e04a9df7a1","https://www.shutterstock.com/image-photo/fresh-lettuce-on-white-background-260nw-1787554472.jpg", "Hola Mundo!")
      .then(() => {
        throw new Error("should not reach this point!")
      })
      .catch((error) => {
        expect(error).to.be.instanceOf(NotFoundError)
        expect(error.message).to.equal("user not found")
      })
  })

  after(() => mongoose.disconnect())
})
