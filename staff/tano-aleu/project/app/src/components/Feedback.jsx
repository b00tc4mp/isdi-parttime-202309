import { Button, Container } from '../library'
import classnames from 'classnames'

const Feedback = props => {
    let modifier = 'Feedback--debug'

    switch (props.level) {
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

    return <div className={`container--horizontal Feedback ${modifier}`}>
        <p>{props.message}</p>
        <Button className="feedback__button" onClick={props.onAccepted}>Accept</Button>

    </div>
}

export default Feedback