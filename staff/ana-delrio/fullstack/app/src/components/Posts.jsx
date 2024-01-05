import { useEffect, useState } from "react"
import Post from "./Post"

// these props, comes from the file home
function Posts({ loadPost, stamp }) {
    console.log('Posts')

    // Use the hook useState to declare the posts state, 
    // which is an array that will contain the posts, and the setPosts function to update that state
    const [posts, setPosts] = useState([])

    const refreshPosts = () => {
        try {
            loadPost((error, posts) => {
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

    // useEffect is used to run side-effects on the Posts component
    // These side-effects are executed after the component has rendered or when any of the dependencies in the [stamp] array change
    useEffect(() => {
        console.log('Posts effect')

        // Se llama a la función refreshPosts(). Esta función es responsable de cargar los posts y actualizar el estado posts en el componente
        refreshPosts()
        // The presence of [stamp] as a dependency means that this effect will run again only if the value of stamp changes between renderings.
        // If stamp does not change, the effect is not rerendered
    }, [stamp])

    // This useEffect is triggered when the Posts component is initially mounted and each time the value of stamp changes
    // Changing the value of stamp triggers the reloading of posts using the refreshPosts() function, which in turn updates the posts state in the component

    return <div className="posts">
        {posts.map((post) => <Post key={post.id} post={post}
            onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onPostTextUpdate={refreshPosts} />)}
    </div>

}

export default Posts

