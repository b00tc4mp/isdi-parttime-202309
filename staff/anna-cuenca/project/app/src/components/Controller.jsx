import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Form, Field } from '../library/index'
import logic from '../logic'
import { useContext } from '../hooks'

export default function Controller() {

    const navigate = useNavigate()

    const context = useContext()

    console.log('Controller')


    return <div className="container">
        <h2>Working page</h2>


    </div>


}