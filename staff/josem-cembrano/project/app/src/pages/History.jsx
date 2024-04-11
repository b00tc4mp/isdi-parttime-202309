import React, { useState, useEffect } from 'react'
import { useContext } from '../hooks'
import { NewHistory } from '../components/'
import { useNavigate } from 'react-router-dom'
import { AiFillFileAdd } from "react-icons/ai";
import logic from '../logic'

export default function History( { onSuccess }) {
  console.log('HISTORY')

  const context = useContext()

  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState([])
  const [view, setView] = useState(null)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const retrivedHistory = await logic.retrieveHistory()
      setHistory(retrivedHistory)
    } catch (error) {
      context.handleError(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

    function handleNewHistoryClick() {
      setView('new-history')
      console.log('click')
  }

    function handleNewHistoryCancel() {
      setView(null)
  }

    function handleNewHistoryPublish() {
      setView(null)
      navigate('/history')
      window.scrollTo(0, 0)
      
      fetchData()
  }

  if(isLoading){
    return <div>Waiting...</div>
  }
  return (
    <>
      {view === 'new-history' && <NewHistory onPublish={handleNewHistoryPublish} onCancel={handleNewHistoryCancel} />}
      <div className='container-history'>
        {logic.context.token && logic.context.isAdmin && (<button className='button-add text-gray-600 transition-colors duration-300 cursor-pointer' onClick={handleNewHistoryClick}><AiFillFileAdd size={20} /></button>)}
        <div className="flex flex-wrap gap-1 flex-row pt-2">
          {
            history.length !== 0 && (history.map((history) => {
              return <div key={history.id}>
                <div className="p-10 w-full lg:w-3/4 bg-gray-900 border m-auto border-gray-200 rounded-lg shadow-custom text-gray-100 dark:border-yellow-800">
                  <img className="rounded-t-lg m-auto" src={history.image} alt="" />
                  <div className="p-5">
                    <p className="mb-3 font-normal text-center dark:text-gray-400 myfont"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Our History</span>{history.text}</p>
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