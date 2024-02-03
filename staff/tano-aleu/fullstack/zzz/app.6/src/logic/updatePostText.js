import validate from "./helpers/validate"

function updatePostText(postId, text, callback) {

    validate.id(postId, 'post id')
    validate.text(text, 'text')

    // TODO CALL API

}

export default updatePostText