import mongoose, { Types } from 'mongoose'
import dotenv from 'dotenv'
import expect from 'mocha'
import uploadFile from '../logic/uploadFile.js'
import { errors } from 'com'
import { User, File } from '../data/models.js'

const { ObjectId } = Types
const { NotFoundError, DuplicityError } = errors

dotenv.config()

describe('uploadFiles', () => {
    before(() => mongoose.connect(process.env.URL_MONGODB_TEST))

    beforeEach(() => User.deleteMany())
    beforeEach(() => File.deleteMany())

    // POSITIVE CASE
    it('success with uploading user file', async () => {
        const username = new ObjectId().toString()
        const email = new ObjectId().toString()
        const password = new ObjectId().toString()

        const fileName = new ObjectId().toString()
        const fileType = new ObjectId().toString()

        const user = await User.create({ username: username, email: email, password: password, group: 'localhost', role: 'user' })
        const { user1, file } = await uploadFile(user.id, fileName, fileType)

        // Devuelve { user, file }

        expect(user1).to.be.an('Object')
        expect(file).to.be.an('Object')
        expect(user1._id).to.be.equal(user.id)
        expect(file.name).to.be.equal(fileName)
    })

    // NEGATIVE CASE - User not found
    it('fails on user not found', async () => {

    })

    // NEGATIVE CASE - File already exist
    it('fails on file alredy exist on data base', async () => {

    })

    after(() => mongoose.disconnect())
})