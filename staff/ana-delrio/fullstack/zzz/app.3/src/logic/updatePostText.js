import { validate } from 'com'

function updatePostText(postId, text, callback) {
    validate.text(postId, 'post id')
    validate.text(text, 'text')

    // TODO CALL API

}

export default updatePostText
