function Login(props) {
  console.log('Login')

  function handleSubmit(event) {
      event.preventDefault()

      const emailInput = event.target.querySelector('#email-input')
      const passwordInput = event.target.querySelector('#password-input')

      const email = emailInput.value
      const password = passwordInput.value

      // console.log(email, password)
      try {
          logic.loginUser(email, password)

          props.onSuccess()
      } catch (error) {
          alert(error.message)
      }
  }

  function handleRegisterClick(event) {
      event.preventDefault()

      // console.log('register click')
      props.onRegisterClick()
  }

  return <div className="view">
      <h1>Login</h1>

      <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email-input">E-mail</label>
          <input id="email-input" type="email" />

          <label htmlFor="password-input">Password</label>
          <input type="password" id="password-input" />

          <button type="submit">Login</button>
      </form>

      <a href="" onClick={handleRegisterClick}>Register</a>
  </div>
}







/*class LoginView extends Component {
  constructor() {
    super(document.getElementById("login-view"));

    this.loginRegisterLink = this.container.querySelector("a");

    this.loginRegisterLink.onclick = function (event) {
      event.preventDefault();

      this.hide();
      this.loginForm.reset();
      registerView.show();
    }.bind(this);

    this.loginForm = this.container.querySelector("form");

    this.loginForm.onsubmit = function (event) {
      event.preventDefault();

      const emailInput = this.loginForm.querySelector("#email-input");
      const passwordInput = this.loginForm.querySelector("#password-input");

      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        logic.loginUser(email, password);

        this.loginForm.reset();

        const user = logic.retrieveUser();

        homeView.profileLink.innerText = user.name;

        this.hide();

        homeView.postsView.renderPosts();

        homeView.show();
      } catch (error) {
        alert(error.message);
      }
    }.bind(this);
  }
}


*/

