import logic from "../logic"

import { Button } from "../librery"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect


// POSTS
function Posts(props) {
    console.log('Posts')

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

    // GO TO LIKE POST BUTTON
    function handleToggleLikeButtonClick() {
        props.onToggleLikeClick(post.id)
    }

    // GO TO FAV POST BUTTON
    function handleToggleFavButtonClick() {
        props.onToggleFavClick(post.id)
    }

    // GO TO DELETE POST BUTTON
    function handleToggleDeleteButtonClick() {
        props.onToggleDeleteClick(post.id)
    }

    return <>
        <article className="post">
            <h2>{post.author.email}</h2>
            <img className='post-img' src={post.image} />
            <p>{post.text}</p>
            <div className="buttons-post">
                <Button onClick={handleToggleLikeButtonClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                <Button onClick={handleToggleFavButtonClick}>{post.fav ? '⭐' : '☆'}Fav</Button>
                {post.author.id === id && (<Button onClick={handleToggleDeleteButtonClick}>Delete post</Button>)}
            </div>
        </article>
    </>
}

export default Posts