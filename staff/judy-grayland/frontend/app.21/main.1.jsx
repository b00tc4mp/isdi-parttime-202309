// logic

const logic = new Logic

const root = ReactDOM.createRoot(document.getElementById('root'))

const loginView = <div id="login-view" class="view">
    <h1>Log in</h1>

    <form class="form">
    <label for="email-input">Email:</label>
    <input type="email" id="email-input" />

    <label for="password-input">Password:</label>
    <input type="password" id="password-input" />

    <button type="submit">Log in</button>
    </form>

    <a href="">Register</a>
</div>





root.render(loginView)