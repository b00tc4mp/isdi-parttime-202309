const {NotFoundError, SystemError} = require ('./errors')
const {validateText, validateFunction} = require('./helpers/validators')
const {User, Post} = require('../data/models')

function toggleFavPost(userId, postId, callback){
    validateText(userId, 'user id ')
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user =>{
            if(!user){
                callback(new NotFoundError('user not found'))

                return 
            }

            Post.findById(postId).lean()
                .then(post =>{
                    if(!post){
                        callback(new NotFoundError('post not found'))

                        return
                    }

                    const index = user.favs.findIndex(postObjectId => postObjectId.toString()=== postId)
                        
                        if(index<0)
                            user.favs.push(postId)
                        else
                            user.favs.splice(index, 1)

                            user.save()
                                .then(()=> callback(null))
                                .catch(error => callback(new SystemError(error.message)))
                })
                .catch(error => callback(new SystemError(error.message)))
        })
        .catch(error => callback(new SystemError(error.message)))
}

module.exports = toggleFavPost