const validate = require('./helpers/validate')

const { SystemError, NotFoundError, CredentialsError } = require('./errors')

const { Post, User } = require('../data/models')



function editTextPost(userId, postId, text, callback) {
    validate.id(userId, 'user id')
    validate.id(postId, 'post id')
    validate.text(text, 'text')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new NotFoundError('User not found'));
                return;
            }

            Post.findById(postId)
                .then(post => {
                    if (!post) {
                        callback(new NotFoundError('Post not found'));
                        return;
                    }

                    // Comprueba si el usuario es el autor del post
                    if (userId.toString() !== post.author.toString()) {
                        callback(new CredentialsError('Wrong Credentials'));
                        return;
                    }

                    // Edita el texto
                    post.text = text
                    post.save()

                    callback(null);

                })
                .catch(error => callback(new SystemError(error.message)));
        })
        .catch(error => callback(new SystemError(error.message)));
}

module.exports = editTextPost;