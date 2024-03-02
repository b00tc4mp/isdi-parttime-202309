function username() {
    return `name-${Math.random()}`
}

function email() {
    return `email-${Math.random()}@gmail.com`
}

function password() {
    return `password-${Math.random()}`
}

function text() {
    return `text-${Math.random()}`
}

const random = {
    username,
    email,
    password,
    text
}

export default random