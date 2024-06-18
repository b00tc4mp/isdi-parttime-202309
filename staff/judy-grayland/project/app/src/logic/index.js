import registerUser from './registerUser'
import authenticateUser from './authenticateUser'
import logoutUser from './logoutUser'
import createResource from './createResource'
import retrieveResources from './retrieveResources'
import deleteResource from './deleteResource'
import editResource from './editResource'
import context from './context'

const logic = {
  registerUser,
  authenticateUser,
  logoutUser,
  createResource,
  retrieveResources,
  deleteResource,
  editResource,
  context,
}

export default logic
