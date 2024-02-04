import { useEffect, useState } from "react"
import Post from "./Post"


function Posts({ loadPosts, stamp, onError }) {
    console.log('Posts')

    const [posts, setPosts] = useState([])

    const refreshPosts = () => {

        try {
            loadPosts((error, posts) => {
                if (error) {
                    onError(error)
                    return
                }
                posts.reverse()
                setPosts(posts)
            })
        } catch (error) {
            onError(error)
        }
    }

    useEffect(() => {
        console.log('Posts effect')
        refreshPosts()
    }, [stamp])

    return <div className="posts">
        {posts.map(post =>
            <Post key={post.id} post={post}
                onToggleLikeClick={refreshPosts}
                onToggleFavClick={refreshPosts}
                onToggleDeleteClick={refreshPosts}
                onPostTextUpdate={refreshPosts}
                onError={onError} />

        )}
    </div>
}

export default Posts