import Button from './Button'
import { NotFoundError } from '../../../shared/errors'
import logic from '../logic'
import { errors } from '../../../shared'
import { useNavigate } from 'react-router-dom'

function DeleteResourceButton({ resourceId }) {
  const navigate = useNavigate()
  const handleDeleteResourceClick = () => {
    if (confirm('¿Seguro que quieres eliminar este recurso?')) {
      try {
        logic
          .deleteResource(resourceId)
          .then(() => {
            console.log('resource deleted sucessfully')
            // by using navigate(0) we reload the page we're on, so the resource that's been deleted no longer shows
            navigate(0)
          })
          .catch((error) => {
            throw new Error(error)
          })
      } catch (error) {
        throw new NotFoundError(error)
      }
    }
  }
  return <Button onClick={handleDeleteResourceClick}>Eliminar</Button>
}

export default DeleteResourceButton
