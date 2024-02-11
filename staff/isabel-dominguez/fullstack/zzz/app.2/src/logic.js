import { validateText } from "./utils/validators"

class Logic {
    constructor() {
        this.sessionUserId = null
    }

    registerUser(name, email, password, callback) {
        validateText(name, 'name')
        validateText(email, 'email')
        validateText(password, 'password')
        // validateFunction(callback, 'callback')

        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        }

        fetch('http://localhost:8000/users', req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    loginUser(email, password, callback) {
        validateText(email, 'email')
        validateText(password, 'password')
        // validateFunction(callback, 'callback')

        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }

        fetch('http://localhost:8000/users/auth', req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                res.json()
                    .then(userId => {
                        this.sessionUserId = userId

                        callback(null)
                    })
                    .catch(error => callback(error))
            })
            .catch(error => callback(error))
    }

    logoutUser(callback) {
        // validateFunction(callback, 'callback')
        this.sessionUserId = null

        callback(null)
    }

    retrieveUser(callback) {
        // validateFunction(callback, 'callback')

        const req = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            }
        }

        fetch('http://localhost:8000/users', req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                res.json()
                    .then(user => callback(null, user))
                    .catch(error => callback(error))
            })
            .catch(error => callback(error))
    }

    changeUserEmail(newEmail, newEmailConfirm, password, callback) {
        validateText(newEmail, "new email")
        validateText(newEmailConfirm, "new email confirm")
        validateText(password, "password")
        // validateFunction(callback, 'callback')

        const req = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newEmail, newEmailConfirm, password })
        }

        fetch('http://localhost:8000/users/email', req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    changeUserPassword(newPassword, newPasswordConfirm, password, callback) {
        validateText(newPassword, "new password")
        validateText(newPasswordConfirm, "new password confirm")
        validateText(password, "password")
        // validateFunction(callback, 'callback')

        const req = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password, newPassword, newPasswordConfirm })
        }

        fetch('http://localhost:8000/users/password', req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    retrievePosts(callback) {
        // validateFunction(callback, 'callback')

        const req = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            }
        }

        fetch('http://localhost:8000/posts', req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                res.json()
                    .then(posts => callback(null, posts))
                    .catch(error => callback(error))
            })
            .catch(error => callback(error))
    }

    retrieveFavPosts(callback) {
        // validateFunction(callback, 'callback')

    }

    CreatePost(image, text, callback) {
        validateText(image, "image")
        validateText(text, "text")
        // validateFunction(callback, 'callback')

        const req = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image, text })
        }

        fetch('http://localhost:8000/posts', req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    toggleLikePost(postId, callback) {
        validateText(postId, "post id")
        // validateFunction(callback, 'callback')

        const req = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            }
        }

        fetch(`http://localhost:8000/posts/${postId}/likes`, req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    toggleFavPost(postId, callback) {
        validateText(postId, "post id")
        // validateFunction(callback, 'callback')

        const req = {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`
            }
        }

        fetch(`http://localhost:8000/posts/${postId}/favs`, req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    deletePost(postId, callback) {
        validateText(postId, "post id")
        // validateFunction(callback, 'callback')

        const req = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`,
                'Content-Type': 'application/json'
            }
        }

        fetch(`http://localhost:8000/posts/${postId}`, req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    deleteUser(userId, password, callback) {
        validateText(userId, "user id")
        validateText(password, "password")
        // validateFunction(callback, 'callback')

        const req = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${this.sessionUserId}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, password })
        }

        fetch('http://localhost:8000/users', req)
            .then(res => {
                if (!res.ok) {
                    return res.json().then(body => {
                        throw new Error(body.message)
                    })
                }
            })
            .then(() => callback(null))
            .catch(error => callback(error))
    }

    updatePostText(postId, text, callback) {
        validateText(postId, 'post id')
        validateText(text, 'text')
        // validateFunction(callback, 'callback')

        const req = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.sessionUserId}`
            },
            body: JSON.stringify({
                postId,
                text
            })
        }

        fetch(`http://localhost:8000/posts/${postId}`, req)
            .then(res => {
                if (!res.ok) {
                    res.json()
                        .then(body => callback(new Error(body.message)))
                        .catch(error => callback(error))

                    return
                }

                callback(null)
            })
            .catch(error => callback(error))
    }

    // commentPost(PostId, comment, callback) {
    //     validateText(PostId, 'post id')
    //     validateText(comment, 'comment')
    //     validateFunction(callback, 'callback')

    //     const req = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${this.sessionUserId}`
    //         },
    //         body: JSON.stringify({
    //             postId,
    //             comment
    //         })
    //     }

    //     fetch(`http://localhost:8000/posts/${postId}/comments`, req)
    //         .then(res => {
    //             if (!res.ok) {
    //                 res.json()
    //                     .then(body => callback(new Error(body.message)))
    //                     .catch(error => callback(error))

    //                 return
    //             }

    //             callback(null)
    //         })
    //         .catch(error => callback(error))
    // }
}

const logic = new Logic
export default logic