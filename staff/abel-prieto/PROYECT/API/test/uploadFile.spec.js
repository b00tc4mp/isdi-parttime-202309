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

        const user = await User.create({ username: random.username(), email: random.email(), password: random.password(), group: 'localhost', role: 'user' })
        const result = await uploadFile(user.id, fileName, fileType)

        // console.log(result)

        const { user1, file } = result

        // Return { user, file }

        // expect(user1).to.be.an('Object')
        // expect(file).to.be.an('Object')
        // expect(user1._id).to.be.equal(user.id)
        // expect(file.name).to.be.equal(fileName)
    })

    // NEGATIVE CASE - User not found
    it('fails on user not found', async () => {

    })

    // NEGATIVE CASE - File already exist
    it('fails on file alredy exist on data base', async () => {

    })

    after(() => mongoose.disconnect())
})