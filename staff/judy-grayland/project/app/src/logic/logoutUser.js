import context from './context'

function logoutUser() {
  context.sessionUserId = null
  context.token = null
  context.role = null
}

export default logoutUser
