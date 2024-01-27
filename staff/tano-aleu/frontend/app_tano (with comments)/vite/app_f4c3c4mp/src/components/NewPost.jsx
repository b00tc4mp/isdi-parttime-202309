import { Button, Container, Form, Field } from "../library"
import logic from "../logic"

// Exporta un componente funcional anónimo
export default function ({ onPublish, onCancel }) {

    // Función para manejar el envío del formulario de nuevo post
    const handleSubmit = event => {
        event.preventDefault()

        // Obtener los valores de imagen y texto del formulario
        const image = event.target.image.value
        const text = event.target.text.value

        try {
            // Llamar al método publishPost de la lógica para publicar el nuevo post
            logic.publishPost(image, text, error => {
                if (error) {
                    // Mostrar una alerta en caso de error durante la publicación del post
                    alert(error.message)
                    return
                }

                // Llamar a la función proporcionada por onPublish en caso de éxito
                onPublish()
            })
        } catch (error) {
            // Mostrar una alerta en caso de error durante el proceso de publicación del post
            alert(error.message)
        }
    }

    // Función para manejar el clic en el botón de cancelar
    const handleCancel = event => {
        event.preventDefault()

        // Llamar a la función proporcionada por onCancel para cancelar la creación del nuevo post
        onCancel()
    }

    // Renderizado del componente de creación de nuevo post
    return (
        <Container className="new-post">
            <h2>New post</h2>

            {/* Formulario de nuevo post */}
            <Form formStyle="form" onSubmit={handleSubmit}>
                {/* Campo de entrada para la URL de la imagen */}
                <Field id="image" type="url">Image</Field>
                {/* Campo de entrada para el texto del post */}
                <Field id="text">Text</Field>

                {/* Botón de envío del formulario */}
                <Button type="submit">Post</Button>
                {/* Botón de cancelar la creación del nuevo post */}
                <Button onClick={handleCancel}>Cancel</Button>
            </Form>
        </Container>
    )
}
