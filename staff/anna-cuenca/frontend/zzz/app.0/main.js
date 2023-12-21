
// Functions //




// Storage //

var users = []

var userFalse = {}

var userExists = false;

var nameLoginUser
var nameRegisterUser
    



    userFalse.name = 'pepito'
    userFalse.email = 'pepitogrillo@gmail.com'
    userFalse.password = '1230'

    users.push(userFalse)


// home  //

var homeView = document.getElementById('home')

homeView.style.display = 'none'




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
            
            
        } else {
            found = false;
            nameRegisterUser = users[i].name
        }
    }

    if (found == true){
        alert('ERROR this mail is already used, please login');
        nameInput.value = ''
        emailInput.value = ''
        passwordInput.value = ''
        registerView.style.display = 'none'
        loginView.style.display = 'block'
    } else {
        alert(`Thanks for register, please login`);
            users.push(user)
            registerView.style.display = 'none'
            loginView.style.display = 'block'
            homeView.style.display = 'none'
    }

}
  




// Login //

var loginView = document.getElementById('login') //traeme login, una variable que apunta al objeto

var loginRegisterLink = loginView.querySelector('a') //de los elementos de login, llega a ancor "a"




loginRegisterLink.onclick = function (event){
    event.preventDefault()

    loginView.style.display = 'none'

    registerView.style.display = 'block'
    

}

    //Implement login funcionality

    var loginForm = loginView.querySelector('form')

    loginForm.onsubmit = function(event){
         event.preventDefault()

         var loginForm = loginView.querySelector('form')
         var emailInput = loginForm.querySelector('#email')
         var passwordInput = loginForm.querySelector('#password')
     
         var email = emailInput.value
         var password = passwordInput.value

         console.log(email)
         console.log(password)

         var user = {}
         var findUser = false

        
         user.email = email
         user.password = password

         
        for(var i = 0; i < users.length; i++){

            if (users[i].email == user.email && users[i].password == user.password){
                findUser = true
                nameLoginUser = users[i].name
                console.log(findUser);
            }
            
    }

    if (findUser == true){
        alert(`Welcome ${nameLoginUser}`);
        registerView.style.display = 'none'
        loginView.style.display = 'none'
        homeView.style.display = 'block'
        homeView.innerText = "Hello, " + nameLoginUser
    } else {
        alert(`ERROR: Unregistered user or invalid password`);
        emailInput.value = ''
        passwordInput.value = ''
        registerView.style.display = 'none'
        homeView.style.display = 'none'
    }

}





