// LOGIC
const logic = new Logic

// REACT 
const root = ReactDOM.createRoot(document.getElementById('root'))

function Login() {
    return <div id="login" class="view">
    <h1>Log In</h1>

    <form class="form">
        <label for="email">Email</label>
        <input id="email" type="text" />

        <label for ="password">Password</label>
        <input id="password" type="password" />

        <button id="login_button">Login</button>
    </form>

    <a href="">Register</a>
</div>
}

root.render(<Login />) 

// En los elementos <input> se necesita tener un cierre < /> 
// El componente Login ha de ser llamado por root.render mediante la etiqueta <Login /> SIEMPRE! 