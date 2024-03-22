import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'
import Context from '../Context'

function CreateGroup() {

    // FIELDS STATE
    const navigate = useNavigate()
    const { handleError } = useContext(Context)

    // REGISTER FUNCTION
    function handleSubmit(event) {
        event.preventDefault()

        const clientError = document.querySelector('#client-error-register')
        const group = event.target.querySelector('#new-group').value

        try {
            return logic.registerAdmin(group)
                .then(() => {
                    clientError.innerText = 'Group succesfully created! ✅'
                    clientError.style.color = 'green'
                })
        } catch (error) {
            clientError.innerText = error.message
            clientError.style.color = 'tomato'

            handleError(error, navigate)
        }

        document.body.addEventListener('keydown', function () {
            clientError.innerText = 'ADMIN - Create a new group: '
            clientError.style.color = '#EBDBB2'
        })
    }

    return <>
        <div>
            <p>~$</p>
            <span>
                <form className="newgroup-form" onSubmit={handleSubmit}>
                    <p id="client-error-newgroup">ADMIN - Create a new group: </p>

                    <div className="space-between">
                        <div className="fields">
                            <label htmlFor="new-group"> <p style={{ color: '#18E3C8' }}>New group: </p></label>
                            <input type="text" id="new-group" contentEditable="true" autoComplete="off" />
                        </div>
                        <button className="button-form" type="submit" >Send</button>
                    </div>

                </form>
            </span>

        </div >
    </>
}

export default CreateGroup