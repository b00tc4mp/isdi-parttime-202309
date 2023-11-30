import logic from "../logic"
import { refreshPosts } from "../utils/refreshPosts"

import { Button, Input } from "../librery"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect


// POSTS
function Post2({ posts, favs, view, setPosts, setFavs }) {
    console.log('Posts')

    // STATE ID (Posts)
    const [id, setId] = useState(null)

    // STATE EDIT TEXT (Posts)
    const [editStates, setEditStates] = useState({});

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

                refreshPosts(view, setPosts, setFavs)
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

                    refreshPosts(view, setPosts, setFavs)
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

                refreshPosts(view, setPosts, setFavs)
                // Hacemos un repintado de los posts-favs
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // EDIT POST-TEXT CLICK
    function handleToggleEditClick(postId) {
        try {
            setEditStates(prevEditStates => ({
                ...prevEditStates,
                [postId]: !prevEditStates[postId], // Toggle the edit state
            }));


        } catch (error) {
            alert(error.message)
        }
    }

    // EDIT POST-TEXT INPUT
    function handleToggleInputEditClick(postId, postText) {
        try {
            const textInput = document.querySelector("#post-tittle")
            const text = textInput.value

            postText = text

            logic.toggleEditPostText(postId, postText, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts(view, setPosts, setFavs)
                // Hacemos un repintado de los posts-favs

                setEditStates(prevEditStates => ({
                    ...prevEditStates,
                    [postId]: !prevEditStates[postId], // Toggle the edit state
                }));
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // TEMPLATE
    return (
        <>
            <div className="container">
                {view !== "favs" ? (
                    <div className='container'>

                        {posts.map(post => <article className="post" key={post.id}>
                            <h2>{post.author.email}</h2>
                            <img className='post-img' src={post.image} />
                            <div className="buttons-edit">
                                <p>{post.text}</p>
                                {post.author.id === id && <Button onClick={() => handleToggleEditClick(post.id)}>✏</Button>}
                                {editStates[post.id] &&
                                    <div>
                                        <Input id={'post-tittle'}></Input>
                                        <Button onClick={() => handleToggleInputEditClick(post.id, post.text)}>Done</Button>
                                    </div>}
                            </div>
                            <div className="buttons-post">
                                <Button onClick={() => handleToggleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                                <Button onClick={() => handleToggleFavPostClick(post.id)}>{post.fav ? '⭐' : '☆'}Fav</Button>
                                {post.author.id === id && (<Button onClick={() => handleToggleDeletePostClick(post.id)}>Delete post</Button>)}
                            </div>
                        </article>)}
                    </div>
                ) : (
                    <div className="container">
                        <h1>⭐ All your favorite posts ⭐</h1>

                        {favs.map(post => <article className="post">
                            <h2>{post.author.email}</h2>
                            <img className='post-img' src={post.image} />
                            <p>{post.text}</p>
                            <div className="buttons-post">
                                <Button onClick={() => handleToggleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                                <Button onClick={() => handleToggleFavPostClick(post.id)}>{post.fav ? '⭐' : '☆'}Fav</Button>
                                {post.author.id === id && (<Button onClick={() => handleToggleDeletePostClick(post.id)}>Delete post</Button>)}
                            </div>
                        </article>)}
                    </div>)}
            </div >
        </>
    );
}

export default Post2