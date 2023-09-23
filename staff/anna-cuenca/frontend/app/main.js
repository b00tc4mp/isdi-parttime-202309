
// Functions //




// Storage //

var users = []

var userFalse = {}

var userExists = false;
    



    userFalse.name = 'pepito'
    userFalse.email = 'pepitogrillo@gmail.com'
    userFalse.password = '1230'

    users.push(userFalse)




// Register //

var registerView = document.getElementById('register')

registerView.style.display = 'none'

var registerLoginLink = registerView.querySelector('a')

registerLoginLink.onclick = function (event){
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = 'block'
}

var registerForm = registerView.querySelector('form')

registerForm.onsubmit = function(event){
    event.preventDefault()

    var nameInput = registerForm.querySelector('#name')
    var emailInput = registerForm.querySelector('#email')
    var passwordInput = registerForm.querySelector('#password')

    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value

    var user = {}
    



    user.name = name
    user.email = email
    user.password = password

    var found = false;
    for(var i = 0; i < users.length; i++){
        if (users[i].email == user.email){
            found = true;
            console.log('Error this mail is already used, please login')
            registerView.style.display = 'none'
            loginView.style.display = 'block'
            break
        } else {
            found = false;
            console.log(`Thanks for register, ${user.name}`)
            users.push(user)
            registerView.style.display = 'none'
            loginView.style.display = 'none'
            homeView.style.display = 'block'
            homeView.innerText = "Hello, " + name
            break
        }
    }


 

   

 
    



}
  




// Login //

var loginView = document.getElementById('login') //traeme login, una variable que apunta al objeto

var loginRegisterLink = loginView.querySelector('a') //de los elementos de login, llega a ancor "a"



loginRegisterLink.onclick = function (event){
    event.preventDefault()

    loginView.style.display = 'none'

    registerView.style.display = 'block'

    //TODO implement login functionality
}


// home  //

var homeView = document.getElementById('home')

homeView.style.display = 'none'


