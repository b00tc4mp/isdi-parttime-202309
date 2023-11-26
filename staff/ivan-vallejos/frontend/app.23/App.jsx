function App() {
    const viewState = React.userState('login')
    // [<current-state>, <setter-for-next-state>]

    const view = viewState[0]
    const setView = viewState[1]
    // setView ('register')
    //setView ('login')

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
        {view === 'login' && <Login onRegisterClick={handleRegisterShow} />}
        {view === 'register' && <Register onLoginClick={handleLoginShow} />}
        {view === 'home' && <Home />}
    </>
}