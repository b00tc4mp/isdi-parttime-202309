import logic from '../logic/index.js'
import { errors } from 'shared'
const { NotFoundError } = errors

export default (req, res) => {
  try {
    logic
      .retrieveResources()
      .then((resources) => res.json(resources))
      .catch((error) => {
        let status = 500
        if (error instanceof NotFoundError) {
          status = 404
        }
        res.status(status).json({
          error: error.constructor.name,
          message: error.constructor.message,
        })
        return
      })
  } catch (error) {
    let status = 500

    if (error instanceof ContentError || error instanceof TypeError) {
      status = 406
    }
    res.status(status).json({
      error: error.constructor.name,
      message: error.message,
    })
  }
}
