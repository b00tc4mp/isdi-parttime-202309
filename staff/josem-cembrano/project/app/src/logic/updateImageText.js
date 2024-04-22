import { validate } from 'com'

export default function updateImageText(imageId, text, callback) {
    validate.text(imageId, 'image id"')
    validate.text(text)
    validate.function(callback, 'callback')


}