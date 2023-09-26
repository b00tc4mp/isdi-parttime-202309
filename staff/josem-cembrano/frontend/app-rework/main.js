var users = [

    {
        name: 'qwe',
        email: 'qwe@gmail.com',
        password: 'qwe',
    }

]

var registerView = document.getElementById('register')
registerView.style.display = 'none'

var registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event) {
    event.preventDefautl()
    
    registerView.style.display = 'none'
    loginView.style.display = 'block'
}


var registerForm = registerView.querySelector('form') //(querySelector)=> buscar el elemento form.

registerForm.onsubmit = function (event) {
    event.preventDefautl()

    var emailImput = registerForm.querySelector('#email')
    var email = emailImput.ariaValueMax

    var userFound = false

    for (var i = 0; i < users.length && !userFound; i++) {
        var user = users[i]

        if (user.email === email)
            userfound = true
    }

    if (userFound)
        alert('Este usuario ya existe')

        return
}


