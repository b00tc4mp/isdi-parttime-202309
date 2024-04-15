import { User, History } from '../data/models.js'
import { validate, errors } from 'com'

const { NotFoundError, UnauthorizedError } = errors

export default async function modifyHistory(userId, newImage, newText) {
    validate.id(userId, 'userId')
    validate.text(newImage, 'newImage')
    validate.text(newText, 'newText')

    try {
        let user = await User.findById(userId)
        if (!user) {
            throw new NotFoundError('user not found')
        }

        if (!user.Admin)
        throw new UnauthorizedError('The user does not have permission to perform this action')

        const histories = await History.find()
        const history = histories[0]
        
        history.image = newImage
        history.text = newText

        await history.save();
    } catch (error) {
        throw error
    }
}