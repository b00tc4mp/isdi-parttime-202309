import { Button } from '../components'

function ResourceActivity(props) {
  return (
    <article className="resource-activity">
      {/* We hardcode the type of resource because we already know what it is because this component is only rendered for this type of resource. If we write props.resourceType we get it from the database and it's in English */}

      <span>Actividad</span>
      <h2>{props.title}</h2>

      <img src={props.image}></img>
      <p>{props.description} </p>
      <a>{props.link}</a>
      <p>{props.topic}</p>
      <Button>Editar</Button>
      <Button>Eliminar</Button>
    </article>
  )
}

export default ResourceActivity
