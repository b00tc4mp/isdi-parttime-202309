import { validate, errors } from 'com'
import { Contact } from '../data/models.js'
import sendEmail from '../logic/helpers/sendEmail.js'

const { SystemError } = errors

export default async function userContact(name, email, phone, message) {
    validate.text(name, 'name')
    validate.email(email, 'email')
    validate.text(phone, 'phone')
    validate.text(message, 'message')

    try {
        const contact = await Contact.create({ name, email, phone, message })

        if (!contact) {
            throw new SystemError('failed to create contact')
        }

        await contact.save()
        
        await sendEmail(name, email, phone, message)
    } catch (error) {
        throw error
    }
}