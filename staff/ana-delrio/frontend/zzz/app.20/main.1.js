// logic

const logic = new Logic

// react

// esto es un DOM vitual de react asociado a un DOM real en el HTML
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(React.createElement('h1', null, 'Hello, React!'))