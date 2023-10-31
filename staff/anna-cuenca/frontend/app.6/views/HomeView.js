class HomeView extends Component {
  constructor() {
    super(document.getElementById("home-view"));
    this.hide();
    this.logoutButton = this.container.querySelector("#logout-button");

    this.logoutButton.onclick = function () {
      this.hide();
      this.profileView.hide();
      this.newPostView.hide();
      this.postsView.show();

      logic.logoutUser();
    }.bind(this);

    this.profileView = new ProfileView();

    this.homeLink = this.container.querySelector("#home-link");

    this.homeLink.onclick = function (event) {
      event.preventDefault();

      this.profileView.hide();
      this.newPostsView.hide();
      this.postsView.show();
    }.bind(this);

    // profile

    this.profileLink = this.container.querySelector("#profile-link");

    this.profileLink.onclick = function (event) {
      event.preventDefault();

      this.newPostView.hide();
      this.postsView.hide();

      this.profileView.show();
    }.bind(this);

    this.postsView = new PostsView();
    this.newPostView = new NewPostView();

    this.newPostDeleteButton = this.container.querySelector("#delete");
    this.newPostLikeButton = this.container.querySelector("#like");
    this.newPostLikesCounter = this.container.querySelector("#likesCounter");

    this.newPostButton = this.container.querySelector("#new-post-button");

    this.newPostButton.onclick = function () {
      this.profileView.hide();
      this.postsView.show();
      this.newPostView.show();
      this.newPostLikeButton.style.display = "none";
      this.newPostLikesCounter.style.display = "none";
      this.newPostDeleteButton.style.display = "none";
    }.bind(this);

    ///////
  }
}
