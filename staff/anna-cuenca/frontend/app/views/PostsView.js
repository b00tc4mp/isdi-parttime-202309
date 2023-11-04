class PostsView extends Component {
  constructor() {
    super(document.getElementById("posts-view"));
  }

  renderPosts() {
    this.container.innerHTML = "";

    try {
      const posts = logic.retrievePosts();

      posts.forEachReverse(
        function (post, index) {
          const article = document.createElement("article");
          article.setAttribute("class", "post");

          const title = document.createElement("h2");
          title.innerText = post.author;

          const image = document.createElement("img");
          image.setAttribute("class", "post-image");
          image.src = post.image;

          const text = document.createElement("p");
          text.innerText = post.text;

          const checkLoggedUser = logic.retrieveUser();

          //let deleteButton = ""; //para que no me salga Undefined

          if (checkLoggedUser.email === post.author) {
            //tengo que poner this?
            deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", function () {
              article.remove();
            });
          }

          const likeButton = document.createElement("button");
          likeButton.innerText = `${post.isFav ? "❤️" : "🤍"} ${
            post.likes.length
          } likes`;

          likeButton.onclick = function () {
            try {
              logic.toggleLikePost(index);
              this.renderPosts();
            } catch (error) {
              alert(error.message);
            }
          }.bind(this);

          article.append(title, image, text, deleteButton, likeButton);

          this.container.append(article);
        }.bind(this)
      );
    } catch (error) {
      alert(error.message);
    }
  }
}
