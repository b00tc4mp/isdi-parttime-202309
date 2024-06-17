import { useNavigate, useParams } from 'react-router-dom'
import { Form, Field, Button } from '../components'
import { useState, useEffect } from 'react'
import logic from '../logic'

function EditResource() {
  const [resource, setResource] = useState({})
  // check url for id of resource

  const { id } = useParams()

  // call endpoint to get the list of resources from the database
  // find the resource with the correct id in the list
  // store the resource into a state
  const fetchResource = () => {
    try {
      logic
        .retrieveResources()
        .then((resources) => {
          const resource = resources.find((resource) => resource._id === id)
          setResource(resource)
          setResourceType(resource.resourceType)
        })
        .catch((error) => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchResource()
  }, [])

  // when the resource variable changes (dependency array) do a console.log of the resource
  useEffect(() => {
    console.log('resource:', resource)
  }, [resource])

  // populate the form with the data from this state we just stored

  const [resourceType, setResourceType] = useState('activity')
  const navigate = useNavigate()

  function handleEditResourceSuccess() {
    navigate('/resources')
  }

  function handleCancel() {
    navigate('/resources')
  }

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = {}

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
          handleEditResourceSuccess()
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
      <h3>Editar recurso</h3>
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
            inputId="date-radio"
            value="date"
            checked={resourceType === 'date'}
            onChange={() => setResourceType('date')}
          >
            Fecha especial
          </Field>
        </fieldset>

        {/* show different forms depending on what resource you choose */}
        {resourceType === 'activity' && (
          <>
            <Field name="title" inputId="title-input" value={resource.title}>
              Título
            </Field>
            <Field
              name="description"
              inputId="description-input"
              value={resource.description}
            >
              Descripción
            </Field>
            <Field name="image" inputId="image-input" value={resource.image}>
              Imagen
            </Field>
            <img src={resource.image}></img>
            <Field name="link" inputId="link-input" value={resource.link}>
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
            <Field name="title" inputId="title-input" value={resource.title}>
              Título
            </Field>
            <Field name="author" inputId="author-input" value={resource.author}>
              Autor
            </Field>
            <Field
              name="description"
              inputId="description-input"
              value={resource.description}
            >
              Descripción
            </Field>
            <Field name="image" inputId="image-input" value={resource.image}>
              Imagen
            </Field>
            <img src={resource.image}></img>
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
        {resourceType === 'date' && (
          <>
            <Field name="title" inputId="title-input" value={resource.title}>
              Título
            </Field>
            <Field
              name="description"
              inputId="description-input"
              value={resource.description}
            >
              Descripción
            </Field>
            <Field name="link" inputId="link-input" value={resource.link}>
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
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button type="submit">Actualizar</Button>
      </Form>
    </>
  )
}

export default EditResource
