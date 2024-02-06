import { useParams } from 'react-router-dom'
import logic from "../logic"

import { useEffect, useState } from 'react'
import Post from './Post' // lo importo para renderizar un post
import { Container } from '../library'



import { useContext } from '../hooks'






function UserPosts(props) {
    console.log('UserPosts')

    const params = useParams()
    const context = useContext()
    const [posts, setPosts] = useState([])


    const refreshPosts = () => {
        try {
            props.loadPosts(params.userId, (error, posts) => {
                if (error) {
                    //alert(error.message)
                    context.handleError(error)

                    return
                }

                posts.reverse()

                setPosts(posts)
            })
        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }

    useEffect(() => {
        console.log('Posts effect')

        refreshPosts()
    }, [props.stamp])




    return <div className="posts">
        {/* {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}
        {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleEditClick={refreshPosts} onToggleDeleteClick={refreshPosts} onError={context.handleError} />)}
        {/* con React necesitamos crear una Key para renderizar una lista de
         elementos. Esta lista de elementos se renderiza con .map, porque .map
         devuelve un arrays */}
    </div>

}

export default UserPosts


//con useParams recojo el id de usuario de la ruta



// export default function UserPosts(props) {
//     const { userId } = useParams() //me sirve para coger el userId de la URL
//     const [posts, setPosts] = useState([]) // inicializo el estado de posts como un array vacío
//     const context = useContext()

//     const refreshPosts = () => {
//         try {
//             props.loadPosts(userId, (error, posts) => {
//                 if (error) {
//                     context.handleError(error)

//                     return
//                 }

//                 posts.reverse()

//                 setPosts(posts)
//             })
//         } catch (error) {
//             context.handleError(error)
//         }
//     }

//     useEffect(() => {
//         console.log('Posts effect')

//         refreshPosts()
//     }, [props.stamp])




//     return <Container>
//         <h1> This are the posts from user {userId} </h1>
//         <div className="posts">
//             {posts.map(post => (
//                 <Post key={post.id}
//                     post={post}
//                     onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleEditClick={refreshPosts} onToggleDeleteClick={refreshPosts} onError={context.handleError}

//                 />
//             ))}
//         </div>

//     </Container>
// }



// useEffect(() => { //lo llamo la primera vez y cada vez que userId cambie

//     logic.retrieveUserPosts(userId, (error, retrievedUserPosts) => {
//         if (error) {
//             context.handleError(error)
//             return
//         }

//         setPosts(retrievedUserPosts)

//     })
// }, [userId]) //se recargar cuando cambie el userId





// logic.retrieveUserPosts(userId, (error, retrievedUserPosts) => {
//     if (error) {
//         context.handleError(error)
//         return
//     }

//     setPosts(retrievedUserPosts)

// })