const { validateText, validateFunction, validateId } = require('./helpers/validators')

const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { Post, User } = require('../data/models')



function deletePost(userId, postId, callback) {
    validateId(userId, 'user id');
    validateId(postId, 'post id');
    validateFunction(callback, 'callback');

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

module.exports = deletePost;
