import { useNavigate } from 'react-router-dom'

import { Button } from '../components'
import Resource from './Resource'

function ResourcesList() {
  const navigate = useNavigate()

  function handleNewResourceClick() {
    navigate('/resources/new')
  }
  return (
    <>
      <h2>Resources</h2>
      <Resource></Resource>
      <Button onClick={handleNewResourceClick}>Crear nuevo recurso</Button>
    </>
  )
}

export default ResourcesList
