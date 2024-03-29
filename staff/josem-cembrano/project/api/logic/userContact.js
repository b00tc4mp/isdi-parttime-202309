import { validate, errors } from 'com'
import { Contact, User } from '../data/models.js'

const { NotFoundError, SystemError } = errors

export default async function userContact(name, email, phone, message) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.number(Number(phone), 'phone')
    validate.text(message, 'message')

    try {
        const admins = await User.find({ Admin: true })

        if (admins.length === 0) {
            throw new NotFoundError('admin not found')
        }

        const contact = await Contact.create({ name, email, phone: Number(phone), message })

        if (!contact) {
            throw new SystemError('failed to create contact')
        }

        await contact.save()
    } catch (error) {
        throw error
    }
}