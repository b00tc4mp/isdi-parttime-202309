function App() {
    console.log('App')

    const viewState = React.useState('login') // the hook useState() always returns an array with two elements. The first one is the current state (get), which is a value, and the second is a function that allows you to update that value.

    const view = viewState[0] 
    const setView = viewState[1]


    function handleRegisterShow() {
        setView('register')
    }

    function handleLoginShow() {
        setView('login')
    } // CLOSURE?

    function handleHomeShow() {
        setView('home')
    }
    return <>
        {view === 'login' && 
        <Login  
            onRegisterClick = {handleRegisterShow} 
            onSuccess={handleHomeShow} 
        />}

        {view === 'register' && 
        <Register 
            onLoginClick = {handleLoginShow} 
            onSuccess= {handleLoginShow}
        />}

        {view === 'home' && 
        <Home 
            onLogoutClick = {handleLoginShow}
        />}
    </>
}