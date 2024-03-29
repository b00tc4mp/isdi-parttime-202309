import React, { useState, useEffect } from 'react'
import { useContext } from '../hooks'
import { NewPerfilDog } from '../components/'
import { useNavigate } from 'react-router-dom'
import { FaDog } from "react-icons/fa"
import logic from '../logic'

export default function Males() {
  console.log('FEMALES')

  const context = useContext()

  const [isLoading, setIsLoading] = useState(true)
  const [females, setFemales] = useState([])
  const [view, setView] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const retrivedFemales = await logic.retrieveFemales()
        setFemales(retrivedFemales)
      } catch (error) {
        context.handleError(error)
      }
      setIsLoading(false)
    }

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
          females.lenght !== 0 && (females.map((female) => {
            return <div key={female.id}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="rounded-t-lg" src={female.image} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{female.afix}</h5>
                        <h4 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{female.name}</h4>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{female.gender}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{female.birthDate}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{female.text}</p>
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