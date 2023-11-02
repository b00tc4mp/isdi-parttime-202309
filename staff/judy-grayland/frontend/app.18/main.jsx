// logic

const logic = new Logic

const root = ReactDOM.createRoot(document.getElementById('root'))

function Login(props) {

    function handleRegisterClick(event) {
        event.preventDefault()

        // console.log('register click')
        props.onRegisterClick()
    }
    return <div className="view">
    <h1>Log in</h1>

    <form className="form">
    <label htmlFor="email-input">Email:</label>
    <input type="email" id="email-input" />

    <label htmlFor="password-input">Password:</label>
    <input type="password" id="password-input" />

    <button type="submit">Log in</button>
    </form>

    <a href="" onClick={handleRegisterClick}>Register</a>
</div>
}

function Register(props) {
    function handleLoginClick(event) {
        event.preventDefault()

        // console.log('login click')

        props.onLoginClick()
    }
    return <div className="view">
      <h1>Register</h1>

      <form className="form">
        <label htmlFor="name-input">Name</label>
        <input type="text" id="name-input" />

        <label htmlFor="email-input">Email</label>
        <input type="email" id="email-input" />

        <label htmlFor="password-input">Password</label>
        <input type="password" id="password-input" />

        <button type="submit">Register</button>
      </form>

      <a href="" onClick={handleLoginClick}>Login</a>
    </div>

}

function App() {
    const viewState = React.useState('login')

    const view = viewState[0]
    const setView = viewState[1]


    function handleRegisterShow() {
        setView('register')
    }

    function handleLoginShow() {
        setView('login')
    }
    return <>
        {view === 'login' && <Login onRegisterClick = {handleRegisterShow}/>}
        {view === 'register' && <Register onLoginClick = {handleLoginShow} />}
    </>
}

root.render(<App />)
