import { useState } from 'react'
import { Button, Form } from '../library'
import logic from '../logic'
import { Input } from '../library'
import session from '../logic/session'

import Context from '../Context'
import { useContext } from '../hooks'


//está declarado en null, porque es el estado inicial



function Post(props) {

    const [editTextPost, setEditTextPost] = useState(null)

    //const { handleError } = useContext(Context)

    const context = useContext()


    const post = props.post

    function handleToggleLikePostClick() {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    //alert(error.message)
                    context.handleError(error)

                    return
                }


                props.onToggleLikeClick()

            })
        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }



    function handleToggleFavPostClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    //alert(error.message)
                    context.handleError(error)

                    return
                }


                props.onToggleFavClick()
            })
        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }

    function handleEditSubmit(event) {
        event.preventDefault()

        const text = event.target.querySelector("#text").value
        console.log(text)

        try {
            logic.toggleEditPost(post.id, text, error => {
                if (error) {
                    //alert(error.message)
                    context.handleError(error)

                    return
                }
                setEditTextPost(null)
                props.onToggleEditClick()



            })
        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }

    }

    function handleEditClick() {

        if (editTextPost === null) {

            setEditTextPost('edit-text-post')
            // } else {
            //     setEditTextPost(null)
        }



    }

    function handleCancelEdit() {
        setEditTextPost(null)
    }

    function handleToggleDeletePostClick() {

        if (confirm('Are you sure you want to delete this post?')) {
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        //alert(error.message)
                        context.handleError(error)

                        return
                    }


                    props.onToggleDeleteClick()

                })
            } catch (error) {
                //alert(error.message)
                context.handleError(error)
            }
        }
    }







    return (<article className="post">
        <h2>{post.author.name}</h2>
        <img className="post-image" src={post.image} />
        <p>{post.text}</p>

        <div className="post-actions">

            <Button onClick={handleToggleLikePostClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length} </Button>
            <Button onClick={handleToggleFavPostClick}>{post.fav ? '⭐️' : '✩'}</Button>
            {post.author.id === session.sessionUserId && (<Button onClick={() => handleToggleDeletePostClick(post.id)}>🗑</Button>)}
            {post.author.id === session.sessionUserId && editTextPost === null && <Button onClick={handleEditClick}> 🖍</Button>}

            {/* Lo que envuelve al elemento, por ejemplo un botón se llaman children, en el caso del botón
             de like, {post.liked ? '❤️' : '🤍'} {post.likes.length}  eso son los children */}

        </div>

        <div>

            {editTextPost === 'edit-text-post' && <Form onSubmit={handleEditSubmit}>
                <Input id="text"></Input>
                <Button type='onSubmit'>Save</Button>
                <Button onClick={handleCancelEdit}>Cancel</Button>

            </Form>}


        </div>




    </article>
    )
}

export default Post


