import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { Post, User } from '../data/models.js'




function toggleFavPost(userId, postId) {
    validate.id(postId, "post id")
    validate.id(userId, "user id")


    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new NotFoundError('User not found')



            return Post.findById(postId).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(post => {
                    if (!post)
                        throw new NotFoundError('Post not found');



                    const index = user.favs.findIndex(postObjectId => postObjectId.toString() === postId)

                    if (index < 0) {
                        user.favs.push(postId);
                    } else {
                        user.favs.splice(index, 1);
                    }

                    return user.save()
                        .catch(error => { throw new SystemError(error.message) })
                        .then(() => { })
                })
        })
}

export default toggleFavPost;
