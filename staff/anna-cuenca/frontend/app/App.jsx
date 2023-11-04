function App() {

    console.log('App') //esto lo hacemos para ver cuando se carga App
    // es el componente principal de la aplicación
    const viewState = React.useState('login') //.useState es el hook de React para inicializar
                                            // una variable llamada viewState, con el valor inicial "login"
    // el useState es una función que devuelve un para de valores: el estado actual y una función para
    // actualizar el estado. En este caso viewState es un array donde el primer elemento ('viewState[0])' es 
    // el estado actual y el segundo elemento ('viewState[1]' es la función para actualizar el estado)

    const view = viewState[0]         //descomponen el array 'viewState' para asignar el valor del estado actual
    const setView = viewState[1]      // a la variable view y la función para actualizar el estado a la variable
    // setView('register')             // setView
    // setView('login')

    function handleRegisterShow() { //estas funciones se llaman cuando se quiere cambiar el valor del estado
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