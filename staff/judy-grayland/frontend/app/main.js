// STORAGE (DB)
// TODO: rename users array to existingUsers
var existingUsers = []

//  REGISTER
var registerView = document.getElementById('register')
registerView.style.display = "none"
var registerForm = registerView.querySelector('form')
var registerErrorMessage = document.getElementById('register-errormsg')
registerErrorMessage.style.display = 'none'
var registerLoginLink = registerView.querySelector('a')


function toggleDisplay(pageA, pageB) {
 if(pageA.style.display === 'none' && pageB.style.display === 'block'){
  pageA.style.display = 'block'
  pageB.style.display = 'none'
 }
 if(pageA.style.display === 'block' && pageB.style.display === 'none'){
  pageA.style.display = 'none'
  pageB.style.display = 'block'
 }
}
registerLoginLink.onclick = function(event) {
 event.preventDefault()
 toggleDisplay(registerView, loginView)
  //registerView.style.display = 'none'
  //loginView.style.display = 'block'
}

registerForm.onsubmit = function(event) {
  event.preventDefault()

  var nameInput = registerForm.querySelector('#name')
  var name = nameInput.value
  
  var emailInput = registerForm.querySelector('#email')
  var email = emailInput.value
  
  var passwordInput = registerForm.querySelector('#password')
  var password = passwordInput.value

  var user = {}

  user.name = name
  user.email = email
  user.password = password  

  
  function getExistingUsersEmails(existingUser) {
    return existingUser.email
  } 
  
  function isUserValid(newUser) {
    const existingUserEmails = existingUsers.map(getExistingUsersEmails)
    if(existingUserEmails.includes(newUser.email)) {
      return false
    }
    return true
  }

  function registerNewUser(newUser) {
    existingUsers.push(newUser)
  }

  function clearInputFields() {
    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''
  }

  //check if user exists
  if(isUserValid(user)){
    registerNewUser(user)
    clearInputFields()
    toggleDisplay(registerView, loginView)
  } else {
    showErrorMessage(registerErrorMessage)
  }
}

// LOGIN
var loginView = document.getElementById('login')
var loginErrorMessage = document.getElementById('login-errormsg')
loginErrorMessage.style.display = 'none'
var loginRegisterLink = loginView.querySelector('a') 
var loggedinUser = {}


loginRegisterLink.onclick = function(event) {

  event.preventDefault()
  // toggleDisplay(loginView, registerView)
  
  loginView.style.display ='none'
  registerView.style.display = 'block'
}

  // login functionality

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function(event) {
  event.preventDefault()

  var emailInput = loginForm.querySelector('#email')
  var email = emailInput.value
  
  var passwordInput = loginForm.querySelector('#password')
  var password = passwordInput.value

  // Callback function that compares two properties between two objects
  function isUserMatch(existingUser) {
    if(email === existingUser.email && password === existingUser.password){
      return true
    } 
    return false
  }

// Iterates through users array to see if there's a match
  function isUserFound() {
   const found = existingUsers.find(isUserMatch)
   
   if(found){
    loggedinUser = found
    return true
   }
   return false
  }
  
  // conditional that dictates whether user has logged in successfully or not 
  if(isUserFound()){
    showHome()
  } else {
    showErrorMessage(loginErrorMessage)
  }
}

// HOME
var homeView = document.getElementById('home')
homeView.style.display = 'none'

function showHome() {
  toggleDisplay(loginView, homeView)
  // homeView.style.display = 'block'
  // loginView.style.display = 'none'
  homeView.innerText = `Hello ${loggedinUser.name}!`
}

function showErrorMessage(element) {
  element.style.display = 'block'
  element.style.color = 'red'
}


