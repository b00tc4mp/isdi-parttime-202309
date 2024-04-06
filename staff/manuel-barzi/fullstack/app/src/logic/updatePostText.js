import { validate } from 'com'

export default function updatePostText(postId, text, callback) {
    validate.text(postId, 'post id')
    validate.text(text, 'text')

    // TODO call api
}