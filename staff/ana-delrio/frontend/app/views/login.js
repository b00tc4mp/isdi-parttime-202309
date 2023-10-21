var loginView = document.getElementById('login-view')

// loginView.style.display = 'none'

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

        var user = retrieveUser(email)

        profileLink.innerText = user.name

        emailLoggedIn = email

        loginView.style.display = 'none'

        // render posts in home (TODO)

        var postsView = homeView.querySelector('#posts-view')

        postsView.innerHTML = ''
        // postsView.innerHTML se utiliza para eliminar todo el contenido dentro del elemento HTML 

        // Iterar a través de un array de objetos 'posts'
        posts.forEach(function (post) {
            // con el document.createElement lo que estamos haciendo es crear un article para cada post
            var article = document.createElement('article')
            // a ese articulo le meto la clase post que es la que hemos puesto en el html
            article.setAttribute('class', 'post')

            // PRIMERO:Crear un elemento 'h2' para el título del 'post', el correo en este caso 
            var h2 = document.createElement('h2')
            h2.innerText = post.author

            // SEGUNDO: Crear un elemento 'img' para la imagen del 'post'
            var img = document.createElement('img')
            img.setAttribute('class', 'post-image')
            // Aquí estamos tomando la URL de la img almacenado en img del objeto post, y se la asignamos como la fuente de la imagen que se va a mostrará en el elemento <img>
            img.src = post.image

            // TERCERO: Crear un elemento 'p' para el contenido del 'post', para la entradilla
            var p = document.createElement('p')
            p.innerText = post.text


            // los tres elementos de arriba los mtermos en el article
            article.append(h2, img, p)

            // metemos el articulo dentro del posts.View
            postsView.append(article)
        })

        // show home

        homeView.style.display = ''
    } catch (error) {
        alert(error.message)
    }
}