import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { expect } from 'chai'
import uploadFile from '../logic/uploadFile.js'
import random from './helpers/random.js'
import { errors } from 'com'
import { User, File } from '../data/models.js'
const { NotFoundError, DuplicityError } = errors

dotenv.config()

describe('uploadFiles', () => {
    before(() => mongoose.connect(process.env.URL_MONGODB_TEST))

    beforeEach(() => User.deleteMany())
    beforeEach(() => File.deleteMany())

    // POSITIVE CASE
    it('success with uploading user file', async () => {
        const fileName = random.text()
        const fileType = random.text()
        const oldPath = random.text()

        const user = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'localhost', role: 'user' })
        const { newPath, file } = await uploadFile(user.id, fileName, fileType, oldPath)

        expect(file).to.be.an('Object')
        expect(file.owner).to.be.equal(user.id)
        expect(newPath).to.be.equal(`./uploads/${file._id.toString()}`)
    })

    // NEGATIVE CASE - User not found
    it('fails on user not found', async () => {
        const userId = random.id()
        const fileName = random.text()
        const fileType = random.text()
        const oldPath = random.text()

        try {
            await uploadFile(userId, fileName, fileType, oldPath)
            throw new Error('should not reach this point!')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.be.equal('User not found')
        }
    })

    after(() => mongoose.disconnect())
})