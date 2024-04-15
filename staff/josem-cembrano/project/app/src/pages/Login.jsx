import React from 'react'
import logic from '../logic'
import { Form } from '../library'
import { Box, TextField } from '@mui/material';
import { useContext } from '../hooks'

export default function Login({onSuccess}) {
    console.log('Login')

    const context = useContext()

    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        return (async() => {
            try {
                await logic.loginUser(email, password)

                const user = await logic.retrieveUser()
                
                logic.context.isAdmin = user.Admin

                onSuccess()
            } catch (error) {
                context.handleError(error)
            }
        })()
    }


    return (
<div className='complete-form-container all-form myfont font-bold '>
    <Form onSubmit={handleSubmit}>
        <h1 className='text-center font-bold text-3xl text-yellow-600'>Login</h1>
        {/* Utiliza el componente Box de MUI para envolver los campos de texto */}
        <Box
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {/* Campos de texto TextField de MUI */}
            <TextField
                id="email-input"
                type="email"
                label="E-mail"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'darkblue' // Borde dorado cuando enfocado
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'darkblue' // Borde dorado cuando se pasa el mouse
                    },
                    '& .MuiInputLabel-outlined': {
                        color: 'darkblue' // Texto azul oscuro cuando no enfocado
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#FFA000' // Texto dorado cuando enfocado
                    }
                }}
            />
            <TextField
                id="password-input"
                type="password"
                label="Password"
                variant="outlined"
                sx={{
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00008B' // Borde dorado cuando enfocado
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'darkblue' // Borde azul oscuro cuando se pasa el mouse
                    },
                    '& .MuiInputLabel-outlined': {
                        color: 'darkblue' // Texto azul oscuro cuando no enfocado
                    },
                    '& .MuiInputLabel-outlined.Mui-focused': {
                        color: '#FFA000' // Texto dorado cuando enfocado o cuando se pasa el mouse
                    }
                }}                
            />
        </Box>

        {/* Botón de envío del formulario */}
        <button className='button-form' type="submit">Login</button>
    </Form>
</div>
    )
}