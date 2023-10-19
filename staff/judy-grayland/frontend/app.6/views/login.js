var loginView = document.getElementById('login-view')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
  event.preventDefault()

  loginView.style.display = 'none'
  registerView.style.display = ''
}

var loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
  event.preventDefault()

  var emailInput = loginForm.querySelector('#email-input')
  var passwordInput = loginForm.querySelector('#password-input')

  var email = emailInput.value
  var password = passwordInput.value

  try {
    authenticateUser(email, password)

    emailInput.value = ''
    passwordInput.value = ''

    var newUser = retrieveUser(email)

    profileLink.innerText = 'Hello, ' + newUser.name + '!'

    emailLoggedIn = email

    loginView.style.display = 'none'

    // render posts in home

    var postsView = homeView.querySelector('#posts-view')

    postsView.innerHTML = ''

    posts.forEach(function (post) {
      var article = document.createElement('article')
      article.setAttribute('class', 'post')

      var h2 = document.createElement('h2')
      h2.innerText = post.author

      var img = document.createElement('img')
      img.setAttribute('class', 'post-image')
      img.src = post.image

      var p = document.createElement('p')
      p.innerText = post.text

      article.append(h2, img, p)

      postsView.append(article)
    })

    // show home
    homeView.style.display = ''
  } catch (error) {
    alert(error.message)
  }
}
