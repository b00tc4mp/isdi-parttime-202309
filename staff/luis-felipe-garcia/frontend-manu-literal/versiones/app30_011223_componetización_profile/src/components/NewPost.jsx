import { Field, Form, Button, Container } from "../library"
import logic from "../logic"


function NewPost({onPublish, onCancel}) {
    const handleSubmit = event => {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const text = textInput.value

        try {
            logic.publishPost(image, text, error => {
                if (error) {
                    alert(error.message)
                    return
                }

                onPublish()
                
                    })
                } catch (error) {
                    alert(error.message)
                }
            }
        const handleCancel = event => {
            event.preventDefault()
            onCancel()

        }

    return <Container className="new-post">
        <h2>New post</h2>
        <Form onSubmit={handleSubmit}>
            <Field type="url" id="image-input" forId="image-input">Image</Field>
            <Field id="text-input" forId="text-input">Text</Field>
            <Button type="submit">Post</Button>
            <Button onClick={handleCancel}>Cancel</Button>
        </Form>

    </Container>
}

export default NewPost