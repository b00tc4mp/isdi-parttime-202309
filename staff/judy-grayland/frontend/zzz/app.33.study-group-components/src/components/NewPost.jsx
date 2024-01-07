function NewPost() {
    return <div className="container">
            <h2>New post</h2>

            <form className="form" onSubmit={handleNewPostSubmit}>
                <label htmlFor="image-input">Image</label>
                <input type="url" id="image-input"/>

                <label htmlFor="text-input">Text</label>
                <input type="text" id="text-input"/>

                <Button type="submit">Post</Button>
                <Button onClick={handleCancelNewPostClick}>Cancel</Button>
            </form>
        </div>
}
export default NewPost