// APP

function App() {
    const viewState = React.useState('login')
    // Es un Array. Devuelve el 'ESTADO' del componente, en este caso, de la vista
    // La función useState se compone de view | setView. 

    const view = viewState[0]
    const setView = viewState[1]

    function handleRegisterShow() {
        setView('register')
        // Cambiamos la vista a 'REGISTER'
    }

    function handleLoginShow() {
        setView('login')
        // Cambiamos la vista a 'LOGIN'
    }

    function handleHomeShow() {
        setView('home')
        // Cambiamos la vista a 'HOME'
    }

    return <>
        {view === 'login' && <Login onRegisterClick={handleRegisterShow} onSuccess={handleHomeShow}  />}
        {view === 'register' && <Register onLoginClick={handleLoginShow} onSuccess={handleLoginShow} />}
        {view === 'home' && <Home />}
    </>
}