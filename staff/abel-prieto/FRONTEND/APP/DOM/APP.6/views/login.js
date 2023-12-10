// LOGIN VIEW

loginView = document.getElementById('login')
loginRegisterLink = loginView.querySelector('a')

loginRegisterLink.onclick = function (event) {
    event.preventDefault()

    loginForm.reset()
    loginView.style.display = 'none'
    registerView.style.display = ''
}

loginForm = loginView.querySelector('form')

loginForm.onsubmit = function (event) {
    event.preventDefault()

    var emailInput = loginForm.querySelector('#email')
    var passwordInput = loginForm.querySelector('#password')

    var email = emailInput.value
    var password = passwordInput.value

    try {
        authenticateUser(email, password)

        loginForm.reset()

        var user = retrieveUser(email)

        profileLink.innerText = user.name 

        loggedInEmail = email

        loginView.style.display = 'none'

        // render post

        postsView.innerHTML = ''                                // Vacía el apartado de post-view

        posts.toReversed().forEach(function (post) {
             var article = document.createElement('article')    // Crea un element HTML dentro del id post-view (article)
             article.setAttribute('class', 'post')              // Establece que para ese 'article' que se haya creado, le asigne un atributo class (1) con el término post (2) class="post"

             var h2 = document.createElement('h2')
             h2.innerText = post.author                         // Recoje en forma de texto (innerText) el valor del post.author

             var img = document.createElement('img')
             img.setAttribute('class', 'post-img')
             img.src = post.image                               // Mediante el .src recoje la imagen que hay en el post.image

             var p = document.createElement('p')
             p.innerText = post.text

             article.append(h2, img, p)                         // Mete los 3 elementos (h2, img, p) en el article creado

             postsView.append(article)                          // Mete el elemento article en la vista de postsView
        })

        // show home
        
        homeView.style.display = ''
        postsView.style.display = ''
        logoutButton.style.display = ''
        profileLink.style.display = ''
        profileView.style.display = 'none'
        newPostView.style.display = 'none'

    } catch (error) {
        alert(error.message)
    }
}