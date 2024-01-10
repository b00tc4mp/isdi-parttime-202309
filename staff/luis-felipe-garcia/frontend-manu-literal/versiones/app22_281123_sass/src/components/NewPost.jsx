import { Field, Form, Button } from "../library"


function NewPost(props) {
    return <>
        <h2>New post</h2>
        <Form onSubmit={props.onNewPostSubmit}>
            <Field type="url" id="image-input" forId="image-input">Image</Field>
            <Field id="text-input" forId="text-input">Text</Field>
            <Button type="submit">Post</Button>
            <Button onClick={props.onCancelNewPostClick}>Cancel</Button>
        </Form>

    </>
}

export default NewPost