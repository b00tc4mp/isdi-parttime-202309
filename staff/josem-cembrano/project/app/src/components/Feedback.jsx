import { Button } from '../library'

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
        <p className='text-center'>{props.message}</p>
        <Button className='border border-white p-2 rounded-lg border-feedback text-white' onClick={props.onAccepted}>Accept</Button>
    </div>

}

export default Feedback