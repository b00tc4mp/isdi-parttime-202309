import Button from './Button'
import { NotFoundError } from '../../../shared/errors'
import logic from '../logic'
import { errors } from '../../../shared'

function DeleteResourceButton({ resourceId }) {
  const handleDeleteResourceClick = () => {
    if (confirm('¿Seguro que quieres eliminar este recurso?')) {
      try {
        logic
          .deleteResource(resourceId)
          .then(() => console.log('resource deleted sucessfully'))
          .catch((error) => {
            throw new Error(error)
          })
      } catch (error) {
        throw new Error(error)
      }
    }
  }
  return <Button onClick={handleDeleteResourceClick}>Eliminar</Button>
}

export default DeleteResourceButton
