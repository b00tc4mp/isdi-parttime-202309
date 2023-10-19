// HOME VIEW

homeView = document.getElementById('home')
homeView.style.display = 'none'


// HOME LINK

homeLink = homeView.querySelector('#home-link')

homeLink.onclick = function (event) {
    event.preventDefault()

    postsView.style.display = ''
    profileView.style.display = 'none'
    newPostView.style.display = 'none'
}


// PROFILE VIEW

profileView = homeView.querySelector('#profile')
profileView.style.display = 'none'


// PROFILE LINK

profileLink = homeView.querySelector('#profile-link')

profileLink.onclick = function (event) {
    event.preventDefault()

    profileView.style.display = ''
    newPostView.style.display = 'none'
    postsView.style.display = 'none'
}

// POST VIEW

postsView = homeView.querySelector('#post-view')


// NEW POST VIEW

newPostView = homeView.querySelector('#new-post-view')
newPostView.style.display = 'none'


// NEW POST BUTTON

newPostButton = homeView.querySelector('#new-post-button')

newPostButton.onclick = function (event) {
    event.preventDefault()

    newPostView.style.display = ''
    profileView.style.display = 'none'
    postsView.style.display = 'none'
}

// NEW POST FORM

newPostForm = newPostView.querySelector('#new-post-form')

newPostForm.onsubmit = function(event) {
    event.preventDefault()

    var imageInput = newPostForm.querySelector('#image-input')
    var textInput = newPostForm.querySelector('#text-input')

    var image = imageInput.value
    var text = textInput.value

    var newPost = {}

    newPost.author = loggedInEmail
    newPost.image = image
    newPost.text = text

    posts.push(newPost)

    newPostForm.reset()

    newPostView.style.display = 'none'

    // re-render post

    postsView.innerHTML = ''

    posts.toReversed().forEach(function (post) {
        var article = document.createElement('article')    
        article.setAttribute('class', 'post')   

        var h2 = document.createElement('h2')
        h2.innerText = post.author                         

        var img = document.createElement('img')
        img.setAttribute('class', 'post-img')
        img.src = post.image                               

        var p = document.createElement('p')
        p.innerText = post.text

        article.append(h2, img, p)                         

        postsView.append(article)
        
        postsView.style.display = ''
    })

    try {

    } catch(error) {
        alert(error.message)
    }
}

// CANCEL NEW POST BUTTON

cancelNewPostButton = newPostView.querySelector('#cancel-new-post')

cancelNewPostButton.onclick = function (event) {
    event.preventDefault()

    newPostForm.reset()

    postsView.style.display = ''
    newPostView.style.display = 'none'
}


// CREDENTIALS VIEW

checkEmailForm = homeView.querySelector('#select-email')

checkEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = checkEmailForm.querySelector('#new_email')
    var confirmNewEmailInput = checkEmailForm.querySelector('#confirm-new-email')
    var passwordInput = checkEmailForm.querySelector('#password')

    var newEmail = newEmailInput.value
    var confirmNewEmail = confirmNewEmailInput.value
    var password = passwordInput.value

    try {
        changeUserEmail(loggedInEmail, newEmail, confirmNewEmail, password)

        loggedInEmail = newEmail

        alert('Email changed succesfully!')

        checkEmailForm.reset()
    }

    catch (error) {
        alert(error.message)
    }
}

changePasswordForm = homeView.querySelector('#select-password')

changePasswordForm.onsubmit = function(event) {
    event.preventDefault()

    var passwordInput = changePasswordForm.querySelector('#current_password')
    var newPasswordInput = changePasswordForm.querySelector('#new_password')
    var againNewPasswordInput = changePasswordForm.querySelector('#again_new_password')

    var password = passwordInput.value
    var newPassword = newPasswordInput.value
    var againNewPassword = againNewPasswordInput.value

    try {
        changeUserPassword(loggedInEmail, password, newPassword, againNewPassword)

        alert('Password changed succesfully!')

        changePasswordForm.reset()
    }

    catch (error) {
        alert(error.message)
    }
}

// BUTTON LOGOUT

logoutButton = document.getElementById('logout-button')

logoutButton.onclick = function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = ''
}
