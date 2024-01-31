import { useState } from "react"
import { Image, Button, Input } from "../library/index"
import logic from "../logic"
import session from "../logic/session"
import { useContext } from '../hooks/index'

function Post(props) {
    const post = props.post

    const [edit, setEdit] = useState(null)

    const context = useContext()

    function handleToggleLikeClick() {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    context.handleError(error)

                    return
                }

                props.onLikeSuccess()
            })

        } catch (error) {
            context.handleError(error)
        }
    }

    function handleDeleteClick() {
        if (confirm('Are you sure you want to delete this post?')) {
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        context.handleError(error)

                        return
                    }

                    props.onDeleteSuccess()
                })
            } catch (error) {
                context.handleError(error)
            }
        }

        return
    }

    function handleToggleFavClick() {
        try {
            logic.toggleFavPost(post.id, error => {
                if (error) {
                    context.handleError(error)

                    return
                }

                props.onFavSuccess()
            })
        } catch (error) {
            context.handleError(error)
        }
    }

    function handleToggleEditClick() {
        try {
            logic.toggleEditPost(post.id, error => {
                if (error) {
                    context.handleError(error)

                    return
                }

                if (edit !== 'edit') {
                    setEdit('edit')

                    return
                }

                setEdit('null')
            })
        } catch (error) {
            context.handleError(error)
        }
    }

    function handleEditConfirmClick() {
        const textToEdit = document.querySelector('#textToEdit').value
        console.log(textToEdit)
        try {
            logic.updatePostText(post.id, textToEdit, error => {
                if (error) {
                    context.handleError(error)

                    return
                }
                props.onEditSuccess()
            })
            setEdit('null')
        } catch (error) {
            context.handleError(error)
        }
    }

    return <article className="post">
        <h3>{post.author.name}</h3>
        <Image src={post.image} />

        <aside>
            <Button onClick={handleToggleLikeClick}>{post.liked ? '❤️' : '🤍'} {post.likes.length}</Button>
            <Button onClick={handleToggleFavClick}>{post.fav ? '🌟' : '⭐'}</Button>
            {post.author.id == session.userId && <Button onClick={handleDeleteClick}>🚽</Button>}
        </aside>

        <aside>
            <h4>{post.author.name}</h4>
            <p>{post.text}</p>
            {post.author.id == session.userId && <Button className="edit-button" onClick={handleToggleEditClick}>✏</Button>}
            {edit === 'edit' && <div> <Input id="textToEdit"></Input> <Button onClick={handleEditConfirmClick}>✅</Button> </div>}
        </aside>
    </article>
}

export default Post