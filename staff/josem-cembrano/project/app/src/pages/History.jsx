import React, { useState, useEffect } from 'react'
import { useContext } from '../hooks'
import { NewHistory } from '../components/'
import { AiFillFileAdd } from "react-icons/ai";
import logic from '../logic'

export default function History( { onSuccess }) {
  console.log('HISTORY')

  const context = useContext()

  const [isLoading, setIsLoading] = useState(true)
  const [history, setHistory] = useState([])
  const [view, setView] = useState(null)

  function handleModifyHistorySubmit(image, text) {

    return (async () => {
        try {
            await logic.modifyHistory(image, text)
            onSuccess()
        } catch (error) {
            context.handleError(error)
        }
    })()
}

  const fetchData = async () => {
    try {
      const retrivedHistory = await logic.retrieveHistory()
      setHistory(retrivedHistory[0])
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

  if(isLoading){
    return <div>Waiting...</div>
  }
  return (
    <>
      {view === 'new-history' && <NewHistory onPublish={handleModifyHistorySubmit} onCancel={handleNewHistoryCancel} />}
      <div className='container-history'>
        {logic.context.token && logic.context.isAdmin && (<button className=' z-50 button-add text-gray-600 transition-colors duration-300 cursor-pointer button-add-history' onClick={handleNewHistoryClick}><AiFillFileAdd size={20} /></button>)}
        <div className="flex flex-wrap gap-1 flex-row pt-2">
          {
            history && <div>
            <div className="p-10 w-full lg:w-3/4 bg-gray-900 border m-auto border-gray-200 rounded-lg shadow-custom text-gray-100 dark:border-yellow-800">
              <p className="mb-3 font-normal text-center dark:text-gray-400 myfont"><span className='italic mr-2 text-sm font-normal dark:text-yellow-400'>Our History</span></p>
              <img className="rounded-t-lg m-auto" src={history.image} alt="" />
              <div className="p-5">
              {history.text}
              </div>
            </div>
          </div>
          }
        </div>
      </div>
      </>
  )
  
}