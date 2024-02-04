import { Button, Container, Field, Form } from '../library'
import logic from '../logic'
import { useContext } from '../hooks'

// {/* las props se pueden desglosar */ }
// these props comes from home
export default function NewPost(props) {
    console.log('NewPost')

    const context = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            logic.publishPost(image, text, error => {
                if (error) {
                    context.handleError(error)

                    return
                }
                // Call the function provided by props (onPublish) to notify that the post has been successfully published
                props.onPublish()


            })
        } catch (error) {
            context.handleError(error)
        }

    }

    const handleCancel = event => {
        event.preventDefault()
        // Call the function provided by props (onCancel) to cancel the post publication
        props.onCancel()
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

