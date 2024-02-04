import logic from "../logic"
import { Button, Form, Field, Container } from "../library"

function NewPost({ onClick, onSuccess, onError }) {

    function handleCancelNewPostClick(event) {
        event.preventDefault()

        onClick(null)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const image = event.target.querySelector("#image-input").value
        const text = event.target.querySelector("#text-input").value

        try {
            logic.createPost(image, text, error => {
                if (error) {
                    // alert(error.message)
                    onError(error)

                    return
                }

                onSuccess(event)
            })
        } catch (error) {
            // alert(error.message)
            onError(error)
        }
    }

    return <Container>
        <h2>New post</h2>

        <Form onSubmit={handleNewPostSubmit}>
            <Field id="image-input" type="url">Image</Field>
            <Field id="text-input">Text</Field>

            <Button type="submit">Post</Button>
            <Button onClick={handleCancelNewPostClick}>Cancel</Button>
        </Form>
    </Container>
}

export default NewPost