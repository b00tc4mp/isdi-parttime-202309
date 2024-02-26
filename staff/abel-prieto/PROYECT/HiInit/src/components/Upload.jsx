import { CommandBar } from '../utils'
import logic from '../logic'

function Upload() {

    // UPLOAD FILE
    function handleUploadFile(event) {
        event.preventDefault()

        logic.uploadFile()
            .then(() => {
                const succesUpload = document.querySelector('#client-error')

                succesUpload.innerText = 'File succesfully upload!'
                succesUpload.style.color = 'green'

                return
            })
            .catch(error => {
                const clientError = document.querySelector('#client-error')

                clientError.innerText = error.message
                clientError.style.color = 'red'

                return
            })
    }

    return <>
        <div className="container">
            <p>~$</p>
            <p id="client-error">Select the files and upload them: </p>

            <br />

            <div className="command-bar">
                <CommandBar />

                <div id="command-form">
                    <form action="/upload" method="POST" encType="multipart/form-data" onSubmit={handleUploadFile}>
                        <input type="file" name="file" />
                        <button type="submit" className='button-form'>Upload</button>
                    </form>
                </div>

            </div>
        </div>
    </>
}

export default Upload