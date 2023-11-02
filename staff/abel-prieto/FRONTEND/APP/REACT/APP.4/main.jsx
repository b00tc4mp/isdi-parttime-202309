// LOGIC
const logic = new Logic

// REACT 
const root = ReactDOM.createRoot(document.getElementById('root'))


function Login() {
    function handleRegisterClick(event) {
        event.preventDefault()

        console.log('register click')
    }

    return <div className="view">
    <h1>Login</h1>

    <form className="form">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />

        <label htmlFor ="password">Password</label>
        <input id="password" type="password" />

        <button id="login_button">Login</button>
    </form>

    <a href="" onClick={(handleRegisterClick)}>Register</a>
</div>
}

function Register() {
    function handleLoginClick(event) {
        event.preventDefault()

        console.log('login click')
    }

    return <div className="view">
    <h1>Register</h1>

    <form className="form">
        <label htmlFor="name">Username</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="text" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" />

        <button id="register_button">Register</button>
    </form>

    <a href="" onClick={handleLoginClick}>Login</a>
</div>
}

function App() {
    const viewState = React.useState('login')
    // Es un Array. Devuelve el estado de la vista 
    // La función useState se compone de view | setView. 

    // setView('register')
    // setView('login')

    const view = viewState[0]
    const setView = viewState[1]

    return <>
        {view === 'login' && <Login />}
        {view === 'register' && <Register />}
    </>
}

root.render(<App />) 

// En los elementos <input> se necesita tener un cierre < /> 
// El componente Login ha de ser llamado por root.render mediante la etiqueta <Login /> SIEMPRE! 
// Los class pasan a llamarse 'className' y for, 'htmlFor'
// Las vistas se ensamblan y desensamblan