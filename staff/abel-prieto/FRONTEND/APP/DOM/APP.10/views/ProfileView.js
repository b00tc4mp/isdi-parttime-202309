// PROFILE VIEW

class ProfileView extends Component{
    constructor() {
        super(document.getElementById('profile'))

        // SETTINGS VIEW - CHANGE EMAIL
        this.checkEmailForm = this.container.querySelector('#select-email')
        
        this.checkEmailForm.onsubmit = function (event) {
            event.preventDefault()
        
            const newEmailInput = this.container.querySelector('#new_email')
            const confirmNewEmailInput = this.container.querySelector('#confirm-new-email')
            const passwordInput = this.container.querySelector('#password')
        
            const newEmail = newEmailInput.value
            const confirmNewEmail = confirmNewEmailInput.value
            const password = passwordInput.value
        
            try {
                logic.changeUserEmail(newEmail, confirmNewEmail, password)
        
                alert('Email changed succesfully!')
        
                this.checkEmailForm.reset()
        
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
        
        // SETTINGS VIEW - CHANGE PASSWORD
        this.changePasswordForm = this.container.querySelector('#select-password')
        
        this.changePasswordForm.onsubmit = function(event) {
            event.preventDefault()
        
            const passwordInput = this.container.querySelector('#current_password')
            const newPasswordInput = this.container.querySelector('#new_password')
            const againNewPasswordInput = this.container.querySelector('#again_new_password')
        
            const password = passwordInput.value
            const newPassword = newPasswordInput.value
            const againNewPassword = againNewPasswordInput.value
        
            try {
                logic.changeUserPassword(password, newPassword, againNewPassword)
        
                alert('Password changed succesfully!')
        
                this.changePasswordForm.reset()
        
            } catch (error) {
                alert(error.message)
            }
        }.bind(this)
    }
}