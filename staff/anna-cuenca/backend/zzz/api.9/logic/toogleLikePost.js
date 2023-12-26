const JSON = require("../utils/JSON");
const { NotFoundError, SystemError } = require("../utils/errors");
const { validateText, validateFunction } = require("../utils/validators");

function toggleLikePost(userId, postId, callback) {
    validateText(userId, "user id")
    validateText(postId, "post id")
    validateFunction(callback, "callback")

    // ahora accedo a la base de datos

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(new SystemError(error.message))
            return
        }
        // el error por defecto, espropio de node, podemos personalizar nuestros errores como clases y luego crear instancias de esa clase

        // bscamos que en la basee datos haya un user con el id que le pasamos
        const user = users.find(user => user.id === userId)

        if (!user) {
            callback(new NotFoundError('user not found'))
            return
        }

        JSON.parseFromFile('./data/posts.json', (error, posts) => {
            if (error) {
                callback(new SystemError(error.message))
                return
            }

            // NOS INTERESA SABER EL ÍNDECE DEL POST, PARA LUEGO MANIPULARLO
            const postIndex = posts.findIndex(post => post.id === postId)

            if (postIndex < 0) {
                callback(new NotFoundError('post not found'))
                return
            }
            // guardo el post en la variable
            const post = posts[postIndex]

            // ahora tengo que ver si tiene like del usuario

            const userIdIndex = post.likes.indexOf(userId)

            if (userIdIndex < 0)
                post.likes.push(userId)
            else
                post.likes.splice(userIdIndex, 1)

            // ahora tenemos e actualizar la base de datos

            JSON.stringifyToFile('./data/posts.json', posts, error => {
                if (error) {
                    callback(new SystemError(error.message))
                    return
                }
                callback(null)
            })

        })


    })

}

module.exports = toggleLikePost