import logic from "../logic"
import { Button, Form, Field, Container } from "../library"

function NewPost(props) {

    function handleCancelNewPostClick(event) {
        event.preventDefault()

        props.onClick(null)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector("#image-input")
        const textInput = event.target.querySelector("#text-input")

        const image = imageInput.value
        const text = textInput.value

        try {
            logic.publishPost(image, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                try {
                    logic.retrievePosts((error, posts) => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        posts.reverse()

                        setPosts(posts)
                        setView(null)
                    })
                } catch (error) {
                    alert(error.message)
                }
            })

            props.onSuccess(event)
        } catch (error) {
            alert(error.message)
        }
    }

    return <Container>
        <h2>New post</h2>

        <Form onSubmit={handleNewPostSubmit}>
            <Field id="image-input" type="url">Image</Field>
            <Field id="text-input">Text</Field>

            <Button type="submit">Post</Button>
            <Button onClick={handleCancelNewPostClick}>Cancel</Button>
        </Form>
    </Container>
}

export default NewPost