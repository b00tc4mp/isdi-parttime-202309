import { Button, Topic } from '../components'
import topicTranslations from '../logic/topicTranslations'

function ResourceDate(props) {
  const translatedTopics = props.topic.map((topic) => topicTranslations[topic])

  return (
    <article className="resource-date">
      {/* We hardcode the type of resource because we already know what it is since this component is only rendered for this type of resource. If we write props.resourceType we get it from the database and it's in English */}

      <span
        style={{ backgroundColor: '#05B4C0', color: 'white', padding: '.5em' }}
      >
        Fecha especial
      </span>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a>{props.link}</a>
      <p>
        Temas: <em>{translatedTopics.join(', ')}</em>
      </p>
      <Button>Editar</Button>
      <Button>Eliminar</Button>
    </article>
  )
}

export default ResourceDate
