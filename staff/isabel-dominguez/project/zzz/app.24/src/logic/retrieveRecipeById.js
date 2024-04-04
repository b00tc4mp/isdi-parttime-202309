import { errors, validate } from 'com'
const { SystemError } = errors

export default function retrieveRecipeById(recipeId) {
    validate.id(recipeId)

    return fetch(`${import.meta.env.VITE_API_URL}/recipe/${recipeId}`)
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (!res.ok) {
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(body => { throw new errors[body.error](body.message) })
            }

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
        })
}