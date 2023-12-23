// logic

const logic = new Logic

// react

const root = ReactDOM.createRoot(document.getElementById('root'))


function Login(props) {
    function handleRegisterClick(event) {
        event.preventDefault()

        // console.log('register click')
        props.onRegisterClick()
    }

    return <div className="view">
        <h1>Login</h1>

        <form className="form">

            {/* fijarse en la nomenclatura del for y de las clases a la hora de pegarlo */}
            <label htmlFor="email-input">E-mail</label>
            <input id="email-input" type="email" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" />

            <button type="submit">Login</ button>
        </form>

        {/* encender y apagar vistas */}
        {/* capturamos el click con onClick, pasamos el callback de la función de arriba, handleRegisterClick*/}
        <a href="" onClick={handleRegisterClick}>Register</a>
    </div>
}

{/* es un objeto props que aglutina todos los elementos que le enviemos*/ }
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

function App() {
    {/* declaramos una vista que nos muestre una vista u otra */ }
    {/* useState es un hook, una función qu te devuelve un array con 2 elementos */ }
    const viewState = React.useState('login')

    {/* viewState es un array con las siguientes 2 posiciones: estado actual (el stringlogin) y la segunda una función que me permite  cambiar esa fución después */ }
    const view = viewState[0]
    const setView = viewState[1]
    // setView('register')
    // setView('login')

    {/* Cuando ejecutamos este código, cambiamos el state de react, queremos que sea registro */ }
    function handleRegisterShow() {
        setView('register')
    }

    function handleLoginShow() {
        setView('login')
    }

    {/* retornamos un contenedor DOM vacío */ }
    {/* este contenedor se llama fragmento es como una "bolsa invisible" que puedes usar para agrupar varios elementos sin que aparezca
     ningún elemento adicional en tu página web. Es útil cuando quieres organizar elementos en tu código sin que se vean afectados en la pantalla */}
    return <>
        {/* login, cuando se haga click en onRegisterClick, dentro de Login, llamame a este callback (handleRegisterShow) */}
        {view === 'login' && <Login onRegisterClick={handleRegisterShow} />}
        {view === 'register' && <Register onLoginClick={handleLoginShow} />}
    </>
}

{/* Este componente App utiliza el hook useState para gestionar el estado de la vista y muestra dinámicamente el componente Login o Register en función de la vista actual. 
 Los botones o eventos que invocan handleRegisterShow y handleLoginShow cambian la vista según sea necesario. 
El fragmento se utiliza para envolver los elementos JSX sin agregar elementos HTML adicionales al DOM. */}

root.render(<App />)





