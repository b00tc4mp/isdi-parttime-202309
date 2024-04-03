import { Button, Container, Field, Form } from "../library"
import logic from "../logic"


import { useContext } from '../hooks'

export default function ({ onPublish, onCancel }) {
    console.log('New Tutorial')

    const context = useContext()

    // si lo exportamos de esta manera(en la cabecera de la función), se puede exportar la función de 
    // manera anónima

    const handleSubmit = event => {
        event.preventDefault()

        const title = event.target.querySelector('#title-input').value
        // comole hemos puesto un id, también se podría hacer: const image = event.target['image-input'].value
        // si no tuviera un guion, que solo se llamara image, podríamos hacer; const image = event.target.image.value
        const text = event.target.querySelector('#text-input').value

        try {
            logic.publishTutorial(title, text)
                .then(() => onPublish())
                .catch(error => context.handleError(error))


        } catch (error) {
            context.handleError(error)
        }
    }

    const handleCancel = event => {
        event.preventDefault()

        onCancel()
    }



    return (
        <div className="container-new-post">
            <div className="new-tutorial-container">
                <h2 className="h2-robotic-new-tutorial">New Tutorial</h2>

                <Form onSubmit={handleSubmit}>
                    <Field id="title-input" type="text">Title</Field>
                    <Field id="text-input" type="text">Text</Field>

                    <button className="button-playSequence button" type="submit" >Publish</button>
                    <button className="button-playSequence button" onClick={handleCancel}>Cancel</button>
                </Form>
            </div>
        </div>
    )
}