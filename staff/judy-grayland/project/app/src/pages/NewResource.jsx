import { Form, Field, Button } from '../components'
import { useState } from 'react'
import logic from '../logic'

function NewResource() {
  const [resourceType, setResourceType] = useState('activity')

  function handleCreateResourceSuccess() {
    console.log('resource created successfully')
  }
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = {}

    // FormData is a class. it's a complex object that cannot be iterated over. however it provides the entries method that returns an array of key-value pairs that can be iterated over: an array of arrays. we destructure each entry into key and value that gives us access to those values which we then store in the data object on each loop.

    // we access the key using square brackets because it's a variable that contains the name of the form field. the field name is dynamic so we use square brackets to access it dynamically.

    // form values are (casi) always strings. we need to store the topics as a an array of strings because that's how we've stored it in our backend: tagArray. So we loop through the data object and every time we find a key value pair in which the key is topic, we push it to the existing value. if we don't do this, if we have more than one topic it will overwrite the previous one instead of accumulating them.

    for (let [key, val] of formData.entries()) {
      if (key === 'topic' && !data.topic) {
        data.topic = [val]
      } else if (key === 'topic' && data.topic) {
        data.topic.push(val)
      } else {
        data[key] = val
      }
    }

    try {
      logic
        .createResource(data)
        .then(() => {
          handleCreateResourceSuccess()
        })
        .catch((error) => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
  }

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
            value="activity"
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
            value="book"
            checked={resourceType === 'book'}
            onChange={() => setResourceType('book')}
          >
            Libro
          </Field>
          <Field
            name="resourceType"
            type="radio"
            inputId="special-date-radio"
            value="special-date"
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
                name="topic"
                value="cultural-diversity"
                type="checkbox"
                inputId="cultural-diversity-check"
              >
                Diversidad cultural
              </Field>
              <Field
                name="topic"
                value="bullying"
                type="checkbox"
                inputId="bullying-check"
              >
                Bullying
              </Field>
              <Field
                name="topic"
                value="functional-diversity"
                type="checkbox"
                inputId="functional-diversity-check"
              >
                Diversidad funcional
              </Field>
              <Field
                name="topic"
                value="lgbt+"
                type="checkbox"
                inputId="lgbt+-check"
              >
                LGTB+
              </Field>
              <Field
                name="topic"
                value="gender-equality"
                type="checkbox"
                inputId="gender-equality-check"
              >
                Igualdad de género
              </Field>
              <Field
                name="topic"
                value="childrens-rights"
                type="checkbox"
                inputId="childrens-rights-check"
              >
                Derechos de la infancia
              </Field>
            </fieldset>
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
            <fieldset>
              <legend>Selecciona los temas relacionados a la actividad</legend>
              <Field
                name="topic"
                value="cultural-diversity"
                type="checkbox"
                inputId="cultural-diversity-check"
              >
                Diversidad cultural
              </Field>
              <Field
                name="topic"
                value="bullying"
                type="checkbox"
                inputId="bullying-check"
              >
                Bullying
              </Field>
              <Field
                name="topic"
                value="functional-diversity"
                type="checkbox"
                inputId="functional-diversity-check"
              >
                Diversidad funcional
              </Field>
              <Field
                name="topic"
                value="lgbt+"
                type="checkbox"
                inputId="lgbt+-check"
              >
                LGTB+
              </Field>
              <Field
                name="topic"
                value="gender-equality"
                type="checkbox"
                inputId="gender-equality-check"
              >
                Igualdad de género
              </Field>
              <Field
                name="topic"
                value="childrens-rights"
                type="checkbox"
                inputId="childrens-rights-check"
              >
                Derechos de la infancia
              </Field>
            </fieldset>
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
            <fieldset>
              <legend>Selecciona los temas relacionados a la actividad</legend>
              <Field
                name="topic"
                value="cultural-diversity"
                type="checkbox"
                inputId="cultural-diversity-check"
              >
                Diversidad cultural
              </Field>
              <Field
                name="topic"
                value="bullying"
                type="checkbox"
                inputId="bullying-check"
              >
                Bullying
              </Field>
              <Field
                name="topic"
                value="functional-diversity"
                type="checkbox"
                inputId="functional-diversity-check"
              >
                Diversidad funcional
              </Field>
              <Field
                name="topic"
                value="lgbt+"
                type="checkbox"
                inputId="lgbt+-check"
              >
                LGTB+
              </Field>
              <Field
                name="topic"
                value="gender-equality"
                type="checkbox"
                inputId="gender-equality-check"
              >
                Igualdad de género
              </Field>
              <Field
                name="topic"
                value="childrens-rights"
                type="checkbox"
                inputId="childrens-rights-check"
              >
                Derechos de la infancia
              </Field>
            </fieldset>
          </>
        )}
        <Button type="submit">Crear</Button>
      </Form>
    </>
  )
}

export default NewResource
