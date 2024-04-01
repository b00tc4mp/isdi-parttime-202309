import { Button, Form, Field } from "../library"
import logic from "../logic"

import { useContext } from '../hooks'

export default function(props) {
    console.log('NewPicture')
    const context = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const afix = event.target.afix.value
        const name = event.target.name.value
        const gender = event.target.gender.value
        const birthDate = event.target.birthDate.value
        const puppyString = event.target.puppy.value
        const text = event.target.text.value

        const puppy = puppyString === 'true' ? true : false

        try {
            logic.publishDog(image, afix, name, gender, birthDate, puppy, text, error => {
                if (error) {
                    context.handleError(error)

                    return
                }

                props.onPublish()
            })
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    return (
    <div className="new-picture">
        <Form onSubmit={handleSubmit}>
            <h2 className="h2">Add new perfil dog</h2>
            <Field id="image" type="url">Image</Field>
            <Field id="afix">Afix</Field>
            <Field id="name">Name</Field>
            <Field id='gender'>Sex</Field>
            <Field id='birthDate'>Birth Date(YYYY-MM-DD)</Field>
            <Field id='puppy'>Puppy</Field>
            <Field id="text">Text</Field>
            <Button type='submit'>Add</Button>
            <Button onClick={handleCancel}>Cancel</Button>
        </Form>
    </div>
    )
}