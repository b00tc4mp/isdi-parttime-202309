import { Button } from '../components'

function ResourceBook(props) {
  return (
    <article className="resource-book">
      <span>Libro</span>
      <h2>{props.title}</h2>

      <img src={props.image}></img>
      <p>{props.description}</p>
      <span>{props.author}</span>
      <p>{props.topic}</p>
      <Button>Editar</Button>
      <Button>Eliminar</Button>
    </article>
  )
}

export default ResourceBook
