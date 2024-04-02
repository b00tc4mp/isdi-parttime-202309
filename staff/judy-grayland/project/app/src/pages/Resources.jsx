import { Form, Field, Button } from '../components'
import { useState } from 'react'
function handleSubmit(event) {
  event.preventDefault()

  console.log('resource created')
}

function Resources() {
  const [resourceType, setResourceType] = useState('activity')

  return (
    <>
      <h2>Recursos</h2>
      <h3>Añade un recurso</h3>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Elige el tipo de recurso:</legend>
          <Field
            name="resourceType"
            type="radio"
            inputId="activity-radio"
            checked={resourceType === 'activity'}
            onChange={() => setResourceType('activity')}
          >
            Actividad
          </Field>
          <Field
            name="resourceType"
            type="radio"
            inputId="book-radio"
            checked={resourceType === 'book'}
            onChange={() => setResourceType('book')}
          >
            Libro
          </Field>
          <Field
            name="resourceType"
            type="radio"
            inputId="special-date-radio"
            checked={resourceType === 'special-date'}
            onChange={() => setResourceType('special-date')}
          >
            Fecha especial
          </Field>
        </fieldset>
        {/* show different forms depending on what resource you choose */}
        {resourceType === 'activity' && (
          <fieldset>
            <Field name="title" inputId="title-input">
              Título
            </Field>
            <Field name="description" inputId="description-input">
              Descripción
            </Field>
            <Field name="image" inputId="image-input">
              Imagen
            </Field>
            <Field name="link" inputId="link-input">
              Enlace
            </Field>
            <Button>Añadir</Button>
          </fieldset>
        )}
        {resourceType === 'book' && (
          <fieldset>
            <Field name="title" inputId="title-input">
              Título
            </Field>
            <Field name="author" inputId="author-input">
              Autor
            </Field>
            <Field name="description" inputId="description-input">
              Descripción
            </Field>
            <Field name="image" inputId="image-input">
              Imagen
            </Field>
            <Field name="link" inputId="link-input">
              Enlace
            </Field>
            <Button type="submit">Añadir</Button>
          </fieldset>
        )}
        {resourceType === 'special-date' && (
          <fieldset>
            <Field name="title" inputId="title-input">
              Título
            </Field>
            <Field name="date" inputId="date-input">
              Autor
            </Field>
            <Field name="description" inputId="description-input">
              Descripción
            </Field>
            <Field name="image" inputId="image-input">
              Imagen
            </Field>
            <Field name="link" inputId="link-input">
              Enlace
            </Field>
            <Button type="submit">Añadir</Button>
          </fieldset>
        )}
      </Form>
    </>
  )
}

export default Resources
