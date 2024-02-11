import { useEffect, useState } from 'react'
import Post from './Post'
import { Container } from "../library"

const Posts = ({ loadPosts, stamp }) => {

    const [posts, setPosts] = useState([]) //Se pone array vacío indicando que inicialmente no hay nada que mostrar

    const refreshPosts = () => {
        try {
            loadPosts((error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                posts.reverse()
                setPosts(posts)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {

        refreshPosts()
    }, [stamp])


    return <Container className="posts">
        {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleDeleteClick={refreshPosts} onToggleEditClick={refreshPosts} onPostComment={refreshPosts} />)}
    </Container>

}


export default Posts