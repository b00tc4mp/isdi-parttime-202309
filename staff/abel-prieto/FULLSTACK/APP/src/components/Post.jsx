import { useEffect } from "react"
import { useState } from "react"

import { Button, Input } from "../librery"

import logic from "../logic"
import session from "../logic/session"

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
                    props.onError(error)

                    return
                }

                setName(user.name)
                // Guardamos en STATE el user para usar el "NAME"
            })
        } catch (error) {
            props.onError(error)
        }
    }, [])



    // LIKE POST BUTTON
    function handleToggleLikeClick() {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onToggleLikeClick()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    // FAV POST BUTTON
    function handleToggleFavButtonClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onToggleFavClick()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    // DELETE POST BUTTON
    function handleToggleDeleteButtonClick(postId) {
        if (confirm('Are you sure that you want to delete this post?')) {
            try {
                logic.deletePost(postId, error => {
                    if (error) {
                        props.onError(error)

                        return
                    }

                    props.onDeletePost()
                })
            } catch (error) {
                props.onError(error)
            }
        }

        return
    }

    // EDIT TEXT(POST) CLICK
    function handleToggleEditClick() {
        try {
            setEditMode(!editMode)

        } catch (error) {
            props.onError(error)
        }
    }

    // EDIT TEXT(POST) INPUT
    function handleToggleInputEditClick(postId, postText) {
        try {
            const text = document.querySelector("#post-tittle").value

            postText = text

            logic.toggleEditPostText(postId, postText, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onEditText()
                // Hacemos un repintado de los posts-favs

                setEditMode(!editMode)
            })
        } catch (error) {
            props.onError(error)
        }
    }

    // SEND POST COMMENTS
    function handleToggleCommentClick(postId) {
        try {
            const postComment = document.querySelector("#text-comment").value

            logic.toggleCommentPost(postId, postComment, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onSendComment()
                // Hacemos un repintado de los posts-favs

                setInputBorder('none');
                // Quitamos el borde del input por defecto

                setCommentText('comment')
            })
        } catch (error) {
            props.onError(error)
        }
    }

    // TEMPLATE
    return <>
        <article className="post">
            <h2>{post.author.email}</h2>
            <img className='post-img' src={post.image} />
            <div className="buttons-edit">
                <p>{post.text}</p>
                {post.author.id === session.sessionUserId && <Button onClick={handleToggleEditClick}>✏</Button>}
                {editMode === true &&
                    <div>
                        <Input id={'post-tittle'}></Input>
                        <Button onClick={() => handleToggleInputEditClick(post.id, post.text)}>Done</Button>
                    </div>}
            </div>
            {<div>
                {post.comments.length
                    ? <p>{name + ": " + post.comments + "  -  " + new Date().toLocaleDateString()}</p>
                    : <input className="post-comments" id="text-comment" placeholder="Escribe un comentario" type="text" style={{ borderStyle: inputBorder }}></input>}
            </div>}
            <div className="buttons-post">
                <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</Button>
                <Button onClick={() => handleToggleCommentClick(post.id)}>🗨</Button>
                <Button onClick={handleToggleFavButtonClick}>{post.fav ? '⭐' : '☆'}</Button>
                {post.author.id === session.sessionUserId && (<Button onClick={() => handleToggleDeleteButtonClick(post.id)}>Delete post</Button>)}
            </div>
        </article >
    </>
}

export default Post