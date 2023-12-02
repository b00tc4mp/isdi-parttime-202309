import { useState } from 'react'
import { Button, Form } from '../library'
import logic from '../logic'
import { Input } from '../library'



//está declarado en null, porque es el estado inicial



function Post(props) {

    const [editTextPost, setEditTextPost] = useState(null)


    const post = props.post

    function handleToggleLikePostClick() {
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



    function handleToggleFavPostClick() {
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

    function handleEditSubmit(event) {
        event.preventDefault()

        const text = event.target.querySelector("#text").value
        console.log(text)

        try {
            logic.toggleEditPost(post.id, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                setEditTextPost(null)
                props.onToggleEditClick()



            })
        } catch (error) {
            alert(error.message)
        }

    }

    function handleEditClick() {

        setEditTextPost('edit-text-post')

    }

    function handleToggleDeletePostClick() {

        if (confirm('Are you sure you want to delete this post?')) {
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }


                    props.onToggleDeleteClick()

                })
            } catch (error) {
                alert(error.message)
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
            {post.author.id === logic.sessionUserId && (<Button onClick={() => handleToggleDeletePostClick(post.id)}>🗑</Button>)}
            {post.author.id === logic.sessionUserId && <Button onClick={handleEditClick}> 🖍</Button>}

        </div>

        <div>

            {editTextPost === 'edit-text-post' && <Form onSubmit={handleEditSubmit}>
                <Input id="text"></Input>
                <Button type='onSubmit'>👍🏼</Button>

            </Form>}


        </div>




    </article>
    )
}

export default Post


