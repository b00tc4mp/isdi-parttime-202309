class Logic {
  constructor() {
    this.loggedInEmail = null;
  }
  registerUser(name, email, password) {
    validateText(name, "name");
    validateText(email, "email");
    validateText(password, "password");

    const user = findUserIndexByEmail(email);

    if (user > -1) throw new Error("user already exists"); //mirar por qué

    createUser(name, email, password);
  }

  loginUser(email, password) {
    validateText(email, "email");
    validateText(password, "password");

    const index = findUserIndexByEmail(email);

    if (index < 0) throw new Error("wrong credentials");

    const user = findUserByIndex(index);

    if (!user || user.password !== password)
      throw new Error("wrong credentials");

    this.loggedInEmail = email;
  }

  logoutUser() {
    this.loggedInEmail = null;
  }

  retrieveUser() {
    const index = findUserIndexByEmail(this.loggedInEmail);
    if (index < 0) throw new Error("user not found");
    const user = findUserByIndex(index);
    delete user.password; //esto lo hacemos por seguridad
    return user;
  }

  changeUserEmail(newEmail, newEmailConfirm, password) {
    validateText(newEmail, "new email");
    validateText(newEmailConfirm, "new email confirm");
    validateText(password, "password");

    const index = findUserIndexByEmail(this.loggedInEmail);
    const user = findUserByIndex(index);

    if (!user || user.password !== password)
      throw new Error("wrong credentials");

    if (newEmail != newEmailConfirm)
      throw new Error("new email and its confirmation do not match");

    user.email = newEmail;

    updateUser(index, user);

    const posts = getPosts();

    posts.forEach((post, index) => {
      if (post.author === this.loggedInEmail) {
        post.author = newEmail;

        upddatePost(index, post);
      }
    });
    this.loggedInEmail = newEmail;
  }

  changeUserPassword(newPassword, newPasswordConfirm, password) {
    validateText(newPassword, "new password");
    validateText(newPasswordConfirm, "new password confirm");
    validateText(password, "password");

    const index = findUserByIndex(this.loggedInEmail);

    const user = findUserByIndex(index);

    if (!user || user.password !== password)
      throw new Error("wrong credentials");

    if (newPassword !== newPasswordConfirm)
      throw new Error("new password and its confirmation do not match");

    user.password = newPassword;
    updateUser(index, user);
  }

  retrievePosts() {
    const index = findUserIndexByEmail(this.loggedInEmail);

    if (index < 0) throw new Error("wrong credentials");

    const user = findUserByIndex(index);

    const posts = getPosts();

    posts.forEach(
      (post) => (post.isFav = post.likes.includes(this.loggedInEmail))
    );

    return posts;
  }

  //publishPost(image, text, likes) {
  //validateText(image, "image");
  // validateText(text, "text");

  //  createPost(this.loggedInEmail, image, text, likes);
  // }

  publishPost(image, text) {
    validateText(image, "image");
    validateText(text, "text");

    createPost(this.loggedInEmail, image, text);
  }

  toggleLikePost(postIndex) {
    validateNumber(postIndex);

    const post = findPostByIndex(postIndex);

    const likeIndex = post.likes.indexOf(this.loggedInEmail);

    if (likeIndex < 0) post.likes.push(this.loggedInEmail);
    else post.likes.splice(likeIndex, 1);

    updatePost(postIndex, post);
  }
}
