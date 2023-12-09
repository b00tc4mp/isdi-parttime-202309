loginView = document.getElementById("login-view");

loginRegisterLink = loginView.querySelector("a");
loginRegisterLink.onclick = function (event) {
  event.preventDefault();

  loginView.style.display = "none";
  loginForm.reset();
  registerView.style.display = "";
};

loginForm = loginView.querySelector("form");
loginForm.onsubmit = function (event) {
  event.preventDefault();
  var emailInput = loginForm.querySelector("#email-input");
  var passwordInput = loginForm.querySelector("#password-input");
  var email = emailInput.value;
  var password = passwordInput.value;
  try {
    authenticateUser(email, password);
    emailInput.value = "";
    passwordInput.value = "";
    loginForm.reset();
    var user = retrieveUser(email); // para tener acceso al usuario
    profileLink.innerText = user.name; // y luego poder saludarlo
    loggedInEmail = email;

    loginView.style.display = "none";
    // homeView.style.display = "block";

    renderPosts();

    // show home

    homeView.style.display = "";
  } catch (error) {
    alert(error.message);
  }
};
