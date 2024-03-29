export default async function logoutUser() {
    this.token = null
    this.sessionUserId = null

    this.isAdmin = null
}