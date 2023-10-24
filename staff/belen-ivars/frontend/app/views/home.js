homeView = document.getElementById('home-view')

homeView.style.display = 'none'

logoutButton = homeView.querySelector('#logout-button')

logoutButton.onclick = function () {
    homeView.style.display = 'none'
    profileView.style.display = 'none'
<<<<<<< HEAD
    newPostView.style.display = 'none'
    postsView.style.display = ''
=======
>>>>>>> 946e8c055b046852843d444af216a47eb3fc9f0c
    loginView.style.display = ''
}

changeEmailForm = homeView.querySelector('#change-email-form')

changeEmailForm.onsubmit = function (event) {
    event.preventDefault()

    var newEmailInput = changeEmailForm.querySelector('#new-email-input')
    var newEmailConfirmInput = changeEmailForm.querySelector('#new-email-confirm-input')
    var passwordInput = changeEmailForm.querySelector('#password-input')

    var newEmail = newEmailInput.value
    var newEmailConfirm = newEmailConfirmInput.value
    var password = passwordInput.value

    try {
        changeUserEmail(emailLoggedIn, newEmail, newEmailConfirm, password)

        emailLoggedIn = newEmail

        alert('E-mail changed')

        changeEmailForm.reset()
    } catch (error) {
        alert(error.message)
    }
}

changePasswordForm = homeView.querySelector('#change-password-form')

changePasswordForm.onsubmit = function (event) {
    event.preventDefault()

    var passwordInput = changePasswordForm.querySelector('#password-input')
    var newPasswordInput = changePasswordForm.querySelector('#new-password-input')
    var newPasswordConfirmInput = changePasswordForm.querySelector('#new-password-confirm-input')

    var password = passwordInput.value
    var newPassword = newPasswordInput.value
    var newPasswordConfirm = newPasswordConfirmInput.value

    try {
        changeUserPassword(emailLoggedIn, newPassword, newPasswordConfirm, password)

        alert('Password changed')

        changePasswordForm.reset()
    } catch (error) {
        alert(error.message)
    }
}

homeLink = homeView.querySelector('#home-link')

homeLink.onclick = function (event) {
    event.preventDefault()

    profileView.style.display = 'none'
    newPostView.style.display = 'none'
    postsView.style.display = ''

}
// profile

profileView = homeView.querySelector('#profile-view')

profileView.style.display = 'none'

profilelink = homeView.querySelector('#profile-link')

profilelink.onclick = function (event) {
    event.preventDefault()

<<<<<<< HEAD
    newPostView.style.display = 'none'
    postsView.style.display = 'none'
=======

>>>>>>> 946e8c055b046852843d444af216a47eb3fc9f0c
    profileView.style.display = ''

}

postsView = homeView.querySelector('#posts-view')


newPostView = homeView.querySelector('#new-post-view')
newPostView.style.display = 'none'

newPostButton = homeView.querySelector('#new-post-button')

newPostButton.onclick = function () {
<<<<<<< HEAD
    profileView.style.display = 'none'
    postsView.style.display = ''
=======
>>>>>>> 946e8c055b046852843d444af216a47eb3fc9f0c
    newPostView.style.display = ''
}

newPostForm = newPostView.querySelector('#new-post-form')

cancelNewPostButton = newPostForm.querySelector('#cancel-new-post-button')

cancelNewPostButton.onclick = function (event) {
    event.preventDefault()

<<<<<<< HEAD
    newPostView.style.display = 'none'
    newPostForm.reset()
}

newPostForm.onsubmit = function (event) {
    event.preventDefault()
=======
>>>>>>> 946e8c055b046852843d444af216a47eb3fc9f0c
    var imageInput = newPostForm.querySelector('#image-input')
    var textInput = newPostForm.querySelector('#text-input')

    var image = imageInput.value
    var text = textInput.value

<<<<<<< HEAD
    try {
        publishPost(loggedInEmail, image, text)

        var post = {}

        newPostForm.reset()

        newPostView.style.display = 'none'
        renderPosts()

    } catch (error) {
        alert(error.message)
    }

}

function renderPosts() {
    postsView.innerHTML = ''

    var posts = retrievePosts()

    posts.forEachReverse(function (post) {
=======
    var post = {}

    post.author = loggedInEmail
    post.image = image
    post.text = text

    posts.push(post)

    newPostForm.reset()

    newPostView.style.display = 'none'

    // re-render posts

    postsView.innerHTML = ''

    posts.forEachReverse(function (post) {


>>>>>>> 946e8c055b046852843d444af216a47eb3fc9f0c
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
<<<<<<< HEAD

=======
>>>>>>> 946e8c055b046852843d444af216a47eb3fc9f0c
    })
}