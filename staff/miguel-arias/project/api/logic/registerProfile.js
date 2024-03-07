import bcrypt from 'bcryptjs'

import { validate, errors } from 'com'
import colors from 'com/defaultColors.js'
const { SystemError, DuplicityError, NotFoundError } = errors

import { Profile, Home } from '../data/models.js'
debugger

function registerProfile(homeId, name, pincode, color) {
    validate.id(homeId)
    validate.text(name, 'name')
    validate.pincode(pincode, 'pincode')
    validate.object(color, 'color')

    return (async () => {
        let home
        try {
            home = await Home.findById(homeId).lean()
        } catch (error) {
            throw new SystemError(error.message)
        }

        if (!home)
            throw new NotFoundError('home not found')

        const usedColorCodes = await Profile.distinct('color.code')

        const unusedColors = colors.filter(color => !usedColorCodes.includes(color.code))

        try {
            const hash = await bcrypt.hash(pincode, 8)

            const profile = await Profile.create({ home: homeId, name, pincode: hash, color: color ? color : unusedColors[0] })

            return profile
        } catch (error) {
            if (error.code === 11000)
                throw new DuplicityError('profile is not respecting unique values')

            throw new SystemError(error.message)
        }
    })()
}

export default registerProfile