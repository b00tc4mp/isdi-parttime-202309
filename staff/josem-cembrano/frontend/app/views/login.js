var loginView = document.getElementById('login-view')

var loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = 'block'
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

        var homeTitle = homeView.querySelector('h1')

        var user = retrieveUser(email)

        homeTitle.innerText = 'Hello, ' + user.name + '!'

        emailLoggedIn = email

        loginView.style.display = 'none'

        var postsView = homeView.querySelector('#posts-view')
        postsView.innerHTML = ''//*(innerHTML), para borrar lo que hay dentro del html.
        post.forEach(function (post) {
            var article = document.createElement('article')//*(document.createElement), te permite crear un elemento del html.
            article.setAttribute('class', 'post')//*(setAtribute), como <article class='post'> tiene class='post', lo traemos a js con setAtribute.

            var h2 = document.createElement('h2')
            h2.innetText = post.author//*(innerText), para acceder al contenido de texto de un elemento HTML.

            var img = document.createElement('img')
            img.setAttribute('class', 'post-image')
            img.src = post.image//imagen + search y nos traemos la direccion que hay reflejada en la base de datos (post/image)

            var p = document.createElement('p')
            p.innerText = post.text

            article.append(h2, img, p)//*(append), para meter lo que hemos traido dentro de article
            postsView.append(article)
        })



        homeView.style.display = 'block'
    } catch (error) {
        alert(error.message)
    }
}