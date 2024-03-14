import logic from '../logic'
import Button from '../components/Button'

function handleOnClick() {
  console.log('mooo')
}

function handleOnMouseLeave() {
  console.log('soooo')
}

// function handleOnClick() {
//   console.log('mooo')
// }

function Register() {
  return (
    <div>
      <h3>Register</h3>
      <Button
        handleOnMouseEnter={() => {
          console.log('boo')
        }}
        handleOnClick={handleOnClick}
        handleOnMouseLeave={handleOnMouseLeave}
      >
        <h3>Send</h3>
      </Button>
    </div>
  )
}

export default Register
