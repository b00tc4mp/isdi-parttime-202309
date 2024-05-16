import logic from '../logic/index.js'
import { errors } from 'shared'
const { NotFoundError, ContentError } = errors

//when you send a request to an endpoint, you can include information in the request in several ways, primarily in the body of the JSON payload or as URL parameters. In the body of the JSON payload: is typically used with POST, PUT, PATCH, and sometimes DELETE requests. The body of the request contains the data you want to send to the server, often in JSON format. As URL params: This method is typically used with GET requests to filter or search resources. It can also be used with DELETE requests to specify which resource to delete by its ID directly in the URL. In this case we use params because all we are sending is the id of the resource to be deleted:

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
