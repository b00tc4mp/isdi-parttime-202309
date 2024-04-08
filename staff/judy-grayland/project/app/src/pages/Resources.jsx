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
        {/* fieldset is an element used to group together part of a form. legend is used for the caption,ie.title */}
        <fieldset>
          <legend>Elige el tipo de recurso:</legend>
          <Field
            name="resourceType"
            type="radio"
            inputId="activity-radio"
            // resourceType is a variable. Checked is an attribute on an HTML tag that accepts true or false. If it coincides with the string "activity", it evaluates to true and that makes it checked.
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
          <>
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
            <fieldset>
              <legend>Selecciona los temas relacionados a la actividad</legend>
              <Field
                name="cultural-diversity"
                type="checkbox"
                inputId="cultural-diversity-check"
              >
                Diversidad cultural
              </Field>
              <Field name="topic-tag" type="checkbox" inputId="bullying-check">
                Bullying
              </Field>
              <Field
                name="functional-diversity"
                type="checkbox"
                inputId="functional-diversity-check"
              >
                Diversidad funcional
              </Field>
              <Field name="lgbt+" type="checkbox" inputId="lgbt+-check">
                LGTB+
              </Field>
              <Field
                name="gender-equality"
                type="checkbox"
                inputId="gender-equality-check"
              >
                Igualdad de género
              </Field>
              <Field
                name="childrens-rights"
                type="checkbox"
                inputId="childrens-rights-check"
              >
                Derechos de la infancia
              </Field>
            </fieldset>

            <Button>Añadir</Button>
          </>
        )}
        {resourceType === 'book' && (
          <>
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
          </>
        )}
        {resourceType === 'special-date' && (
          <>
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
          </>
        )}
      </Form>
    </>
  )
}

export default Resources
