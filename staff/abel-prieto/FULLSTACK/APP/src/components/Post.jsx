import { useEffect } from "react"
import { useState } from "react"

import { Button, Input } from "../librery"

import logic from "../logic"

function Post(props) {
    const post = props.post

    // STATE EDIT MODE & COMMENT TEXT
    const [editMode, setEditMode] = useState(false)
    const [inputBorder, setInputBorder] = useState('solid');
    const [name, setName] = useState(null)

    const [commentText, setCommentText] = useState('')

    // STATE & EFFECT - NAME
    useEffect(() => {
        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setName(user.name)
                // Guardamos en STATE el user para usar el "NAME"
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])



    // LIKE POST BUTTON
    function handleToggleLikeClick() {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onToggleLikeClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // FAV POST BUTTON
    function handleToggleFavButtonClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onToggleFavClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // DELETE POST BUTTON
    function handleToggleDeleteButtonClick(postId) {
        if (confirm('Are you sure that you want to delete this post?')) {
            try {
                logic.deletePost(postId, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    props.onDeletePost()
                })
            } catch (error) {
                alert(error.message)
            }
        }

        return
    }

    // EDIT TEXT(POST) CLICK
    function handleToggleEditClick() {
        try {
            setEditMode(!editMode)

        } catch (error) {
            alert(error.message)
        }
    }

    // EDIT TEXT(POST) INPUT
    function handleToggleInputEditClick(postId, postText) {
        try {
            const text = document.querySelector("#post-tittle").value

            postText = text

            logic.toggleEditPostText(postId, postText, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onEditText()
                // Hacemos un repintado de los posts-favs

                setEditMode(!editMode)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // SEND COMMENTS
    // function handleToggleCommentClick(postId) {
    //     try {
    //         const comment = document.querySelector("#text-comment").value

    //         logic.toggleCommentPostText(postId, comment, error => {
    //             if (error) {
    //                 alert(error.message)

    //                 return
    //             }

    //             props.onSendComment()
    //             // Hacemos un repintado de los posts-favs

    //             setInputBorder('none');
    //             // Quitamos el borde del input por defecto

    //             // setCommentText('comment')
    //         })
    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    // TEMPLATE
    return <>
        <article className="post">
            <h2>{post.author.email}</h2>
            <img className='post-img' src={post.image} />
            <div className="buttons-edit">
                <p>{post.text}</p>
                {post.author.id === props.id && <Button onClick={handleToggleEditClick}>✏</Button>}
                {editMode === true &&
                    <div>
                        <Input id={'post-tittle'}></Input>
                        <Button onClick={() => handleToggleInputEditClick(post.id, post.text)}>Done</Button>
                    </div>}
            </div>
            {/* <div>
                {post.coments.length
                    ? <p>{name + ": " + post.coments + "  -  " + new Date().toLocaleDateString()}</p>
                    : <input className="post-comments" id="text-comment" placeholder="Escribe un comentario" type="text" style={{ borderStyle: inputBorder }}></input>}
            </div> */}
            <div className="buttons-post">
                <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                <Button onClick={() => handleToggleCommentClick(post.id)}>🗨</Button>
                <Button onClick={handleToggleFavButtonClick}>{post.fav ? '⭐' : '☆'}</Button>
                {post.author.id === props.id && (<Button onClick={() => handleToggleDeleteButtonClick(post.id)}>Delete post</Button>)}
            </div>
        </article >
    </>
}

export default Post