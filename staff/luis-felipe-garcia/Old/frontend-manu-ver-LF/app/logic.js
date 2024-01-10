function registerUser(name, email, password) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')
    
    var user = findUserByEmail(email)

    if (user)
        throw new Error('user already exists')

    createUser(name, email, password)
}

function authenticateUser(email, password) {
    validateText(email, 'email')
    validateText(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
        throw new Error('wrong credentials')
}

function retrieveUser(email) {
    validateText(email, 'email')

    var user = findUserByEmail(email)

    if (!user)
        throw new Error('user not found')

    return user
}

function validateCurrentPassword(currentPassword) {
    if (currentPassword !== user.password) {
        throw new Error('Current password wrong')}
}

var checkCoincidence = function (itemToCheck, checkedItem, textToMessage) {
    validateText(itemToCheck, textToMessage )
    validateText(checkedItem, textToMessage )
    if (itemToCheck !== checkedItem) {
        throw new Error(`${textToMessage} do not match`)
    }
}

var checkElementsChanges = function (currentElement, newElement, textToMessage) {
    if (newElement === currentElement) {
        throw new Error(textToMessage)
    }
}