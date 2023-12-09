function registerUser(name, email, password) {
  validateText(name, "name");
  validateText(email, "email");
  validateText(password, "password");

  var user = findUserByEmail(email);

  if (user) throw new Error("user already exists");

  createUser(name, email, password);
}

function authenticateUser(email, password) {
  validateText(email, "email");
  validateText(password, "password");

  var user = findUserByEmail(email);

  if (!user || user.password !== password) throw new Error("wrong credentials");
}

function retrieveUser(email) {
  validateText(email, "email");

  var user = findUserByEmail(email);

  if (!user) throw new Error("user not found");

  return user;
}

function changeUserEmail(email, newEmail, newEmailConfirm, password) {
  validateText(email, "email");
  validateText(newEmail, "new email");
  validateText(newEmailConfirm, "new email confirm");
  validateText(password, "password");

  var user = findUserByEmail(email);

  if (!user || user.password !== password) throw new Error("wrong credentials");

  if (newEmail !== newEmailConfirm)
    throw new Error("new email and its confirmation do not match");

  modifyUserEmail(email, newEmail);
}

function changeUserPassword(email, newPassword, newPasswordConfirm, password) {
  validateText(email, "email");
  validateText(newPassword, "new password");
  validateText(newPasswordConfirm, "new password confirm");
  validateText(password, "password");

  var user = findUserByEmail(email);

  if (!user || user.password !== password) throw new Error("wrong credentials");

  if (newPassword !== newPasswordConfirm)
    throw new Error("new password and its confirmation do not match");

  moddifyUserPassword(email, newPassword);
}

/// no se podría unificar estas funciones en solo una que cambiara datos?

function retrievePosts() {
  return getPosts();
}

function publishPost(email, image, text, likes) {
  validateText(email, "email");
  validateText(image, "image");
  validateText(text, "text");

  createPost(email, image, text, likes);
}
