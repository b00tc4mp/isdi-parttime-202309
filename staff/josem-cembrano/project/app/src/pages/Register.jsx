import { Button, Form, Field } from '../library'
import logic from '../logic'
import { Box, TextField } from '@mui/material';
import { useContext } from '../hooks'
import { toast } from 'sonner'

export default function Register(props) {
    console.log('Register')

    const context = useContext()

    function handleSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        return (async() => {
            try {
                await logic.registerUser(name, email, password)

                await logic.loginUser(email, password)

                const user = await logic.retrieveUser()
                
                logic.context.isAdmin = user.Admin

                toast.success('You are now registered')

                props.onSuccess()
            } catch (error) {
                context.handleError(error)
            }
        })()
    }

    return (
        <div className='complete-form-container all-form myfont font-bold '>
            <Form onSubmit={handleSubmit}>
                <h1 className='text-center font-bold text-3xl text-yellow-600'>Register</h1>
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
                        label="Email"
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
                <button className='button-form' type="submit">Register</button>
            </Form>
        </div>
            )
}