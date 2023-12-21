function createUser(name, email, password) {
  const user = new User(name, email, password);

  db.users.push(user);
}

function cloneUser(user) {
  if (!(user instanceof User)) throw new TypeError("user is not a User");
  return new User(user.name, user.email, user.password);
}

function findUserIndexByEmail(email) {
  var index = db.users.findIndex(function (user) {
    return user.email === email;
  });
  return index;
}

function findUserByIndex(index) {
  if (typeof index !== "number") throw new TypeError("index is not a number");
  if (index < 0) throw new RangeError("index lower than 0");

  const user = db.users[index];

  if (user) return cloneUser(user);
  return null;
}

function updateUser(index, user) {
  if (typeof index != "number") throw new TypeError("index is not a number");
  if (index < 0) throw new RangeError("index lower than 0");
  if (!(user instanceof User)) throw new TypeError("user is not a User");
  db.users[index] = cloneUser(user);
}

function clonePost(post) {
  if (!(post instanceof Post)) throw new TypeError("post is not a Post");

  return new Post(
    post.author,
    post.image,
    post.text,
    post.likes.map((email) => email),
    post.delete
  );
}

function getPosts() {
  return db.posts.map(clonePost);
}

function createPost(email, image, text, deleteButton) {
  const post = new Post(email, image, text, [], deleteButton);

  db.posts.push(post);
}

function findPostByIndex(index) {
  if (typeof index !== "number") throw new TypeError("index is not a number");
  if (index < 0) throw new RangeError("indedx lower than 0");

  const post = db.posts[index];

  if (post) return clonePost(post);

  return null;
}

function updatePost(index, post) {
  if (typeof index !== "number") throw new TypeError("index is not a number");
  if (index < 0) throw new RangeError("index lower than 0");
  if (!(post instanceof Post)) throw new TypeError("post is not a Post");

  db.posts[index] = clonePost(post);
}

/////
/*
function modifyUserEmail(email, newEmail) {
  var user = db.users.find(function (user) {
    return user.email === email;
  });

  user.email = newEmail;
}

function modifyUserPassword(email, newPassword) {
  var user = db.users.find(function (user) {
    return user.email === email;
  });

  user.password = newPassword;
}
*/
