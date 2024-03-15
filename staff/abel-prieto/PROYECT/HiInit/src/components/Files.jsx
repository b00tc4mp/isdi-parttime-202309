import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context'
import logic from '../logic'
import Swal from 'sweetalert2'

function Files(props) {
    const { handleError } = useContext(Context)
    const navigate = useNavigate()
    const file = props.file

    // DELETE FILES
    function handleDeleteFile(event) {
        event.preventDefault()

        Swal.fire({
            title: "Are you want to delete it?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it"
        }).then((result) => {
            if (result.isConfirmed) {

                logic.deleteFile(file.id)
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        })
                    })
                    .catch(error => {
                        const clientError = document.querySelector(props.clientError)

                        clientError.innerText = `${error.message} ❌`
                        clientError.style.color = 'tomato'

                        handleError(error, navigate)

                        return
                    })
            }
        })
    }

    // DOWNLOAD FILE
    function handleDownloadFile(event) {
        event.preventDefault()

        const clientError = document.querySelector(props.clientError)

        try {
            logic.downloadFile(file.id)
                .then(() => {
                    clientError.innerText = 'File successfully download ✅'
                    clientError.style.color = 'green'
                })
                .catch(error => {
                    handleError(error, navigate)
                })
        } catch (error) {
            handleError(error, navigate)
        }
    }

    return <>
        <article>
            <ul>
                <p>{file.name}</p>
                <button id="download-file" className='button-form' onClick={handleDownloadFile}>Download</button>
                <button id="delete-file" className='button-form' onClick={handleDeleteFile}>Delete</button>
            </ul>
        </article>
    </>
}

export default Files