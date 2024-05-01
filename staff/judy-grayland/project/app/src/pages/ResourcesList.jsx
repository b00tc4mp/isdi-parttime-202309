import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Button } from '../components'
import Resource from './ResourceActivity'

import logic from '../logic'

function ResourcesList() {
  const navigate = useNavigate()
  const [resources, setResources] = useState([])

  function handleNewResourceClick() {
    navigate('/resources/new')
  }

  const displayResources = () => {
    try {
      logic
        .retrieveResources()
        .then((resources) => {
          setResources(resources)
        })
        .catch((error) => {
          console.error(error)
        })
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    displayResources()
  }, [])

  return (
    <>
      <h2>Resources</h2>
      <p>{resources.length}</p>
      <Resource></Resource>
      <Resource></Resource>
      <Resource></Resource>
      <Button onClick={handleNewResourceClick}>Crear nuevo recurso</Button>
    </>
  )
}

export default ResourcesList
