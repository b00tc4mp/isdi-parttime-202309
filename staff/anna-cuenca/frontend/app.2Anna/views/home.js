homeView = document.getElementById("home-view");

homeView.style.display = "none";

logoutButton = homeView.querySelector("#logout-button");

logoutButton.onclick = function () {
  homeView.style.display = "none";
  profileView.style.display = "none";
  loginView.style.display = "";
};

changeEmailForm = homeView.querySelector("#change-email-form");

changeEmailForm.onsubmit = function (event) {
  event.preventDefault();

  var newEmailInput = changeEmailForm.querySelector("#new-email-input");
  var newEmailConfirmInput = changeEmailForm.querySelector(
    "#new-email-confirm-input"
  );
  var passwordInput = changeEmailForm.querySelector("#password-input");

  var newEmail = newEmailInput.value;
  var newEmailConfirm = newEmailConfirmInput.value;
  var password = passwordInput.value;

  try {
    changeUserEmail(loggedInEmail, newEmail, newEmailConfirm, password);

    loggedInEmail = newEmail;

    alert("E-mail changed");

    changeEmailForm.reset();
  } catch (error) {
    alert(error.message);
  }
};

changePasswordForm = homeView.querySelector("#change-password-form");

changePasswordForm.onsubmit = function (event) {
  event.preventDefault();

  var passwordInput = changePasswordForm.querySelector("#password-input");
  var newPasswordInput = changePasswordForm.querySelector(
    "#new-password-input"
  );
  var newPasswordConfirmInput = changePasswordForm.querySelector(
    "#new-password-confirm-input"
  );

  var password = passwordInput.value;
  var newPassword = newPasswordInput.value;
  var newPasswordConfirm = newPasswordConfirmInput.value;

  try {
    changeUserPassword(
      loggedInEmail,
      newPassword,
      newPasswordConfirm,
      password
    );

    alert("Password changed");

    changePasswordForm.reset();
  } catch (error) {
    alert(error.message);
  }
};

homeLink = homeView.querySelector("#home-link");

homeLink.onclick = function (event) {
  event.preventDefault();

  profileView.style.display = "none";
};

// profile

profileView = homeView.querySelector("#profile-view");

profileView.style.display = "none";

profileLink = homeView.querySelector("#profile-link");

profileLink.onclick = function (event) {
  event.preventDefault();

  newPostView.style.display = "none";
  postsView.style.display = "none";

  profileView.style.display = "";
};

postsView = homeView.querySelector("#posts-view");

newPostView = homeView.querySelector("#new-post-view");
newPostView.style.display = "none";

newPostButton = homeView.querySelector("#new-post-button");
var newPostDeleteButton = homeView.querySelector("#delete");
var newPostLikeButton = homeView.querySelector("#like");
var newPostLikesCounter = homeView.querySelector("#likesCounter");

newPostButton.onclick = function () {
  profileView.style.display = "none";
  newPostDeleteButton.style.display = "none";
  newPostLikeButton.style.display = "none";
  newPostLikesCounter.style.display = "none";
  postsView.style.display = "";
  newPostView.style.display = "";

  // faltaría ocultar el botón de like y delete (hecho :D)
};

newPostForm = newPostView.querySelector("#new-post-form");

cancelNewPostButton = newPostForm.querySelector("#cancel-new-post-button");

cancelNewPostButton.onclick = function (event) {
  event.preventDefault();

  newPostView.style.display = "none";
  newPostForm.reset();
};

newPostForm.onsubmit = function (event) {
  event.preventDefault();

  var posts = retrievePosts();

  var imageInput = newPostForm.querySelector("#image-input");
  var textInput = newPostForm.querySelector("#text-input");
  var deletePostButton = newPostForm.querySelector("#delete");

  var image = imageInput.value;
  var text = textInput.value;
  var likes = 0;

  try {
    publishPost(loggedInEmail, image, text, likes);

    newPostForm.reset();

    newPostView.style.display = "none";

    // re-render posts

    renderPosts();
  } catch (error) {
    alert(error.message);
  }
};

function renderPosts() {
  postsView.innerHTML = ""; //borra contenido anterior

  var posts = retrievePosts(); // recupera los posts

  posts.forEachReverse(function (post) {
    var article = document.createElement("article");
    article.setAttribute("class", "post");

    var h2 = document.createElement("h2");
    h2.innerText = post.author;

    var img = document.createElement("img");
    img.setAttribute("class", "post-image");
    img.src = post.image;

    var p = document.createElement("p");
    p.innerText = post.text;

    var h3 = document.createElement("h3");
    h3.innerText = "Likes:  " + post.likes;

    var checkLoggedUser = findUserByEmail(loggedInEmail);
    var deleteButton = ""; //para que no me salga Undefined

    if (checkLoggedUser.email === post.author) {
      deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", function () {
        article.remove();
      });
    }

    var likeButton = document.createElement("button");
    likeButton.innerText = "Like";
    likeButton.addEventListener("click", function () {
      post.likes = post.likes + 1;
      h3.innerText = "Likes: " + post.likes;
    });

    article.append(h2, h3, img, p, deleteButton, likeButton);

    postsView.append(article);
  });
}
