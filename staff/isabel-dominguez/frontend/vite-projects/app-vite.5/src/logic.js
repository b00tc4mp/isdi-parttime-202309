import { validateText } from "./utils/validators"
import db from "./data/db"
import { User, Post } from "./data/models"
import randomDelay from "./utils/randomDelay"

class Logic {
    constructor() {
        this.sessionUserId = null
    }

    // La estructura general de las funciones asíncronas en JavaScript, especialmente en el contexto de Node.js, es utilizar una función de callback que se ejecuta una vez que la operación asíncrona ha completado. En tu caso, registerUser acepta cuatro parámetros, siendo el último de ellos una función de callback que se espera que maneje el resultado de la operación asíncrona.

    registerUser(name, email, password, callback) {
        validateText(name, "name")
        validateText(email, "email")
        validateText(password, "password")

        db.users.findByEmail(email, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (user) {
                callback(new Error("user already exists"))

                return
            }

            db.users.insert(new User(null, name, email, password, []), error => {
                if (error) {
                    callback(error) //Si hay algún error durante la operación, la función de callback se llama con el error correspondiente como primer argumento.

                    return
                }

                callback(null) //Si todo va bien (sin errores), la función de callback se llama con null como primer argumento. Al llamar a la callback con null cuando todo va bien, el código que utiliza la función asíncrona puede verificar fácilmente si hubo un error al comprobar el primer argumento de la callback. Si el primer argumento es null o undefined, se asume que la operación se completó con éxito.
            })
        })
    }

    loginUser(email, password, callback) {
        validateText(email, "email")
        validateText(password, "password")

        db.users.findByEmail(email, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user || user.password !== password) {
                callback(new Error("wrong credentials"))

                return
            }

            this.sessionUserId = user.id

            callback(null)
        })
    }

    logoutUser(callback) {
        randomDelay(() => {
            this.sessionUserId = null

            callback(null)
        })
    }

    retrieveUser(callback) {
        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user) {
                callback(new Error("user not found"))
            }

            delete user.password // Elimina la propiedad "password" del objeto del usuario antes de devolverlo

            callback(null, user) // Llama a la callback con null (sin error) y el objeto de usuario modificado
        })
    }

    changeUserEmail(newEmail, newEmailConfirm, password, callback) {
        validateText(newEmail, "new email")
        validateText(newEmailConfirm, "new email confirm")
        validateText(password, "password")

        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user || user.password !== password) {
                callback(new Error("wrong credentials"))

                return
            }

            if (newEmail !== newEmailConfirm) {
                callback(new Error("new email and its confirmation do not match"))

                return
            }

            user.email = newEmail

            db.users.update(user, (error) => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        })
    }

    changeUserPassword(newPassword, newPasswordConfirm, password, callback) {
        validateText(newPassword, "new password")
        validateText(newPasswordConfirm, "new password confirm")
        validateText(password, "password")

        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user || user.password !== password) {
                callback(new Error("Wrong credentials"))

                return
            }

            if (newPassword !== newPasswordConfirm) {
                callback(new Error("New password and its confirmation do not match"))

                return
            }

            user.password = newPassword;

            db.users.update(user, (error) => {
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        })
    }

    retrievePosts(callback) {
        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user) {
                callback(new Error("user not found"))

                return
            }

            // Obtener todos los posts de la base de datos
            const posts = db.posts.getAll((error, posts) => {
                if (error) {
                    callback(error)

                    return
                }

                let count = 0

                posts.forEach(post => {
                    post.liked = post.likes.includes(this.sessionUserId)
                    // Buscar al autor del post por su ID y actualizar la propiedad "author"
                    db.users.findById(post.author, (error, author) => {
                        if (error) {
                            callback(error)

                            return
                        }
                        // Actualizar la propiedad "author" del post con información del autor
                        post.author = {
                            email: author.email,
                            id: author.id,
                            name: author.name
                        }

                        post.fav = user.favs.includes(post.id)

                        count++
                        // Si todos los posts han sido procesados, llamar a la callback con null (sin error) y la lista de posts
                        if (count === posts.length) {
                            callback(null, posts)
                        }
                    })
                })
            })
        })
    }

    retrieveFavPosts(callback) {
        db.users.findById(this.sessionUserId, (error, user) => {
            if (error) {
                callback(error)

                return
            }

            if (!user) {
                callback(new Error("user not found"))

                return
            }
            // Array para almacenar los posts favoritos
            const favs = []

            let count = 0
            // Si el usuario no tiene favoritos, llama a la callback con null y el array de favoritos vacío
            if (!user.favs.length) {
                callback(null, favs)

                return
            }

            user.favs.forEach((postId, index) => {
                db.posts.findById(postId, (error, post) => {
                    if (error) {
                        callback(error)

                        return
                    }

                    favs[index] = post

                    count++
                    // Cuando todos los posts favoritos han sido procesados
                    if (count === user.favs.length) { //Aqui determinamos cuantos posts favoritos tiene el usuario.
                        let count2 = 0
                        // Iterar sobre cada post en el array de favoritos (segunda iteración)
                        favs.forEach(post => {
                            post.liked = post.likes.includes(this.sessionUserId) // Marcar si el usuario ha dado like en el post

                            db.users.findById(post.author, (error, author) => { // Buscar al autor del post por su ID y actualizar la propiedad "author"
                                if (error) {
                                    callback(error)

                                    return
                                }
                                // Actualizar la propiedad "author" del post con información del autor
                                post.author = {
                                    email: author.email,
                                    id: author.id,
                                    name: author.name
                                }

                                post.fav = user.favs.includes(post.id) // Marcar si el post es un favorito del usuario actual

                                count2++ //incrementa el contador en la segunda iteración sobre los posts favoritos del usuario.
                                // Cuando todos los posts han sido procesados, llamar a la callback con null (sin error) y el array de favoritos
                                if (count2 === favs.length) callback(null, favs)
                            })
                        })
                    }
                })
            })
        })
    }

    publishPost(image, text, callback) {
        validateText(image, "image")
        validateText(text, "text")

        db.posts.insert(new Post(null, this.sessionUserId, image, text, []), error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    }

    toggleLikePost(postId, callback) {
        validateText(postId, "post id")

        db.posts.findById(postId, (error, post) => {
            if (error) {
                callback(error)

                return
            }

            if (!post) {
                callback(new Error("post not found"))

                return
            }
            // Encontrar el índice del ID de usuario en la lista de likes del post
            const index = post.likes.indexOf(this.sessionUserId)
            // Toggle: Si el usuario no ha dado like, añadir el ID de usuario a la lista de likes; si ya dio like, eliminarlo
            if (index < 0)
                post.likes.push(this.sessionUserId)
            else
                post.likes.splice(index, 1)

            db.posts.update(post, error => { // Actualizar el post en la base de datos
                if (error) {
                    callback(error)

                    return
                }

                callback(null)
            })
        })
    }

    toggleFavPost(postId, callback) {
        validateText(postId, "post id")

        db.posts.findById(postId, (error, post) => { // Buscar un post por su ID en la base de datos
            if (error) {
                callback(error)

                return
            }

            if (!post) {
                callback(new Error("post not found"))

                return
            }
            // Buscar un usuario por su ID (this.sessionUserId) en la base de datos
            db.users.findById(this.sessionUserId, (error, user) => {
                if (error) {
                    callback(error)

                    return
                }

                if (!user) {
                    callback(new Error("user not found"))

                    return
                }

                const index = user.favs.indexOf(post.id) // Encontrar el índice del ID del post en la lista de favoritos del usuario
                // Toggle: Si el post no está en la lista de favoritos, añadir el ID del post; si ya está, eliminarlo
                if (index < 0)
                    user.favs.push(post.id)
                else
                    user.favs.splice(index, 1)

                db.users.update(user, error => { // Actualizar el usuario en la base de datos
                    if (error) {
                        callback(error)

                        return
                    }

                    callback(null)
                })
            })
        })
    }

    deletePost(postId, callback) {
        validateText(postId, 'post id')

        db.posts.findById(postId, (error, post) => {
            if (error) {
                callback(error)

                return
            }

            if (!post) {
                callback(new Error('post not found'))

                return
            }
            db.users.getAll((error, users) => {
                if (error) {
                    callback(error)

                    return
                }

                const usersWithFav = users.filter((user) => user.favs.includes(postId))

                let count = 0

                if (!usersWithFav.length) {
                    db.posts.deleteById(post.id, (error) => { // Eliminar el post por su ID en la base de datos
                        if (error) {
                            callback(error)

                            return
                        }

                        callback(null)
                    })

                    return
                }

                usersWithFav.forEach(user => {

                    const index = user.favs.indexOf(postId)

                    user.favs.splice(index, 1)

                    db.users.update(user, error => {
                        if (error) {
                            callback(error)

                            return
                        }

                        count++

                        if (count === usersWithFav.length) {
                            db.posts.deleteById(post.id, (error) => {
                                if (error) {
                                    callback(error)

                                    return
                                }

                                callback(null)
                            })
                        }
                    })
                })
            })
        })
    }

    // changePostText(postId, postText, callback) {
    //     validateText(postId, 'post id')
    //     validateText(postText, 'texts post')




    // }
}

const logic = new Logic
export default logic