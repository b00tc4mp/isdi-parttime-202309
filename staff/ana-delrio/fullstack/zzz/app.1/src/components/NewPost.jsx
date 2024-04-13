import { Button, Container, Field, Form } from "../library"
import logic from "../logic"

{/* las props se pueden desglosar */ }
export default function NewPost({ onPublish, onCancel }) {
    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            logic.publishPost(image, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                {/* esto te viene por props de arriba */ }
                onPublish()


            })
        } catch (error) {
            alert(error.message)
        }

    }

    const handleCancel = event => {
        event.preventDefault()
        {/* esto te viene por props de arriba */ }
        onCancel()
    }


    return <Container className="new-post">
        <h2>New post</h2>

        <Form className="Form" onSubmit={handleSubmit}>
            <Field id="image" type="url">Image</Field>
            <Field id="text">Text</Field>

            <Button type="submit">Post</Button>
            <Button onClick={handleCancel}>Cancel</Button>
        </Form>
    </Container>
}

