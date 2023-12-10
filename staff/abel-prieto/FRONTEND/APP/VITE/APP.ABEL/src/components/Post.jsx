import logic from "../logic"
import { refreshPosts } from "../utils/refreshPosts"

import { Button } from "../librery"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect


// POSTS
function Post(props) {
    console.log('Only Post')

    const post = props.post

    // STATE ID (Posts)
    const [id, setId] = useState(null)

    // STATE & EFFECT - NAME & ID
    useEffect(() => {
        console.log('Home -> Effect (NAME)')

        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setId(user.id)
                // Guardamos en STATE el user para usar el "ID"
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    // LIKE BUTTON
    function handleToggleLikeClick(postId) {
        try {
            logic.toggleLikePost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts(props.view, props.setPosts, props.setFavs)
                // Hacemos un repintado de los posts-favs
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // DELETE BUTTON
    function handleToggleDeletePostClick(postId) {
        if (confirm('Are you sure that you want to delete this post?')) {

            try {
                logic.deletePost(postId, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    refreshPosts(props.view, props.setPosts, props.setFavs)
                    // Hacemos un repintado de los posts-favs
                })

            } catch (error) {
                alert(error.message)
            }
        }
    }

    // FAVS POST BUTTON
    function handleToggleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts(props.view, props.setPosts, props.setFavs)
                // Hacemos un repintado de los posts-favs
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // TEMPLATE
    return <>
        <article className="post">
            <h2>{post.author.email}</h2>
            <img className='post-img' src={post.image} />
            <p>{post.text}</p>
            <div className="buttons-post">
                <Button onClick={() => handleToggleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                <Button onClick={() => handleToggleFavPostClick(post.id)}>{post.fav ? '⭐' : '☆'}Fav</Button>
                {post.author.id === id && (<Button onClick={() => handleToggleDeletePostClick(post.id)}>Delete post</Button>)}
            </div>
        </article>
    </>
}

export default Post