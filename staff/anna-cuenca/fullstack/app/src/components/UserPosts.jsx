import { useParams } from 'react-router-dom'

// con useParams recojo el id de usuario de la ruta

import { Container } from '../library'

export default function UserPosts() {
    const params = useParams() //me sirve para coger el userId

    return <Container>
        <h1> TODO show posts from user {params.userId} </h1>

        {/* //Hay que hacer un fetch aqui, parecido a retrieve USerPosts */}
    </Container>
}