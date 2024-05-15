import registerUser from './registerUser'
import authenticateUser from './authenticateUser'
import logoutUser from './logoutUser'
import createResource from './createResource'
import retrieveResources from './retrieveResources'
import deleteResource from './deleteResource'

const logic = {
  registerUser,
  authenticateUser,
  logoutUser,
  createResource,
  retrieveResources,
  deleteResource,
}

export default logic
