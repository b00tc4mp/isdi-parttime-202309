function Register(props) {
    console.log('Register')

    function handleSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        // console.log(name, email, password)

        try{
            logic.registerUser(name, email, password, error => {
              if (error) {
                alert(error.message)

                return
            }

            props.onSuccess()
          })
        }  catch(error) {
            alert(error.message)
        }
    }

    {
        //if we didn't need to do event.preventDefault() - because the button/link doesn't navigate - then we could pass props.onLoginClic directly into onClick. without () because we're not actually calling the function yet. handleLoginClick is a callback function (the second parameter in an event listener, the first being 'click')
    }
    
    function handleLoginClick(event) {
        event.preventDefault()

        // console.log('login click')

        props.onLoginClick()
    }
    return <div className="view">
      <h1>Register</h1>
      {
        // the functions that are passed to onSubmit, onClick etc. are callback functions that are passed into corresponing event handlers. By JS standard they will receive and event object when the event is triggered. The event object has a lot of properties, including target, which is a reference to the element where the event has happened (eg. the form). 
      }

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input type="text" id="name-input" />

        <label htmlFor="email-input">Email</label>
        <input type="email" id="email-input" />

        <label htmlFor="password-input">Password</label>
        <input type="password" id="password-input" />

        <button type="submit">Register</button>
      </form>

      <a href="" onClick={handleLoginClick}>Login</a>
    </div>

}