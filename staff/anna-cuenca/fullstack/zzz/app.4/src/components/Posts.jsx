import { useEffect, useState } from 'react'
import Post from './Post'

function Posts({ loadPosts, stamp }) {
    console.log('Posts')
    const [posts, setPosts] = useState([])


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
        console.log('Posts effect')

        refreshPosts()
    }, [stamp])




    return <div className="posts">
        {/* {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}
        {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleEditClick={refreshPosts} onToggleDeleteClick={refreshPosts} />)}
        {/* con React necesitamos crear una Key para renderizar una lista de
         elementos. Esta lista de elementos se renderiza con .map, porque .map
         devuelve un arrays */}
    </div>

}

export default Posts