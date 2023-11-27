import logic from "../logic"

import { Container, Form, Field, Button } from "../librery"

function Newpost(props) {
    console.log('Home -> New Post')

    // CREATE NEW POST
    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

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

                        props.setPosts(posts)
                        // Estado de los posts pasado por props a 'HOME'
                        props.setView(null)
                        // Cambiamos la vista a "NULL" (los posts) con props a 'HOME'
                    })
                } catch (error) {
                    alert(error.message)
                }
            })

        } catch (error) {
            alert(error.message)
        }
    }

    // CANCEL NEW POST
    function handleCancelNewPostClick(event) {
        event.preventDefault()

        props.setView('null')
        // Cambiamos la vista a 'null' mediante props a 'HOME'
    }

    // TEMPLATE
    return <>
        <Container>
            <h2>New Post</h2>

            <Form onSubmit={handleNewPostSubmit}>
                <Field id="image-input">Image</Field>

                <Field id="text-input">Text</Field>

                <Button type="submit">Post</Button>
                <Button onClick={handleCancelNewPostClick}>Cancel</Button>
            </Form>
        </Container>
    </>
}

export default Newpost