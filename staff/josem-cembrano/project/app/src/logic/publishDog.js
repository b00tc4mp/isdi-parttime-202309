import { validate, errors } from 'com'
const { SystemError } = errors

export default async function publishDog(image, afix, name, gender, birthDate, puppy, text) {
    validate.text(image, 'image')
    validate.text(afix, 'afix')
    validate.text(name, 'name')
    validate.gender(gender)
    validate.text(birthDate, 'birthDate')
    validate.boolean(puppy, 'puppy')
    validate.text(text, 'text')

    const req = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, afix, name, gender, birthDate, puppy, text })
    }

    let res
    try {
        res = await fetch(`${import.meta.env.VITE_API_URL}/perfil`, req)
    } catch (error) {
        throw new SystemError(error.message)
    }

    if (!res.ok) {
        let body
        try {
            body = await res.json()
        } catch (error) {
            throw new SystemError(error.message)
        }
    }
}