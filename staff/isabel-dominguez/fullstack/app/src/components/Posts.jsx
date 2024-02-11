import { useEffect, useState } from 'react'
import Post from './Post'
import { Container } from "../library"
import { useContext } from '../hooks'

const Posts = (props) => {

    const [posts, setPosts] = useState([]) //Se pone array vacío indicando que inicialmente no hay nada que mostrar

    const context = useContext()

    const refreshPosts = () => {
        try {
            props.loadPosts()
                .then((posts) => {
                    posts.reverse()
                    setPosts(posts)
                })
                .catch(error => context.handleError(error))
        } catch (error) {
            context.handleError(error)
        }
    }

    useEffect(() => {

        refreshPosts()
    }, [props.stamp])


    return <Container className="posts">
        {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleDeleteClick={refreshPosts} onToggleEditClick={refreshPosts} onPostComment={refreshPosts} />)}
    </Container>

}


export default Posts