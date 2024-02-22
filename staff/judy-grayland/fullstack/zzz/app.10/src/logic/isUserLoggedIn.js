import context from './context'

export default function isUserLoggedIn() {
  // convertimos a booleano el null de token o no token.
  return !!context.token
}
