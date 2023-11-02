// LOGIC
const logic = new Logic

// REACT 
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />) 


// - - - - - - - - - - - - NOTAS - - - - - - - - - - - - 

// En los elementos <input> se necesita tener un cierre < /> 
// El componente Login ha de ser llamado por root.render mediante la etiqueta <Login /> SIEMPRE! 
// Los class pasan a llamarse 'className' y for, 'htmlFor'
// Las vistas se ensamblan y desensamblan