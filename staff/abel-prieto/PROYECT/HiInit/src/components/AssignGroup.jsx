import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import { Pointer, CommandBar, } from '../utils'
import logic from '../logic'

function AssignGroup() {
    const [selectedGroup, setSelectedGroup] = useState('')
    const [selectedUser, setSelectedUser] = useState('')
    const [showGroups, setShowGroups] = useState(true)
    const [showUsers, setShowUsers] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [commandText, setCommandText] = useState('')
    const [uknownCommand, setUknownCommand] = useState(false)
    const [menu, setMenu] = useState(false)
    const { pointer } = Pointer()

    // const navigate = useNavigate()
    // const { handleError } = useContext(Context)

    const handleGroupChange = (event) => {
        const selectedGroup = event.target.value
        setSelectedGroup(selectedGroup)
        setShowUsers(true)
    }

    const handleUserChange = (event) => {
        const selectedUser = event.target.value
        setSelectedUser(selectedUser)
        setShowButton(true)
    }

    const handleSubmit = () => {
        // Aquí puedes manejar la lógica para enviar la información seleccionada
        console.log('Selected Group:', selectedGroup)
        console.log('Selected User:', selectedUser)
    }

    return <>
        <p>~$</p>
        <span>
            <p id="client-error-newgroup">ADMIN - Assign or change groups on users: </p>

            <br />
            <div className='all-inline'>
                {showGroups && (
                    <div className="show-list-items">
                        <select onChange={handleGroupChange}>
                            <option value="groups">- Select Group -</option>
                            <option value="group1">Group1</option>
                            <option value="group2">Group2</option>
                            <option value="group3">Group3</option>
                            <option value="group4">Group4</option>
                        </select>
                    </div>
                )}

                <br />

                {showUsers && (
                    <div className="show-list-items">
                        <select onChange={handleUserChange}>
                            <option value="users">- Select User -</option>
                            <option value="user1">User1</option>
                            <option value="user2">User2</option>
                            <option value="user3">User3</option>
                            <option value="user4">User4</option>
                        </select>
                    </div>
                )}

                {showButton && (
                    <button className="button-form" type="submit" >Assign</button>
                )}
            </div>

        </span>

        {uknownCommand && (
            <span>
                <p>shell: command not found: '{commandText}'. Entry SUDO, DESKTOP or EXIT</p>
            </span>
        )}
    </>
}

export default AssignGroup