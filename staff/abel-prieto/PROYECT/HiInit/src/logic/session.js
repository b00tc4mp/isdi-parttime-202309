const session = {
    set sessionUserId(userId) {
        if (userId) {
            sessionStorage.userId = userId
        } else {
            delete sessionStorage.userId
        }
    },

    get sessionUserId() {
        return sessionStorage.userId ? sessionStorage.userId : null
    }
}

export default session