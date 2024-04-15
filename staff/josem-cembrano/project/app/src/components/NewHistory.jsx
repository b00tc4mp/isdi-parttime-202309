import { Form, Field } from "../library"
import { useContext } from '../hooks'

export default function(props) {
    console.log('NewHistory')
    const context = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            props.onPublish(image, text)
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    return (
        <div className='complete-form-container all-form myfont font-bold flex flex-col items-center justify-center'>
            <Form onSubmit={handleSubmit} className="w-full max-w-md">
                <h2 className="h2 text-center mb-4" style={{ fontSize: '25px' }}>Add new history</h2>
                <Field id="image" type="url" className="mb-4 text-center">Image</Field>
                <Field id="text" className="mb-4 text-center">Text</Field>
                    <button className="flex justify-between button-form" type='submit'>Add</button>
                    <button className="flex justify-between button-form" onClick={handleCancel}>Cancel</button>
            </Form>
        </div>
    )
    
    
}