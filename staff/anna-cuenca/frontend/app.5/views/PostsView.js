class PostsView extends Component {
  constructor() {
    super(document.getElementById("posts-view"));
  }

  renderPosts() {
    this.container.innerHTML = "";

    try {
      const posts = logic.retrievePosts();

      posts.forEachReverse(
        function (post) {
          const article = document.createElement("article");
          article.setAttribute("class", "post");

          const h2 = document.createElement("h2");
          h2.innerText = post.author;

          const img = document.createElement("img");
          img.setAttribute("class", "post-image");
          img.src = post.image;

          const p = document.createElement("p");
          p.innerText = post.text;

          const h3 = document.createElement("h3");
          h3.innerText = "Likes:  " + post.likes;

          const checkLoggedUser = logic.retrieveUser();

          let deleteButton = ""; //para que no me salga Undefined

          if (checkLoggedUser.email === post.author) {
            //tengo que poner this?
            deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener("click", function () {
              article.remove();
            });
          }

          const likeButton = document.createElement("button");
          likeButton.innerText = "Like";
          likeButton.addEventListener("click", function () {
            post.likes = post.likes + 1;
            h3.innerText = "Likes: " + post.likes;
          });

          article.append(h2, h3, img, p, deleteButton, likeButton);

          this.container.append(article);
        }.bind(this)
      );
    } catch (error) {
      alert(error.message);
    }
  }
}
