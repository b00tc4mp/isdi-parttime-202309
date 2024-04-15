import logic from '../logic'
import { useState } from 'react'
import { useContext } from '../hooks'
import { useParams, Link} from 'react-router-dom'
import { Box, TextField } from '@mui/material';
import { Button, Form } from '../library'

export default function Profile({ onSuccess }) {
    const context = useContext()

    const [newEmail, setNewEmail]=useState('')
    const [newEmailConfirm, setNewEmailConfirm]=useState('')

    const [password, setPassword]=useState('')

    const [newPassword, setNewPassword]=useState('')
    const [newPasswordConfirm, setNewPasswordConfirm]=useState('')

    const { form } = useParams()

    function handleChangeMailSubmit(event) {
        event.preventDefault()

        return (async () => {
            try {
                await logic.changeEmail(newEmail, newEmailConfirm, password)
                onSuccess()
                setNewEmail('')
                setNewEmailConfirm('')
                setPassword('')
            } catch (error) {
                context.handleError(error)
            }
        })()
    }

    function handleChangeNewEmail(event){
        setNewEmail(event.target.value)
    }

    function handleChangeNewEmailConfirm(event){
        setNewEmailConfirm(event.target.value)
    }

    function handlePasswordEmail(event){
        setPassword(event.target.value)
    }

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        return (async () => {
            try {
                await logic.changePassword(password, newPassword, newPasswordConfirm)
                onSuccess()
                setNewPassword('')
                setNewPasswordConfirm('')
                setPassword('')
            } catch (error) {
                context.handleError(error)
            }
        })()
    }

    function handleChangeNewPassword(event){
        setPassword(event.target.value)
    }

    function handleChangeNewPasswordConfirm(event){
        setNewPassword(event.target.value)
    }

    function handlePassword(event){
        setNewPasswordConfirm(event.target.value)
    }

    return (
<div className='complete-form-container'>
    { form === 'email' && 
        <article className='text-center'>
            <h2 className='text-lg font-bold text-yellow-700'>Change email</h2>
            <Form onSubmit={handleChangeMailSubmit}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="new-email-input"
                        type="email"
                        placeholder="New Email"
                        value={newEmail}
                        onChange={handleChangeNewEmail}
                        label="New e-mail"
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
                        id="new-email-confirm-input"
                        type="email"
                        placeholder="Confirm New Email"
                        value={newEmailConfirm}
                        onChange={handleChangeNewEmailConfirm}
                        label="Confirm New e-mail"
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
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordEmail}
                        label="Password"
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
                </Box>
                <button className="flex justify-between button-form myfont" type='submit'>Update email</button>
                <Link className='cancel-link flex justify-between button-form myfont' to='/'>Cancel</Link>
            </Form>
        </article>
    }
    { form === 'password' && 
        <article className='text-center'>
            <h2 className='text-lg font-bold text-yellow-700'>Change password</h2>
            <Form onSubmit={handleChangePasswordSubmit}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="password-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChangeNewPassword}
                        label="Password"
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
                        id="new-password-input"
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={handleChangeNewPasswordConfirm}
                        label="New password"
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
                        id="new-password-confirm-input"
                        type="password"
                        placeholder="New Password Confirm"
                        value={newPasswordConfirm}
                        onChange={handlePassword}
                        label="New password confirm"
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
                </Box>
                <Button type='submit'>Update password</Button>
                <Link className='cancel-link' to='/'>Cancel</Link>
            </Form>
        </article>
    }
</div>
    )
}