import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Button } from '../components'
import { ResourceActivity, ResourceBook } from '.'

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
      <h2>Recursos</h2>
      <p>{resources.length}</p>
      {resources.map((resource) => {
        if (resource.resourceType === 'book') {
          return (
            <ResourceBook
              key={resource._id}
              title={resource.title}
              description={resource.description}
              image={resource.image}
              author={resource.author}
              topic={resource.topic}
            />
          )
        }

        return (
          <ResourceActivity
            key={resource._id}
            title={resource.title}
            description={resource.description}
            image={resource.image}
            link={resource.link}
            topic={resource.topic}
          />
        )
      })}

      <Button onClick={handleNewResourceClick}>Crear nuevo recurso</Button>
    </>
  )
}

export default ResourcesList
