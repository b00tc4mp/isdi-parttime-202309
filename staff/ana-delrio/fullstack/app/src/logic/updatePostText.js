import { validateText } from '../utils/validators'


function updatePostText(postId, text, callback) {
    validateText(postId, 'post id')
    validateText(text, 'text')

    // TODO CALL API

}

export default updatePostText
