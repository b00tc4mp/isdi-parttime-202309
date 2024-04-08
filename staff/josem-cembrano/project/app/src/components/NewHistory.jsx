import { Button, Form, Field } from "../library"
import logic from "../logic"

import { useContext } from '../hooks'

export default function(props) {
    console.log('NewHistory')
    const context = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            logic.publishHistory(image, text, error => {
                if (error) {
                    context.handleError(error)

                    return
                }
            })
            props.onPublish()
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    return (
    <div className="new-history">
        <Form onSubmit={handleSubmit}>
            <h2 className="h2">Add new history</h2>
            <Field id="image" type="url">Image</Field>
            <Field id="text">Text</Field>
            <Button type='submit'>Add</Button>
            <Button onClick={handleCancel}>Cancel</Button>
        </Form>
    </div>
    )
}