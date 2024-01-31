import validate from './helpers/validate'

export default function commentPost(PostId, comment, callback) {
    validate.text(PostId, 'post id')
    validate.text(comment, 'comment')
    validate.function(callback, 'callback')


}