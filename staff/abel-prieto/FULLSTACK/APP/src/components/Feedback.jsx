import { Container, Button } from "../librery"
import './Feedback.css'

export default function Feedback({ level, message }) {

    return <>
        <Container className={`container--horizontal Feedback--${level}`}>
            <p>{message}</p>
            <Button>Accept</Button>
        </Container>
    </>
}