import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import logic from '../logic'
import session from '../logic/session'
import Context from '../Context'

export default function CommandBar() {
    const [username, setUsername] = useState('')
    const [group, setGroup] = useState('')
    const [role, setRole] = useState('')

    const navigate = useNavigate()
    const { handleError } = useContext(Context)

    useEffect(() => {
        if (session.token) {
            try {
                logic.retrieveUser()
                    .then(user => {
                        setUsername(user.username)
                        setGroup(user.group)
                        setRole(user.role)
                    })
                    .catch(error => {
                        handleError(error, navigate)
                    })
            } catch (error) {
                handleError(error, navigate)
            }
        } else {
            try {
                logic.retrieveGuest()
                    .then(guest => {
                        setUsername(guest.username)
                        setGroup(guest.group)
                        setRole(guest.role)
                    })
                    .catch(error => {
                        handleError(error, navigate)
                    })
            } catch (error) {
                handleError(error, navigate)
            }
        }
    }, [])

    return <>
        <div className="command-style">
            <span className="command-style--username">{username}</span>
            <span className="command-style--rest">@</span>
            <span className="command-style--group">{group}</span>
            <span className="command-style--rest">-</span>
            <span className="command-style--user">{role}</span>
            <span className="command-style--rest">:$</span>
        </div>
    </>
}

