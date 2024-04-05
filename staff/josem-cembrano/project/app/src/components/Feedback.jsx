import { Button, Container } from '../library'

const Feedback = (props) => {
    let modifier ='Feedback-debug'

    switch(props.level) {
        case 'info':
            modifier = 'Feedback--info'
            break
        case 'warn':
            modifier = 'Feedback--warn'
            break
        case 'error':
            modifier = 'Feedback--error'
            break
        case 'fatal':
            modifier = 'Feedback--fatal'
            break
    }

    return <div className={`Feedback Feedback ${modifier}`}>
        <p>{props.message}</p>
        <Button onClick={props.onAccepted}><span className='ml-10'>Accept</span></Button>
    </div>

}

export default Feedback