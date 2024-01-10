import { validateText } from '../utils/validators'

function updatePostText(postId, text, callback) {
    validateText(postId, 'post id"')
    validateText(text, 'tex')


}

export default updatePostText