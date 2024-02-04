import React from 'react'
import { Button, Container } from '../library'
import './Feedback.css'

const Feedback = props => {

    // const [isVisible, setIsVisible] = React.useState(true)



    // const handleClose = () => {
    //     setIsVisible(false)
    // }

    // if (!isVisible) {
    //     return null
    // }

    // return (
    //     <div style={{ position: 'fixed', top: '20%', left: '20%', right: '20%', padding: '20px', border: '1px solid black', backgroundColor: 'white', zIndex: 1000 }}>
    //         <p style={{ color, backgroundColor }}>{props.message}</p>
    //         <Button onClick={handleClose}>Aceptar</Button>
    //     </div>
    // )

    return <Container className={`container--horizontal Feedback Feedback--${props.level}`}>
        <p>{props.message}</p>
        <Button onClick={props.onAccepted} >Accept</Button>
    </Container>
}

export default Feedback