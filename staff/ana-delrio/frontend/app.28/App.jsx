// app se encarga de pintar home

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

    // función que usamos para cambiar la vista a home
    function handleHomeShow() {
        setView('home')
    }

    return <>
        {/* añadimos el onSuccess para que cuando haya ido bien el paso anterior, pase una nueva props*/}
        {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow} />}
        {/* register, compo de registro, cuando se haga el clik en login te lleva a login, 
         cuando vaya bien el registro, te lleva a login */}
        {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
        {view === 'home' && <Home onLogoutClick={handleLoginShow} />}
    </>
}

