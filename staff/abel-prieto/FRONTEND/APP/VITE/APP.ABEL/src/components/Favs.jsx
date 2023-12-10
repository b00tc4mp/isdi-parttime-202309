import logic from "../logic"

import { Button } from "../librery"

import { useState } from "react"    // Import method useState 
import { useEffect } from "react"   // Import method useEffect


// FAVS
function Favs(props) {
    console.log('Favs')

    const fav = props.fav

    // STATE ID (Favs)
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
        props.onToggleLikeClick(fav.id)
    }

    // GO TO FAV POST BUTTON
    function handleToggleFavButtonClick() {
        props.onToggleFavClick(fav.id)
    }

    // GO TO DELETE POST BUTTON
    function handleToggleDeleteButtonClick() {
        props.onToggleDeleteClick(fav.id)
    }

    return <>
        <article key={fav.id} className="post">
            <h2>{fav.author.email}</h2>
            <img className="post-img" src={fav.image} />
            <p>{fav.text}</p>
            <div className="buttons-post">
                <Button onClick={handleToggleLikeButtonClick}>{fav.liked ? '❤️' : '🤍'} {fav.likes.length} likes</Button>
                <Button onClick={handleToggleFavButtonClick}>{fav.fav ? '⭐' : '☆'}Fav</Button>
                {fav.author.id === id && (<Button onClick={handleToggleDeleteButtonClick}>Delete post</Button>)}
            </div>
        </article>
    </>
}

export default Favs