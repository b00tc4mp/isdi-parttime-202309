class NewPostView extends Component {
  constructor() {
    super(document.getElementById("new-post-view"));

    this.hide();

    this.newPostForm = this.container.querySelector("#new-post-form");

    this.cancelNewPostButton = this.newPostForm.querySelector(
      "#cancel-new-post-button"
    );

    this.cancelNewPostButton.onclick = function (event) {
      event.preventDefault();

      this.hide();
      this.newPostForm.reset();
    }.bind(this);

    this.newPostForm.onsubmit = function (event) {
      event.preventDefault();

      const posts = logic.retrievePosts(); //esto no sé si lo uso

      const imageInput = this.newPostForm.querySelector("#image-input");
      const textInput = this.newPostForm.querySelector("#text-input");
      const deletePostButton = this.newPostForm.querySelector("#delete");

      const image = imageInput.value;
      const text = textInput.value;
      let likes = 0;

      try {
        //publishPost(loggedInEmail, image, text, likes);
        logic.publishPost(image, text, likes);

        this.newPostForm.reset();

        this.hide();

        // re-render posts

        homeView.postsView.renderPosts();
      } catch (error) {
        alert(error.message);
      }
    }.bind(this);
  }
}
