// logic

const logic = new Logic

// react

const root = ReactDOM.createRoot(document.getElementById('root'))
// aquí se está creando un objeto root, que representa el punto de entrada ded la aplicación React.
//ReactDOM.createRoot() es una función que se utiliza para crear un nuevo "root" en la aplicación, 
// que se corresponde con un elemento DOM específico, en este caso "document.getElementById('root')"
// se utiliza para obtener el elemento DOM con el id "root" en la página HTML
root.render(<App />)
// se utiliza el objeto root para renderizar el componente <App />, en el elemento DOM con id root. 
// cuando se llama a root.rener(), React se encargará de renderizar la interfaz