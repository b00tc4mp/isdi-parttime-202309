const JSON = require('../utils/JSON')

const { validateText, validateFunction } = require('../utils/validators')

function deleteUser(userId, password, callback) {
    // TODO validate inputs
    // tenemos que ver lo que tenemos guardado en el disco, me traigo los usuarios, cargo el fuichero


    validateText(userId, 'user id')
    validateText(password, 'password')
    validateFunction(callback, 'callback')

    JSON.parseFromFile('./data/users.json', (error, users) => {
        if (error) {
            callback(error)
            return
        }

        let user = users.find(user => user.id === userId)
        // guardo el usuario en user si me coincide el id


        if (!user) {
            callback(new Error('user do not exists'))
            return
        }

        if (user.password !== password) {
            callback(new Error('wrong credentials'))
            return
        }

        //busco la posición de ese usuario en el array

        const index = users.indexOf(user)

        // una vez tengo la posición, elimino el usuario

        users.splice(index, 1)



        JSON.stringifyToFile('./data/users.json', users, error => {
            if (error) {
                callback(error)
                return


            }
            callback(null, user.id)
        })

    }) //hay que hacerlo en la carpeta raiz, onde se ejecuta 
}

module.exports = deleteUser