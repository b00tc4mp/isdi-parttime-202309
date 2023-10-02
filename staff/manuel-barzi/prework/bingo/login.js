// TODO implement login process and navigate to home

const loginForm = document.getElementById('login-form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    console.log('hello login', email, password)

    alert('user logged in')

    location.href = 'home.html'
}