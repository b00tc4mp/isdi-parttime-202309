import dotenv from 'dotenv'
import mongoose from 'mongoose'
import createActivity from './createActivity.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      createActivity(
        'Taller de prevención del acoso',
        'Charlas de 2 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar',
        'https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png',
        'https://www.anar.org/colegios-e-institutos/'
      )
        .then(() => {
          console.log('activity created successfully')
        })
        .catch((error) => console.error(error))
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => {
    console.error(error)
  })
