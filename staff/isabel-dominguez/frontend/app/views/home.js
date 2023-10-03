var homeView = document.getElementById('home');
homeView.style.display = 'none'

//Go back
var goBackButton = homeView.querySelector('#goback');

goBackButton.onclick = function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    loginView.style.display = 'block'
};

//Change password
var passwordChangeForm = document.getElementById('changepassform');
var changepassButton = document.getElementById('changepass');

changepassButton.onclick = function (event) {
    event.preventDefault();

    passwordChangeForm.style.display = 'block'
    emailChangeForm.style.display = 'none'
    changepassButton.style.display = 'none'
    changeemailButton.style.display = 'none'
};

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

        loginView.style.display = 'block';
        homeView.style.display = 'none';
        passwordChangeForm.style.display = 'none';
        emailChangeForm.style.display = 'none';
        changepassButton.style.display = 'inline-block'
        changeemailButton.style.display = 'inline-block'

    } catch (error) {
        alert(error.message);
    }
} 

//Change e-mail
var emailChangeForm = document.getElementById('changeemailform');
var changeemailButton = document.getElementById('changeemail');

changeemailButton.onclick = function (event) {
    event.preventDefault();

    emailChangeForm.style.display = 'block'
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

        loginView.style.display = 'block';
        homeView.style.display = 'none';
        passwordChangeForm.style.display = 'none';
        emailChangeForm.style.display = 'none';
        changepassButton.style.display = 'inline-block'
        changeemailButton.style.display = 'inline-block'
    } catch (error) {
        alert(error.message);
    }
}