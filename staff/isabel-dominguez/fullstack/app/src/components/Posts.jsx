import { useEffect, useState } from 'react'
import Post from './Post'
import { Container } from "../library"

const Posts = (props) => {

    const [posts, setPosts] = useState([]) //Se pone array vacío indicando que inicialmente no hay nada que mostrar

    const refreshPosts = () => {
        try {
            props.loadPosts((error, posts) => {
                if (error) {
                    props.onError(error)

                    return
                }

                posts.reverse()
                setPosts(posts)
            })
        } catch (error) {
            props.onError(error)
        }
    }

    useEffect(() => {

        refreshPosts()
    }, [props.stamp])


    return <Container className="posts">
        {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleDeleteClick={refreshPosts} onToggleEditClick={refreshPosts} onPostComment={refreshPosts} onError={props.onError} />)}
    </Container>

}


export default Posts