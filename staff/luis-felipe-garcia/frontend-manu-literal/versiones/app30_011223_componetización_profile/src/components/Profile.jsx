import { Button } from "../library"
import UpdateEmailForm from "./UpdateEmailForm"
import UpdatePasswordForm from "./UpdatePasswordForm"


function Profile(props) {
    console.log('Profile')

    function handleChangeEmailSubmit () {

    }

    function handleChangePasswordSubmit () {

    }

    function handleCancel () {

    }

    return <div className="container">
        <UpdateEmailForm
            onChangeEmailSubmit={handleChangeEmailSubmit}>
        </UpdateEmailForm>

        <UpdatePasswordForm
            onChangePasswordSubmit={handleChangePasswordSubmit}>
        </UpdatePasswordForm>
        <Button onClick={handleCancel}>Cancel</Button>
    </div>
}


export default Profile