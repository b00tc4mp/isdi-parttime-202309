

// function SubmitButton(props){
//     function handleClick(event) {
//         if(props.clickHandler) {
//         event.preventDefault()
//         props.clickHandler()
//         }
//     }
//     return <button type="submit" onClick={handleClick}>{props.label}</button>
// }

function Login(props) {
    function handleSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        // console.log(email, password)

        try {
            logic.loginUser(email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        // console.log('register click')
        props.onRegisterClick() // onRegisterClick is a property. it calls a function that it receives from the parent component
    }

    return <div className="view">
        <h1>Log in</h1>

        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email-input">Email:</label>
            <input type="email" id="email-input" />

            <label htmlFor="password-input">Password:</label>
            <input type="password" id="password-input" />

            {/* <SubmitButton label = 'Boo'/> */}
            <button type="submit">Log in</button>
        </form>

        <a href="" onClick={handleRegisterClick}>Register</a>
    </div>
}