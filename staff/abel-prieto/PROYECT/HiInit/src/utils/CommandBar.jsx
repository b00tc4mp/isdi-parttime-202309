import { useState, useEffect } from 'react'
import logic from '../logic'
import session from '../logic/session'

export default function CommandBar() {
    const [username, setUsername] = useState('')
    const [group, setGroup] = useState('')
    const [role, setRole] = useState('')

    useEffect(() => {
        if (session.token) {
            try {
                logic.retrieveUser()
                    .then(user => {
                        setUsername(user.username)
                        setGroup(user.group)
                        setRole(user.role)
                    })
                    .catch(error => alert(error.message))
            } catch (error) {
                alert(error.message)
            }
        } else {
            setUsername('guest')
            setGroup('hiinit.com')
            setRole('guest')
        }

        // if (session.sessionUserId === null) {
        //     try {
        //         logic.retrieveGuest()
        //             .then(guest => {
        //                 setUsername(guest.username)
        //                 setGroup(guest.group)
        //                 setRole(guest.role)
        //             })
        //             .catch(error => alert(error.message))
        //     } catch (error) {
        //         alert(error.message)
        //     }
        // }
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

