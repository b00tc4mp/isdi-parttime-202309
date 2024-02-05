import { useParams } from 'react-router-dom'
import logic from "../logic"

import { useEffect, useState } from 'react'
import Post from './Post' // lo importo para renderizar un post
import { Container } from '../library'



import { useContext } from '../hooks'


//con useParams recojo el id de usuario de la ruta



export default function UserPosts() {
    const { userId } = useParams() //me sirve para coger el userId de la URL
    const [posts, setPosts] = useState([]) // inicializo el estado de posts como un array vacío
    const context = useContext()


    useEffect(() => { //lo llamo la primera vez y cada vez que userId cambie

        logic.retrieveUserPosts(userId, (error, retrievedUserPosts) => {
            if (error) {
                context.handleError(error)
                return
            }

            setPosts(retrievedUserPosts)

        })
    }, [userId]) //se recargar cuando cambie el userId

    function handleToggleFavPostClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    //alert(error.message)
                    context.handleError(error)

                    return
                }


                props.onToggleFavClick()
            })
        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }

    return <Container>
        <h1> This are the posts from user {userId} </h1>
        <div className="posts">
            {posts.map(post => (
                <Post key={post.id}
                    post={post}
                    onToggleFavClick={() => handleToggleFavPostClick(post.id)}

                />
            ))}
        </div>

    </Container>
}







// logic.retrieveUserPosts(userId, (error, retrievedUserPosts) => {
//     if (error) {
//         context.handleError(error)
//         return
//     }

//     setPosts(retrievedUserPosts)

// })