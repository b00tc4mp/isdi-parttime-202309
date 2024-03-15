import { useContext } from '../hooks'
import { useState, useEffect } from 'react'
import { Template } from '../components'
import { Container, Button, Form, Input } from '../library'

import helpers from '../logic/helpers'
import logic from '../logic'

function Templates(props) {

    const [templates, setTemplates] = useState([])
    const [rooms, setRooms] = useState([])
    const [filter, setFilter] = useState(null)
    const [reversed, setReversed] = useState(false)
    const [chosenRooms, setChosenRooms] = useState([])
    const [dayOrWeek, setDayOrWeek] = useState('day')
    const [view, setView] = useState(null)

    const context = useContext()

    const refreshTemplates = async () => {
        try {
            const templates = await logic.retrieveTemplates()

            setTemplates(templates)
            setDayOrWeek('day')
        } catch (error) {
            context.handleError(error)
        }
    }

    const refreshRooms = async () => {
        try {
            const rooms = await logic.retrieveRooms()

            setRooms(rooms)
        } catch (error) {
            context.handleError(error)
        }
    }

    useEffect(() => {
        console.log('Templates effect')

        refreshTemplates()
        refreshRooms()
    }, [props.stamp])

    const handleNewTemplateView = () => {
        setView('new-template-view')
    }

    const handleNewTemplateSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.taskName.value
        const periodicityNumber = Number(event.target.periodicityNumber.value)
        const periodicityRange = dayOrWeek
        const rooms = chosenRooms
        const points = Number(event.target.points.value)

        try {
            await logic.createTemplate(name, periodicityNumber, periodicityRange, rooms, points)
            refreshTemplates()
            refreshRooms()
            setView(null)
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleTaskClick = (roomId) => {
        const chosenRoom = roomId
        chosenRooms.includes(chosenRoom) ?
            setChosenRooms(oldRooms => oldRooms.filter(room => room !== roomId)) :
            setChosenRooms(oldRooms => [...oldRooms, chosenRoom])
    }

    const handleSetDay = () => {
        setDayOrWeek('day')
    }

    const handleSetWeek = () => {
        setDayOrWeek('week')
    }

    const handleCancelClick = () => {
        setView(null)
        setDayOrWeek('day')
        setChosenRooms([])
    }

    /* const handleFilterClick = () => {
        setView('filter-view')
    }

    const handleAscendTemplatesClick = () => {
        if (reversed === false) {
            const reversedTemplates = [...templates].reverse()
            setTemplates(reversedTemplates)
            setReversed(true)
        }
    }

    const handleDescendTemplatesClick = () => {
        if (reversed === true) {
            const reversedTemplates = [...templates].reverse()
            setTemplates(reversedTemplates)
            setReversed(false)
        }
    }

    const handleFilterByRoomClick = () => {
        setFilter('room')
        refreshTemplates()
    }

    const handleFilterByRoom = (roomId) => {
        const templatesFilteredByRoom = templates.filter((template) => template.rooms.some((room) => room._id === roomId))
        setTemplates(templatesFilteredByRoom)
        setView(null)
        setFilter(null)
    }

    const handleRestartFilters = () => {
        setView(null)
        setFilter(null)
        refreshTemplates()
    } */

    return <Container>
        {/* {rooms.length === 0 ? <h3 className='text-xl font-bold'>Please create a room before creating a template</h3> : ''}

        {rooms.length > 0 && templates.length === 0 ? <h3 className='text-xl font-bold'>Please click on the + below to create a template</h3> : ''} */}

        {/* {templates.length > 0 ? <article>
            <Button onClick={handleFilterClick}>Filter</Button>
            <Button onClick={handleRestartFilters}>Restart filters</Button>
        </article> : ''}

        {view === 'filter-view' && <article>
            <Button onClick={handleAscendTemplatesClick}>🔼</Button>
            <Button onClick={handleDescendTemplatesClick}>🔽</Button>
            <Button onClick={handleFilterByRoomClick}>By Room</Button>

            {filter === 'room' && templates.map(template => template.rooms.map(room => <Button key={room.id} onClick={() => handleFilterByRoom(room._id)}>{helpers.arrangeText(room.name)}</Button>))}

        </article>} */}

        <article className='flex flex-col gap-[2rem] m-[1.5rem] max-h-[35rem] overflow-y-auto'>
            {rooms.length < 1 ? <h3 className='text-xl font-bold'>Please create a room before creating a template</h3> : templates.length === 0 ? <h3 className='text-xl font-bold'>Please click on the + below to create a template</h3> : templates.map(template => <Template key={template.id} template={template} rooms={rooms} role={props.role} onDeleteSuccess={refreshTemplates} dayOrWeek={dayOrWeek} onSetDay={handleSetDay} onSetWeek={handleSetWeek} onEditSuccess={refreshTemplates} onRefreshRooms={refreshRooms} chosenRooms={chosenRooms} onChosenRoom={handleTaskClick} onCancelClick={handleCancelClick} />)}
        </article>

        <article>
            <Button onClick={handleNewTemplateView} className='plus-button'>
                ➕
            </Button>
        </article>

        {view === 'new-template-view' && <article className='modal-black-bg'>
            <div className='modal-white-bg'>
                <div className='modal-border-button-container items-center '>
                    <Form onSubmit={handleNewTemplateSubmit} id='new-template-form'>
                        <p className='mt-[-1rem]'>Template name</p>

                        <Input id='taskName' type='text' required={true} placeholder={'Name'} className='entrance-input mb-[1rem]'></Input>

                        <p>It repeats every</p>
                        <div className='flex mb-[1rem] gap-[1rem]'>
                            <Input type='number' min='1' id='periodicityNumber' placeholder='Number' required={true} className='entrance-input w-[6rem]'></Input>

                            <Button type='button' id='day' onClick={handleSetDay} style={{ borderWidth: dayOrWeek === 'day' ? '3px' : '1px' }} className='modal-border-button w-[6rem]'>Days</Button>

                            <Button type='button' id='week' onClick={handleSetWeek} style={{ borderWidth: dayOrWeek === 'week' ? '3px' : '1px' }} className='modal-border-button w-[6rem]'>Weeks</Button>
                        </div>

                        <p>Points</p>
                        <Input id='points' placeholder={'Points (optional)'} className='entrance-input mb-[1rem]'>Points(optional)</Input>

                        <p className='text-xl font-bold  mb-[-1rem]'>Choose rooms</p>
                        <article className='flex flex-col gap-[2rem] m-[1.5rem] h-[10rem] overflow-y-auto'>
                            {rooms.map(room => <Button type='button' key={room.id} style={{ borderWidth: chosenRooms.includes(room.id) ? '3px' : '1px' }} onClick={() => handleTaskClick(room.id)} className='modal-border-button mb-[-1rem]'>{helpers.arrangeText(room.name)}</Button>)}
                        </article>
                    </Form>
                </div>

                <div className='close-submit-buttons-container mt-[-4.5rem]'>
                    <Button type='submit' form='new-template-form' className='form-submit-button'>Create</Button>
                    <Button type='button' onClick={handleCancelClick} className='modal-close-button'>X</Button>
                </div>
            </div>
        </article>}
    </Container>
}

export default Templates