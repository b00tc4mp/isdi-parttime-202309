// logic
// instanciamos la clase lógica 
const logic = new Logic

// login
// aqui ponemos parentesis porque tenemos que enviar un dato al constructor
// containerId, que es login-view, porque asi esta en el HTML

const loginView = new LoginView('login-view')

// register

var registerView = null
var registerLoginLink = null
var registerForm = null

// home

var homeView = null
var logoutButton = null
var changeEmailForm = null
var changePasswordForm = null
var homeLink = null
var profileView = null
var profileLink = null
var postsView = null
var newPostView = null
var newPostButton = null
var newPostForm = null
var cancelNewPostButton = null