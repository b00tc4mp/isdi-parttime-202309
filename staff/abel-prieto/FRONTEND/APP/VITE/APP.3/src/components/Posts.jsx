import logic from "../logic"

import Post from "./Post"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect


// POSTS
function Posts({ loadPosts, stamp }) {
    console.log('Posts')

    // STATE ID & POSTS
    const [id, setId] = useState(null)
    const [posts, setPosts] = useState([])

    // REFRESH POSTS
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

    // STATE & EFFECT - ID USER
    useEffect(() => {
        console.log('Posts Effect')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setId(user.id)
                // Guardamos en STATE el user para usar el "ID"

                refreshPosts()
            })
        } catch (error) {
            alert(error.message)
        }
    }, [stamp])

    // TEMPLATE
    return <div className="container">
        {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onDeletePost={refreshPosts} onEditText={refreshPosts} id={id} />)}
    </div>
}

export default Posts