import { validate, errors } from '../../../shared'

async function registerUser(name, email, password) {
  validate.text(name, 'name')
  validate.email(email, 'email')
  validate.password(password, 'password')

  try {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/users/`, req)

    if (!res.ok) {
      const body = await res.json()
      throw new errors[body.error](body.message)
    }
    return null
  } catch (error) {
    throw error
  }
}

export default registerUser
