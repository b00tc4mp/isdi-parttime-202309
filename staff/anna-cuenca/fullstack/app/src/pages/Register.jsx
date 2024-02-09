import { Button, Link, Form, Field, Container } from '../library'
import logic from '../logic'


import { useContext } from '../hooks'

function Register(props) {
  console.log('Register')

  const context = useContext()

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
        .then(() => props.onSuccess())
        .catch(error => context.handleError(error))

    } catch (error) {
      //alert(error.message)

      context.handleError(error)
    }
  }

  function handleLoginClick(event) {
    event.preventDefault()

    // console.log('login click')
    props.onLoginClick()
  }

  return <Container>
    <h1>Register</h1>

    <Form onSubmit={handleSubmit}>
      <Field id="name-input">Name</Field>
      <Field id="email-input" type="email">E-mail</Field>
      <Field id="password-input" type="password">Password</Field>

      <Button type="submit">Register</Button>
    </Form>

    <Link onClick={handleLoginClick}>Login</Link>
  </Container>
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

export default Register