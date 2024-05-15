import logic from '../logic/index.js'
import { errors } from 'shared'
const { NotFoundError, ContentError } = errors

export default (req, res) => {
  const { id } = req.params
  try {
    logic
      .deleteResource(id)
      .then(() => res.status(200).send())
      .catch((error) => {
        let status = 500
        if (error instanceof NotFoundError) {
          status = 404
        }
        res
          .status(status)
          .json({ error: error.constructor.name, message: error.message })
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
