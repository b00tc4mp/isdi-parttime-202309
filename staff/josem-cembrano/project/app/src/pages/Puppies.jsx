import React, { useState, useEffect } from 'react'
import { useContext } from '../hooks'
import { NewPerfilDog } from '../components/'
import { useNavigate } from 'react-router-dom'
import { FaDog } from "react-icons/fa"
import { RiDeleteBin2Fill } from "react-icons/ri"
import { Button } from '../library'
import logic from '../logic'

export default function Puppies() {
  console.log('PUPPIES')

  const context = useContext()

  const [isLoading, setIsLoading] = useState(true)
  const [puppies, setpuppies] = useState([])
  const [view, setView] = useState(null)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const retrivedPuppies = await logic.retrievePuppies()
      setpuppies(retrivedPuppies)
    } catch (error) {
      context.handleError(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {

    fetchData()
  }, [])

  function handleNewPerfilDogClick() {
    setView('new-picture')
    console.log('click')
}

  function handleNewPerfilDogCancel() {
    setView(null)
}

  function handleNewPerfilDogPublish() {
    setView(null)
    navigate('/puppies')

    window.scrollTo(0, 0)
}

function handleDeleteDog(dogId) {
  return (async() => {
    try {
        await logic.deleteDog(dogId)
        
        const updatePuppies = puppies.filter(p => p.id !== dogId)
        setpuppies(updatePuppies)

    } catch (error) {
        context.handleError(error)
    }
})()
}

  if(isLoading){
    return <div>Waiting...</div>
  }
  return (
    <>
           {view === 'new-picture' && <NewPerfilDog onPublish={handleNewPerfilDogPublish} onCancel={handleNewPerfilDogCancel} />}
       <div className='container'>
       {logic.context.token && logic.context.isAdmin && (<button className='button-add text-gray-600 transition-colors duration-300 cursor-pointer' onClick={handleNewPerfilDogClick}><FaDog size={20} /></button>)}
        <div className="flex flex-wrap gap-1 flex-row pt-2">
        {
          puppies.lenght !== 0 && (puppies.map((puppy) => {
            return <div key={puppy.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={puppy.image} alt="" />
                    <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Afix:</span>{puppy.afix}</h5>
                        <h4 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Name:</span>{puppy.name}</h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Gender:</span>{puppy.gender}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>BirthDate:</span>{puppy.birthDate}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Description:</span>{puppy.text}</p>
                    {logic.context.token && logic.context.isAdmin &&(<Button onClick={ () => handleDeleteDog(puppy.id) }><RiDeleteBin2Fill className='text-yellow-600 deleteButton' size={20}/></Button>)}
                </div>
            </div>
            </div>
          }))
        }
        </div>
      </div>
    </>
  )
}