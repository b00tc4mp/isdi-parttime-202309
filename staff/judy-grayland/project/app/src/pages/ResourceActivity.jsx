import { Button, Topic } from '../components'
import topicTranslations from '../logic/topicTranslations'

function ResourceActivity(props) {
  const translatedTopics = props.topic.map((topic) => topicTranslations[topic])

  return (
    <article className="resource-activity">
      {/* We hardcode the type of resource because we already know what it is since this component is only rendered for this type of resource. If we write props.resourceType we get it from the database and it's in English */}

      <span
        style={{ backgroundColor: '#EDB900', color: 'white', padding: '.5em' }}
      >
        Actividad
      </span>
      <h2>{props.title}</h2>

      <img src={props.image}></img>
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

export default ResourceActivity
