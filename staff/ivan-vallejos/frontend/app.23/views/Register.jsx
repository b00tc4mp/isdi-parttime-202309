function Register(props) {
    function handleSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        //console.log(name,email, password)

        try {
            logic.registerUser(name, email, password)

            props.Onsucces()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()

        //console.log ('login click')
        props.onLoginClick
    }

    return <div classname="view">
        <h1>Register</h1>

        <form classname="form" onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input" />

            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" />

            <button type="submit">Register</button>
        </form>

        <a href="" onclick={handleLoginClick}>Login</a>
    </div>
}