import context from './context'

function logoutUser() {
  context.sessionUserId = null
  context.token = null
}

export default logoutUser
