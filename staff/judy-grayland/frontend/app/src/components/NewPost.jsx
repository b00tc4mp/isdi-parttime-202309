import { Button, Field, Form } from '../library'

function NewPost(props) {
  return (
    <div className="container new-post">
      <h2>New post</h2>

      <Form onSubmit={props.onSubmit}>
        <Field id="image-input" type="url">
          Image
        </Field>

        <Field id="text-input">Text</Field>

        <Button type="submit">Post</Button>
        <Button onClick={props.onCancel}>Cancel</Button>
      </Form>
    </div>
  )
}

export default NewPost
