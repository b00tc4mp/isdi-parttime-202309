class Logic {
  constructor() {
    this.sessionUserId = null;
  }

  registerUser(name, email, password) {
    validateText(name, "name");
    validateText(email, "email");
    validateText(password, "password");

    const user = db.users.findByEmail(email);

    if (user) throw new Error("user already exists");

    db.users.insert(new User(null, name, email, password, []));
  }

  loginUser(email, password) {
    validateText(email, "email");
    validateText(password, "password");

    const user = db.users.findByEmail(email);

    if (!user || user.password !== password)
      throw new Error("wrong credentials");

    this.sessionUserId = user.id;
  }

  logoutUser() {
    this.sessionUserId = null;
  }

  retrieveUser() {
    const user = db.users.findById(this.sessionUserId);

    if (!user) throw new Error("user not found");

    delete user.password;

    return user;
  }

  changeUserEmail(newEmail, newEmailConfirm, password) {
    validateText(newEmail, "new email")
    validateText(newEmailConfirm, "new email confirm")
    validateText(password, "password")

    const user = db.users.findById(this.sessionUserId)

    if (!user || user.password !== password)
        throw new Error("wrong credentials")

    if (newEmail !== newEmailConfirm)
        throw new Error("new email and its confirmation do not match")

    user.email = newEmail

    db.users.update(user)
}

changeUserPassword(newPassword, newPasswordConfirm, password) {
  validateText(newPassword, "new password")
  validateText(newPasswordConfirm, "new password confirm")
  validateText(password, "password")

  const user = db.users.findById(this.sessionUserId)

  if (!user || user.password !== password)
      throw new Error("Wrong credentials")

  if (newPassword !== newPasswordConfirm)
      throw new Error("New password and its confirmation do not match")

  user.password = newPassword

  db.users.update(user)
}

  retrievePosts() {
    const user = db.users.findById(this.sessionUserId);

    if (!user) throw new Error("post not found");

    const posts = db.posts.getAll();

    posts.forEach((post) => {
      post.liked = post.likes.includes(this.sessionUserId);

      const author = db.users.findById(post.author);

      post.fav = user.favs.includes(post.id)

      post.author = author.name

      post.author = {
        email: author.email,
        id: author.id,
        name: author.name
      }
    });

    return posts;
  }


  retrieveFavoritePosts() {

    const user = db.users.findById(this.sessionUserId);
    if (!user) throw new Error("post not found");

    const favsPostsByUser = user.favs
    const posts = db.posts.getAll();

    // tengo los ids de los posts

    const favoritePosts = posts.filter((post) => favsPostsByUser.includes(post.id));

    // ahora tengo un array con los posts

    favoritePosts.forEach((post) => {
      post.liked = post.likes.includes(this.sessionUserId);

      const author = db.users.findById(post.author);

      post.author = author.name

      post.fav = user.favs.includes(post.id)
    });

    return favoritePosts;
    
}


publishPost(image, text) {
  validateText(image, 'image')
  validateText(text, 'text')
  db.posts.insert(new Post(null, this.sessionUserId, image, text, []))
}

  toggleLikePost(postId) {
    validateText(postId, "post id");

    const post = db.posts.findById(postId);

    if (!post) throw new Error("post not found");

    const index = post.likes.indexOf(this.sessionUserId);

    if (index < 0) post.likes.push(this.sessionUserId);
    else post.likes.splice(index, 1);

    db.posts.update(post);
  }

  deletePost(postId) {
    validateText(postId, 'post id')

    const post = db.posts.findById(postId)

    if (!post) {
        throw new Error('post not found')
    }

    db.posts.deleteById(post.id)
}



  toggleFavPost(postId) {
    validateText(postId, 'post id')

    const post = db.posts.findById(postId)

    if (!post)
        throw new Error('post not found')

    const user = db.users.findById(this.sessionUserId)

    if (!user)
        throw new Error('user not found')

    const index = user.favs.indexOf(post.id)

    if (index < 0)
        user.favs.push(post.id)
    else
        user.favs.splice(index, 1)

    db.users.update(user)
}
}
