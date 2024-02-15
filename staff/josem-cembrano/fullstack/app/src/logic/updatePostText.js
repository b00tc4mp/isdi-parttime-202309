import { validate } from 'com'

function updatePostText(postId, text, callback) {
    validate.text(postId, 'post id"')
    validate.text(text)
    validate.function(callback, 'callback')


}

export default updatePostText