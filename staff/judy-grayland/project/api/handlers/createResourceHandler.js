import logic from '../logic/index.js'
import { errors } from 'shared'
const { DuplicityError, ContentError } = errors

export default (req, res) => {
  const {
    title,
    description,
    resourceType,
    topic,
    link,
    image,
    author,
    ageRange,
  } = req.body

  try {
    logic
      .createResource({
        title,
        description,
        resourceType,
        topic,
        link,
        image,
        author,
        ageRange,
      })
      .then(() => {
        res.status(201).send()
      })
      .catch((error) => {
        let status = 500
        if (error instanceof DuplicityError) {
          status = 409
        }
        res.status(status).json({
          error: error.constructor.name,
          message: error.constructor.message,
        })
      })
  } catch (error) {
    let status = 500
    if (error instanceof ContentError || error instanceof TypeError) {
      status = 406
      res
        .status(status)
        .json({ error: error.constructor.name, message: error.message })
    }
  }
}
