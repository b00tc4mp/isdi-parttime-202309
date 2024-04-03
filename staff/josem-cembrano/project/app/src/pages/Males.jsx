import React, { useState, useEffect } from 'react'
import { useContext } from '../hooks'
import { NewPerfilDog } from '../components/'
import { useNavigate } from 'react-router-dom'
import { FaDog } from "react-icons/fa"
import { RiDeleteBin2Fill } from "react-icons/ri"
import logic from '../logic'
import { Button } from '../library'

export default function Males() {
  console.log('MALES')

  const context = useContext()

  const [isLoading, setIsLoading] = useState(true)
  const [males, setMales] = useState([])
  const [view, setView] = useState(null)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const retrivedMales = await logic.retrieveMales()
      setMales(retrivedMales)
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
      navigate('/login')

      window.scrollTo(0, 0)
  }

function handleDeleteDog(dogId) {
  console.log(dogId)
  return (async() => {
    try {
        await logic.deleteDog(dogId)
        fetchData()
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
       {logic.context.token && logic.context.isAdmin && (<button className='button-add-dog' onClick={handleNewPerfilDogClick}><FaDog size={20} /></button>)}
        <div className="flex flex-wrap gap-1 flex-row pt-2">
        {
          males.lenght !== 0 && (males.map((male) => {
            return <div key={male.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={male.image} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Afix:</span>{male.afix}</h5>
                        <h4 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Name:</span>{male.name}</h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Gender:</span>{male.gender}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>BirthDate:</span>{male.birthDate}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Description:</span>{male.text}</p>
                    {logic.context.token && logic.context.isAdmin &&(<button onClick={ () => handleDeleteDog(male.id) }><RiDeleteBin2Fill className='text-yellow-600 deleteButton' size={20}/></button>)}
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