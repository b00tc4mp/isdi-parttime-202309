function Register(props) {
  console.log('Register')
  function handleSubmit(event) {
      event.preventDefault()

      const nameInput = event.target.querySelector('#name-input')
      const emailInput = event.target.querySelector('#email-input')
      const passwordInput = event.target.querySelector('#password-input')

      const name = nameInput.value
      const email = emailInput.value
      const password = passwordInput.value

      // console.log(name, email, password)

      try {
          logic.registerUser(name, email, password)

          props.onSuccess()
      } catch (error) {
          alert(error.message)
      }
  }

  function handleLoginClick(event) {
      event.preventDefault()

      // console.log('login click')
      props.onLoginClick()
  }

  return <div className="view">
      <h1>Register</h1>

      <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name-input">Name</label>
          <input id="name-input" type="text" />

          <label htmlFor="email-input">E-mail</label>
          <input id="email-input" type="email" />

          <label htmlFor="password-input">Password</label>
          <input type="password" id="password-input" />

          <button type="submit">Register</button>
      </form>

      <a href="" onClick={handleLoginClick}>Login</a>
  </div>
}





/*class RegisterView extends Component {
  constructor() {
    super(document.getElementById("register-view"));
    this.hide();

    this.registerLoginLink = this.container.querySelector("a");

    this.registerLoginLink.onclick = function (event) {
      event.preventDefault();

      this.hide();
      this.registerForm.reset();
      loginView.show();
    }.bind(this);

    this.registerForm = this.container.querySelector("form");

    this.registerForm.onsubmit = function (event) {
      event.preventDefault();

      const nameInput = this.registerForm.querySelector("#name-input");
      const emailInput = this.registerForm.querySelector("#email-input");
      const passwordInput = this.registerForm.querySelector("#password-input");

      const name = nameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;

      try {
        logic.registerUser(name, email, password);

        this.registerForm.reset();

        this.hide();
        loginView.show();
      } catch (error) {
        alert(error.message);
      }
    }.bind(this);
  }
}
*/

