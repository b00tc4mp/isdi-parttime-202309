function registerUser(name, email, password) {
    validateText(name, 'Name');
    validateText(email, 'E-mail');
    validateText(password, 'Password');

    var user = findUserByEmail(email);

    if (user) {
        clearFormFields(registerForm);
        throw new Error('User already exists!');
    }

    createUser(name, email, password);
    
    clearFormFields(registerForm);
}

function authenticateUser(email, password) {
    validateText(email, 'email');
    validateText(password, 'password');

    var user = findUserByEmail(email);

    if (!user || user.password !== password) {
        throw new Error('Wrong credentials!');
    }
}

function retrieveUser(email) {
    validateText(email, 'email')

    var user = findUserByEmail(email)

    if (!user)
        throw new Error('User not found!')

    return user
}

function updateUserPassword(currentPass, newPass, confirmPass, email) {
    validateText(email, 'email')
    validateText(newPass, 'new password')
    validateText(confirmPass, 'confirm password')
    validateText(currentPass, 'current password')

    var user = findUserByEmail(email)

    if (!user || user.password !== currentPass){
        throw new Error('wrong credentials')
    }

    if (newPass !== confirmPass){
        throw new Error('new password and its confirmation do not match')
    }

    if (currentPass === newPass){
        throw new Error('the new pass is the same that current pass')
    }
    
    user.password = newPass
}

function updateUserEmail(email, newEmail, putPassword) {
    validateText(email, 'email')
    validateText(newEmail, 'new email')
    validateText(putPassword, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== putPassword)
        throw new Error('wrong credentials')

    if (newEmail === email)
        throw new Error('The new E-mail is same to current E-mail!')

    user.email = newEmail
}

  


