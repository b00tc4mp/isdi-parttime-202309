function App() {
    console.log('App')

    const viewState = React.useState('login')
    // [<current-state>, <setter-for-next-state>]

    const view = viewState[0]
    const setView = viewState[1]
    // setView('register')
    // setView('login')

    function handleRegisterShow() {
        setView('register')
    }

    function handleLoginShow() {
        setView('login')
    }

    function handleHomeShow() {
        setView('home')
    }

    return <>
        {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
        {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
        {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
    </>
}
// la línea 27 es una expresión JSX que se utiliza para condicionalmente renderizar el componente <Login /> 
// en función del valor de view. Si la vista es login, se evalua y retorna la expresión de la derecha
// Se renderiza el componente Login y se pasará dos propiedades: onRegisterClick y onSuccess