import dotenv from 'dotenv'
import mongoose from 'mongoose'
import createResource from './createResource.js'

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL_TEST)
  .then(() => {
    try {
      createResource({
        // since an activity doesn't require fields like image and ageRange, we just leave them out
        title: 'Taller de prevención del acoso',
        description:
          'Charlas de 2 horas de duración para niños de 4,5 y 6 de primaria, para el profesorado y las familias. Impartido en horario escolar. Fundación Anar',
        resourceType: 'activity',
        tag: ['bullying', 'xenofobia'],
        link: 'https://www.anar.org/colegios-e-institutos/',
        image: 'https://www.anar.org/wp-content/uploads/2024/02/Logo-ANAR.png',
      })
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
