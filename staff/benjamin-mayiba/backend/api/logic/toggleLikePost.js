const { NotFoundError, SystemError } = require("./errors")
const { validateId, validateFunction } = require("./helpers/validators")

const{ User, Post } = require('../data/models')

function toggleLikePost(userId, postId, callback) {
    validateId(userId, 'user id')
    validateId(postId, 'post id')
    validateFunction(callback, 'callback')

    // TODO use models

    User.findById(userId)
        .then(user =>{
            if(!user){
                callback(new NotFoundError('user not found'))

                return
            }
           Post.findById(postId)
                .then(post =>{
                    if(!post){
                        callback(new NotFoundError('post not found'))
                        return
                    }
                    const userIndex = post.likes.indexOf(userId)
                    if(userIndex < 0){
                     post.likes.push(userId)
                    }else{
                        post.likes.splice(userIndex, 1)
                    }
                    
                    post.save()
                        .then(()=> callback(null))
                        .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = toggleLikePost