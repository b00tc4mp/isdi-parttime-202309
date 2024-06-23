import { useNavigate, useParams } from 'react-router-dom'
import { Form, Field, Button } from '../components'
import { useState, useEffect } from 'react'
import logic from '../logic'

function EditResource() {
  const [resource, setResource] = useState({})
  const [resourceType, setResourceType] = useState('activity')
  const [resourceTopic, setResourceTopic] = useState(null)
  const navigate = useNavigate()

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
          setResourceTopic(resource.topic)
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
    console.log(resourceTopic)
  }, [])

  // when the resource variable changes (dependency array) do a console.log of the resource
  useEffect(() => {
    console.log('resource:', resource)
  }, [resource])

  // populate the form with the data from this state we just stored

  function handleEditResourceSuccess() {
    navigate('/resources')
  }

  function handleCancel() {
    navigate('/resources')
  }
  // // if the list includes the topic, we remove it. If it doesn´t have, it adds it.
  // function handleTopicChange(topic, topicList) {
  //   console.log('argumentos de la función', topicList, topic)
  //   let updatedTopics = topicList
  //   if (topicList.includes(topic) && topicList.length > 1) {
  //     updatedTopics = topicList.filter((_topic) => _topic !== topic)
  //   } else {
  //     updatedTopics.push(topic)
  //   }
  //   console.log('lista a setear', updatedTopics)
  //   setResourceTopic(updatedTopics)
  //   console.log('resultado de la función', resourceTopic)
  // }

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = {}

    console.log(formData.entries())
    for (let [key, val] of formData.entries()) {
      if (key === 'topic' && !data.topic) {
        data.topic = [val]
      } else if (key === 'topic' && data.topic) {
        data.topic.push(val)
      } else {
        data[key] = val
      }
    }
    console.log(data)

    try {
      logic
        .editResource(id, data)
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
            readOnly
            name="resourceType"
            type="radio"
            inputId="activity-radio"
            value="activity"
            // resourceType is a variable. Checked is an attribute on an HTML tag that accepts true or false. If it coincides with the string "activity", it evaluates to true and that makes it checked.
            checked={resourceType === 'activity'}
          >
            Actividad
          </Field>
          <Field
            readOnly
            name="resourceType"
            type="radio"
            inputId="book-radio"
            value="book"
            checked={resourceType === 'book'}
          >
            Libro
          </Field>
          <Field
            readOnly
            name="resourceType"
            type="radio"
            inputId="date-radio"
            value="date"
            checked={resourceType === 'date'}
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

            {resourceTopic && (
              <fieldset>
                <legend>
                  Selecciona los temas relacionados a la actividad
                </legend>
                <Field
                  name="topic"
                  value="cultural-diversity"
                  type="checkbox"
                  inputId="cultural-diversity-check"
                  checked={resourceTopic.includes('cultural-diversity')}
                  updatedListReq={{
                    value: 'cultural-diversity',
                    valuesList: resourceTopic,
                    valuesListSetter: setResourceTopic,
                  }}
                  // onChange={() =>
                  //   handleTopicChange('cultural-diversity', resourceTopic)
                  // }
                >
                  Diversidad cultural
                </Field>
                <Field
                  name="topic"
                  value="bullying"
                  type="checkbox"
                  inputId="bullying-check"
                  checked={resourceTopic.includes('bullying')}
                  updatedListReq={{
                    value: 'bullying',
                    valuesList: resourceTopic,
                    valuesListSetter: setResourceTopic,
                  }}
                >
                  Bullying
                </Field>
                <Field
                  name="topic"
                  value="functional-diversity"
                  type="checkbox"
                  inputId="functional-diversity-check"
                  checked={resourceTopic.includes('functional-diversity')}
                  updatedListReq={{
                    value: 'functional-diversity',
                    valuesList: resourceTopic,
                    valuesListSetter: setResourceTopic,
                  }}
                >
                  Diversidad funcional
                </Field>
                <Field
                  name="topic"
                  value="lgbt+"
                  type="checkbox"
                  inputId="lgbt+-check"
                  checked={resourceTopic.includes('lgbt+')}
                  updatedListReq={{
                    value: 'lgbt+',
                    valuesList: resourceTopic,
                    valuesListSetter: setResourceTopic,
                  }}
                >
                  LGTB+
                </Field>
                <Field
                  name="topic"
                  value="gender-equality"
                  type="checkbox"
                  inputId="gender-equality-check"
                  checked={resourceTopic.includes('gender-equality')}
                  updatedListReq={{
                    value: 'gender-equality',
                    valuesList: resourceTopic,
                    valuesListSetter: setResourceTopic,
                  }}
                >
                  Igualdad de género
                </Field>
                <Field
                  name="topic"
                  value="childrens-rights"
                  type="checkbox"
                  inputId="childrens-rights-check"
                  checked={resourceTopic.includes('childrens-rights')}
                  updatedListReq={{
                    value: 'childrens-rights',
                    valuesList: resourceTopic,
                    valuesListSetter: setResourceTopic,
                  }}
                >
                  Derechos de la infancia
                </Field>
              </fieldset>
            )}
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
                checked={resourceTopic.includes('cultural-diversity')}
                updatedListReq={{
                  value: 'cultural-diversity',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Diversidad cultural
              </Field>
              <Field
                name="topic"
                value="bullying"
                type="checkbox"
                inputId="bullying-check"
                checked={resourceTopic.includes('bullying')}
                updatedListReq={{
                  value: 'bullying',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Bullying
              </Field>
              <Field
                name="topic"
                value="functional-diversity"
                type="checkbox"
                inputId="functional-diversity-check"
                checked={resourceTopic.includes('functional-diversity')}
                updatedListReq={{
                  value: 'functional-diversity',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Diversidad funcional
              </Field>
              <Field
                name="topic"
                value="lgbt+"
                type="checkbox"
                inputId="lgbt+-check"
                updatedListReq={{
                  value: 'lgbt+',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                LGTB+
              </Field>
              <Field
                name="topic"
                value="gender-equality"
                type="checkbox"
                inputId="gender-equality-check"
                checked={resourceTopic.includes('gender-equality')}
                updatedListReq={{
                  value: 'gender-equality',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Igualdad de género
              </Field>
              <Field
                name="topic"
                value="childrens-rights"
                type="checkbox"
                inputId="childrens-rights-check"
                checked={resourceTopic.includes('childrens-rights')}
                updatedListReq={{
                  value: 'childrens-rights',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
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
                checked={resourceTopic.includes('cultural-diversity')}
                updatedListReq={{
                  value: 'cultural-diversity',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Diversidad cultural
              </Field>
              <Field
                name="topic"
                value="bullying"
                type="checkbox"
                inputId="bullying-check"
                checked={resourceTopic.includes('bullying')}
                updatedListReq={{
                  value: 'bullying',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Bullying
              </Field>
              <Field
                name="topic"
                value="functional-diversity"
                type="checkbox"
                inputId="functional-diversity-check"
                checked={resourceTopic.includes('functional-diversity')}
                updatedListReq={{
                  value: 'functional-diversity',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Diversidad funcional
              </Field>
              <Field
                name="topic"
                value="lgbt+"
                type="checkbox"
                inputId="lgbt+-check"
                updatedListReq={{
                  value: 'lgbt+',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                LGTB+
              </Field>
              <Field
                name="topic"
                value="gender-equality"
                type="checkbox"
                inputId="gender-equality-check"
                checked={resourceTopic.includes('gender-equality')}
                updatedListReq={{
                  value: 'gender-equality',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
              >
                Igualdad de género
              </Field>
              <Field
                name="topic"
                value="childrens-rights"
                type="checkbox"
                inputId="childrens-rights-check"
                checked={resourceTopic.includes('childrens-rights')}
                updatedListReq={{
                  value: 'childrens-rights',
                  valuesList: resourceTopic,
                  valuesListSetter: setResourceTopic,
                }}
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
