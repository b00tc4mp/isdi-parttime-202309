import React from 'react'
import { Box, TextField } from '@mui/material'
import { Form } from '../library'
import logic from '../logic'
import { useContext } from '../hooks'
import { toast } from 'sonner'

export default function Contact () {
  console.log('CONTACT')

    const context = useContext()

  function handleSubmit(event) {
    event.preventDefault()

    const nameInput = event.target.querySelector('#name-input')
    const emailInput = event.target.querySelector('#email-input')
    const phoneInput = event.target.querySelector('#phone-input')
    const messageInput = event.target.querySelector('#message-input')

    const name = nameInput.value
    const email = emailInput.value
    const phone = phoneInput.value
    const message = messageInput.value

    return (async() => {
        try {
            const res = await logic.userContact(name, email, phone, message)
            
            toast.success(res.message)

        } catch (error) {
            context.handleError(error)
        }
    })()
}

  return (
    <>
    <div className='complete-form-container all-form myfont font-bold '>
        <Form onSubmit={handleSubmit}>
        <h1 className='text-center font-bold text-3xl text-yellow-600'>Contact</h1>
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
                    id="name-input"
                    type="name"
                    label="Name"
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
                    id="email-input"
                    type="email"
                    label="E-Mail"
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
                <TextField
                    id="phone-input"
                    type="text"
                    label="Phone"
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
                    id="message-input"
                    type="message"
                    label="Message"
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
            <button className='button-form' type="submit">Send</button>
        </Form>
    </div>
    </>
        )
      }