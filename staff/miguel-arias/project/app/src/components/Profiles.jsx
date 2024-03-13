import { Profile } from '../components'
import { Container, Form, Input, Button } from '../library'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from '../hooks'
import defaultColors from 'com/defaultColors'

import session from '../logic/session'
import logic from '../logic'

function Profiles(props) {
    const context = useContext()
    const navigate = useNavigate()
    const colors = defaultColors

    const [profiles, setProfiles] = useState([])
    const [activeProfileId, setActiveProfileId] = useState(null)
    const [name, setName] = useState(null)
    const [palette, setPalette] = useState([])
    const [chosenColor, setChosenColor] = useState(null)
    const [usedColors, setUsedColors] = useState([])
    const [view, setView] = useState(null)

    const refreshProfiles = async () => {
        try {
            const profiles = await logic.retrieveProfiles()
            profiles.forEach(profile => {
                let newColor = profile.color.code
                setUsedColors(oldColors => [...oldColors, newColor])
            })
            setProfiles(profiles)
        } catch (error) {
            context.handleError(error)
        }
    }

    useEffect(() => {
        console.log('Profiles effect')

        refreshColors()
        refreshProfiles()
    }, [props.stamp])

    const refreshColors = async () => {
        try {
            setPalette(colors)
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleProfileClick = async (profileName) => {
        let name = profileName.target.firstChild.data
        try {
            setName(name)
            setView('login-profile-view')
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleLoginProfileSubmit = (event) => {
        event.preventDefault()
        const digit1 = event.target.digit1.value
        const digit2 = event.target.digit2.value
        const digit3 = event.target.digit3.value
        const digit4 = event.target.digit4.value

        const pincode = digit1 + digit2 + digit3 + digit4

        return (async () => {
            try {
                await logic.loginProfile(name, pincode)
                const role = await logic.retrieveRole()
                if (role === 'admin')
                    context.handleRole('admin')
                else
                    context.handleRole('user')
                navigate('/')
                setView(null)
            } catch (error) {
                context.handleError(error)
            }
        })()
    }

    const handleEditProfileClick = () => {
        setView('edit-profile-view')
    }

    const handleManageProfilesClick = () => {
        setView('manage-profiles-view')
    }

    const handleManageProfileSubmit = async (event) => {
        event.preventDefault()

        const role = event.target.querySelector('Input[list="roles"]').value
        try {
            await logic.editRole(activeProfileId, role)
            refreshProfiles()
            context.handleRole(role)
            setView(null)
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleOnProfileClick = (profileId) => {
        setActiveProfileId(profileId)
    }

    const handleDeleteProfileClick = async () => {
        if (confirm('Are you sure you want to delete this profile?'))
            try {
                await logic.deleteProfile(activeProfileId)
                refreshProfiles()
                setView(null)
            } catch (error) {
                context.handleError(error)
            }
    }

    const handleDeleteOwnProfileClick = async () => {
        if (confirm('Are you sure you want to delete your profile?'))
            try {
                await logic.deleteProfile()
                refreshProfiles()
                setView(null)
                context.handleRole(null)
            } catch (error) {
                context.handleError(error)
            }
    }

    const handleNewProfileClick = () => {
        setView('new-profile-view')
    }

    const handleNewProfileSubmit = async (event) => {
        event.preventDefault()
        const name = event.target.name.value

        const creationDigit1 = event.target.creationDigit1.value
        const creationDigit2 = event.target.creationDigit2.value
        const creationDigit3 = event.target.creationDigit3.value
        const creationDigit4 = event.target.creationDigit4.value

        const pincode = creationDigit1 + creationDigit2 + creationDigit3 + creationDigit4

        try {
            await logic.registerProfile(name, pincode, chosenColor)
            refreshProfiles()
            setView(null)
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleCancelClick = () => {
        setView('null')
    }

    const handleChangeColorClick = () => {
        setView('change-color-view')
    }

    const handleColorClick = (color) => {
        setChosenColor(color)
    }

    const handleChooseColorClick = async () => {
        try {
            await logic.changeProfileColor(chosenColor)
            refreshProfiles()
            setChosenColor(null)
            setView(null)
        } catch (error) {
            context.handleError(error)
        }
    }

    const handleChangePincodeClick = () => {
        setView('change-pincode-view')
    }

    const handleChangePincodeSubmit = async (event) => {
        event.preventDefault()
        const oldDigit1 = event.target.oldDigit1.value
        const oldDigit2 = event.target.oldDigit2.value
        const oldDigit3 = event.target.oldDigit3.value
        const oldDigit4 = event.target.oldDigit4.value

        const newDigit1 = event.target.newDigit1.value
        const newDigit2 = event.target.newDigit2.value
        const newDigit3 = event.target.newDigit3.value
        const newDigit4 = event.target.newDigit4.value

        const oldPincode = oldDigit1 + oldDigit2 + oldDigit3 + oldDigit4
        const newPincode = newDigit1 + newDigit2 + newDigit3 + newDigit4

        try {
            await logic.changePincode(oldPincode, newPincode)
            refreshProfiles()
            setView(null)
        } catch (error) {
            context.handleError(error)
        }
    }

    /* const handleChangePictureClick = () => {
        setView('change-picture-view')
    } */

    /* const handleImageSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const image = formData.get('image')
        try {
            await logic.uploadAvatar(image)
            setSelectedImage(null)
            setView(null)
        } catch (error) {
            context.handleError(error)
        }
    } */

    return <Container>
        <h1>Profiles</h1>
        {profiles.length > 0 && !session.profileId && <h3>Please, click on your name to log in</h3>}

        {profiles.length > 0 ? profiles.map(profile => <Profile onProfileClick={handleProfileClick} key={profile.id} profile={profile} />) : <h4>No profiles yet, create your profile clicking the + below</h4>}

        {view === 'login-profile-view' && <Container>
            <Form onSubmit={handleLoginProfileSubmit}>
                <h3>{name}</h3>
                <p>Pin code</p>
                <Input type='number' min='0' max='9' id='digit1' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='digit2' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='digit3' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='digit4' placeholder='-'></Input>
                <Button type='submit'>Submit</Button>
                <Button type='button' onClick={handleCancelClick}>Cancel</Button>
            </Form>
        </Container>}

        <Container>
            {session.profileRole === 'admin' ? <Button onClick={handleManageProfilesClick}>Manage profiles</Button> : ''}
            {session.profileRole !== null ? <Button onClick={handleEditProfileClick}>Edit your profile</Button> : ''}
        </Container>

        {view === 'edit-profile-view' && <Container>
            {/* <Button onClick={handleChangePictureClick}>Change picture</Button> */}
            <Button onClick={handleChangeColorClick}>Change profile color</Button>
            <Button onClick={handleChangePincodeClick}>Change pincode</Button>
            <Button onClick={handleDeleteOwnProfileClick}>Delete profile</Button>
        </Container>}

        {/* {view === 'change-picture-view' && <Container>
            <Form onSubmit={handleImageSubmit}>
                <Input name='image' type='file' accept='image/*'></Input>
                <Button type='submit'>Upload image</Button>
            </Form>
        </Container>} */}

        {view === 'change-color-view' && <Container>
            {palette.map(color => !usedColors.includes(color.code) ? <Button key={color.code} onClick={() => handleColorClick(color)} style={{ backgroundColor: chosenColor === color ? 'white' : color.code }}>{color.name}</Button> : '')}
            <Button onClick={handleChooseColorClick}>Choose color</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
        </Container>}

        {view === 'change-pincode-view' && <Container>
            <Form onSubmit={handleChangePincodeSubmit}>
                <h3>{name}</h3>
                <p>Old pin code</p>
                <Input type='number' min='0' max='9' id='oldDigit1' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='oldDigit2' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='oldDigit3' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='oldDigit4' placeholder='-'></Input>

                <p>New pin code</p>
                <Input type='number' min='0' max='9' id='newDigit1' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='newDigit2' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='newDigit3' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='newDigit4' placeholder='-'></Input>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>}

        {view === 'manage-profiles-view' && <Container>
            {<Form onSubmit={handleManageProfileSubmit}>
                {profiles.map(profile => profile.id !== session.profileId ? <Button key={profile.id} type='button' style={{ backgroundColor: activeProfileId === profile.id ? 'red' : '' }} onClick={() => handleOnProfileClick(profile.id)}>{profile.name}</Button> : '')}

                <Input list='roles'>New role</Input>
                <datalist id='roles'>
                    <option value='admin' />
                    <option value='user' />
                </datalist>

                <Button type='submit'>Change Role</Button>

                <Button type='button' onClick={handleDeleteProfileClick}>Delete profile</Button>
            </Form>}
        </Container>}

        <Container>
            <Button onClick={handleNewProfileClick}>
                ➕
            </Button>
        </Container>

        {view === 'new-profile-view' && <Container>
            <Form onSubmit={handleNewProfileSubmit}>
                <Input id='name' type='text' placeholder='Name'></Input>
                <p>Pin code</p>
                <Input type='number' min='0' max='9' id='creationDigit1' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='creationDigit2' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='creationDigit3' placeholder='-'></Input>
                <Input type='number' min='0' max='9' id='creationDigit4' placeholder='-'></Input>
                {palette.map(color => !usedColors.includes(color.code) ? <Button type='button' key={color.code} onClick={() => handleColorClick(color)} style={{ backgroundColor: chosenColor === color ? 'white' : color.code }}>{color.name}</Button> : '')}
                <Button type='submit'>Submit</Button>
                <Button type='button' onClick={handleCancelClick}>Cancel</Button>
            </Form>
        </Container>}
    </Container>
}

export default Profiles