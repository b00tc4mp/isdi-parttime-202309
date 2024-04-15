import React, { useState } from 'react'
import { Form, Field } from "../library"
import logic from "../logic"
import { useContext } from '../hooks'
import { IoMdMale, IoMdFemale } from 'react-icons/io'

export default function NewPicture(props) {
    console.log('NewPicture')
    const context = useContext()
    const [gender, setGender] = useState('male')
    const [isPuppy, setIsPuppy] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        const image = event.target.image.value
        const afix = event.target.afix.value
        const name = event.target.name.value
        const birthDate = event.target.birthDate.value
        const text = event.target.text.value

        try {
            logic.publishDog(image, afix, name, gender, birthDate, isPuppy, text, error => {
                if (error) {
                    context.handleError(error)
                    return;
                }
            })
            props.onPublish()
            location.reload()
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleCancel = event => {
        event.preventDefault()
        props.onCancel()
    }

    const handleGenderChange = event => {
        setGender(event.target.value)
    }

    const handlePuppyChange = event => {
        setIsPuppy(event.target.checked)
    }

    return (
        <div className='complete-form-container'>
            <Form onSubmit={handleSubmit}>
                <h2 className="h2" style={{ fontSize: '25px' }}>Add new perfil dog</h2>
                <Field id="image" type="url">Image</Field>
                <Field id="afix">Afix</Field>
                <Field id="name">Name</Field>
                <div className='flex justify-between my-4'>
                    <label htmlFor='male'><IoMdMale className='text-blue-300' size={20}></IoMdMale></label>
                    <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                    <label htmlFor='female'><IoMdFemale className='text-blue-300' size={20}></IoMdFemale></label>
                    <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                </div>
                <Field id='birthDate'>Birth Date(YYYY-MM-DD)</Field>
                <div className='label flex justify-center m-4 items-center space-x-3'>
                    <label htmlFor='puppy'>Puppy</label>
                    <input type='checkbox' id='puppy' checked={isPuppy} onChange={handlePuppyChange} />
                </div>
                <Field id="text">Text</Field>
                <div>
                    <button className="flex justify-between button-form" type='submit'>Add</button>
                    <button className="flex justify-between button-form" onClick={handleCancel}>Cancel</button>
                </div>
            </Form>
        </div>
    );
}
