import validate from './helpers/validate.js'
import { SystemError, NotFoundError, CredentialsError, DuplicityError } from './errors.js'

import { Post, User } from '../data/models.js'



function deletePost(userId, postId, callback) {
    validate.id(userId, 'user id');
    validate.id(postId, 'post id');
    validate.function(callback, 'callback');

    Post.findById(postId)
        .then(post => {
            if (!post) {
                callback(new NotFoundError('Post not found'));
                return;
            }

            User.findById(userId)
                .then(user => {
                    if (!user) {
                        callback(new NotFoundError('User not found'));
                        return;
                    }

                    // Comprueba si el usuario es el autor del post
                    if (userId.toString() !== post.author.toString()) {
                        callback(new CredentialsError('Wrong Credentials'));
                        return;
                    }

                    // Elimina el post
                    Post.findByIdAndDelete(postId)
                        .then(deletedPost => {
                            if (!deletedPost) {
                                callback(new NotFoundError('Post can\'t be deleted'));
                                return;
                            }
                            callback(null);
                        })
                        .catch(error => callback(new SystemError(error.message)));
                })
                .catch(error => callback(new SystemError(error.message)));
        })
        .catch(error => callback(new SystemError(error.message)));
}

export default deletePost;
