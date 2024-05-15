import { Button, DeleteResourceButton } from '../components'
import topicTranslations from '../logic/topicTranslations'

function ResourceBook(props) {
  const translatedTopics = props.topic.map((topic) => topicTranslations[topic])

  return (
    <article className="resource-book">
      <span
        style={{ backgroundColor: '#A627A1', color: 'white', padding: '.5em' }}
      >
        Libro
      </span>
      <h2>{props.title}</h2>

      <img src={props.image}></img>
      <p>{props.description}</p>
      <span>Autor: {props.author}</span>
      <p>
        Temas: <em>{translatedTopics.join(', ')}</em>
      </p>
      <Button>Editar</Button>
      <DeleteResourceButton resourceId={props._id} />
    </article>
  )
}

export default ResourceBook
