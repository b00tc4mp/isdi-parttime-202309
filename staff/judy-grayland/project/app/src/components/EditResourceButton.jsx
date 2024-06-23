import Button from './Button'
import { NotFoundError } from '../../../shared/errors'
import logic from '../logic'
import { errors } from '../../../shared'
import { useNavigate } from 'react-router-dom'

function EditResourceButton({ resourceId }) {
  const navigate = useNavigate()

  function handleEditResourceClick() {
    navigate(`/resources/${resourceId}`)
  }
  // const handleEditResourceClick = () => {
  //   try {
  //     logic
  //       .editResource(resourceId, newData)
  //       .then(() => {
  //         console.log('resource edited sucessfully')
  //         // by using navigate(0) we reload the page we're on, so the resource that's been deleted no longer shows
  //         navigate(0)
  //       })
  //       .catch((error) => {
  //         throw new Error(error)
  //       })
  //   } catch (error) {
  //     throw new NotFoundError(error)
  //   }
  // }
  return <Button onClick={handleEditResourceClick}>Editar</Button>
}

export default EditResourceButton
