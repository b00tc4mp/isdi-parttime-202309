var homeView = document.getElementById('home');
homeView.style.display = 'none'

//Go back
var goBackButton = homeView.querySelector('#goback');

goBackButton.onclick = function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = ''
    profileView.style.display = 'none'
}

//Change password
var passwordChangeForm = document.getElementById('changepassform');
var changepassButton = document.getElementById('changepass');

changepassButton.onclick = function (event) {
    event.preventDefault();

    passwordChangeForm.style.display = ''
    emailChangeForm.style.display = 'none'
    changepassButton.style.display = 'none'
    changeemailButton.style.display = 'none'
}

passwordChangeForm.onsubmit = function (event) {
    event.preventDefault();

    var currentPassInput = passwordChangeForm.querySelector('#currentPassword');
    var newPassInput = passwordChangeForm.querySelector('#newPassword');
    var confirmPassInput = passwordChangeForm.querySelector('#confirmPassword')

    var currentPass = currentPassInput.value;
    var newPass = newPassInput.value;
    var confirmPass = confirmPassInput.value;

    try {
        updateUserPassword(currentPass, newPass, confirmPass, emailLoggedIn);

        alert('Password changed')

        clearFormFields(passwordChangeForm);

        loginView.style.display = '';
        homeView.style.display = 'none';
        passwordChangeForm.style.display = 'none';
        emailChangeForm.style.display = 'none';
        changepassButton.style.display = ''
        changeemailButton.style.display = ''

    } catch (error) {
        alert(error.message);
    }
}

//Change e-mail
var emailChangeForm = document.getElementById('changeemailform');
var changeemailButton = document.getElementById('changeemail');

changeemailButton.onclick = function (event) {
    event.preventDefault();

    emailChangeForm.style.display = ''
    passwordChangeForm.style.display = 'none'
    changepassButton.style.display = 'none'
    changeemailButton.style.display = 'none'
}

emailChangeForm.onsubmit = function (event) {
    event.preventDefault();

    var newEmailInput = emailChangeForm.querySelector('#newEmail');
    var currentEmailInput = emailChangeForm.querySelector('#currentEmail');
    var putPasswordInput = emailChangeForm.querySelector('#putpassword');

    var newEmail = newEmailInput.value;
    var email = currentEmailInput.value;
    var putPassword = putPasswordInput.value;

    try {
        updateUserEmail(email, newEmail, putPassword, emailLoggedIn);

        emailLoggedIn = newEmail;

        alert('E-mail changed')

        clearFormFields(emailChangeForm);

        loginView.style.display = '';
        homeView.style.display = 'none';
        passwordChangeForm.style.display = 'none';
        emailChangeForm.style.display = 'none';
        changepassButton.style.display = ''
        changeemailButton.style.display = ''
    } catch (error) {
        alert(error.message);
    }
}

var homeLink = homeView.querySelector('#home-link')

homeLink.onclick = function (event) {
    event.preventDefault()

    profileView.style.display = 'none'
}

//PROFILE
var profileView = homeView.querySelector('#profile-view')

profileView.style.display = 'none'

var profileLink = homeView.querySelector('#profile-link')

profileLink.onclick = function (event) {
    event.preventDefault()

    profileView.style.display = ''
    changepassButton.style.display = ''
    changeemailButton.style.display = ''
}

