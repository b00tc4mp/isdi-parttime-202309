// USER LOGED

const session = {
    set sessionUserId(userId) {
        sessionStorage.userId = userId
    },

    get sessionUserId() {
        return sessionStorage.userId ? sessionStorage.userId : null
    },

    set token(token) {
        sessionStorage.token = token
    },

    get token() {
        return sessionStorage.token ? sessionStorage.token : null
    }
}

export default session