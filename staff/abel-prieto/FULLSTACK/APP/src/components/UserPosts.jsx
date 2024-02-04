import Context from '../Context'
import Post from './Post'

import { Container } from '../librery'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserPosts({ loadPosts }) {
    const params = useParams()

    // STATE ID & CONTEXT
    const [posts, setPosts] = useState([])
    const { handleError } = useContext(Context)

    // REFRESH POSTS
    const refreshPosts = () => {
        try {
            loadPosts((error, posts) => {
                if (error) {
                    handleError(error)

                    return
                }

                posts.reverse()

                setPosts(posts)
            })
        } catch (error) {
            handleError(error)
        }
    }

    return <>
        <Container>
            <h2>All posts from {params.userId}</h2>

            <div>
                {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onDeletePost={refreshPosts} onEditText={refreshPosts} onSendComment={refreshPosts} />)}
            </div>
        </Container>
    </>
}

export default UserPosts