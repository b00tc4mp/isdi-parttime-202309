

class Logic {
  constructor() {
    this.sessionUserId = null
  }


  registerUser(name, email, password) {
    validateText(name, 'name')
    validateText(email, 'email')
    validateText(password, 'password')

    const user = db.users.findByEmail(email)

    if (user)
      throw new Error('user already exists')

    db.users.insert(new User(null, name, email, password, []))
  }


  loginUser(email, password) {
    validateText(email, 'email')
    validateText(password, 'password')

    const user = db.users.findByEmail(email)

    if (!user)
      throw new Error('user not found')

    if (user.password !== password)
      throw new Error('wrong credentials')

    this.sessionUserId = user.id
  }


  retrieveUser() {
    const user = db.users.findById(this.sessionUserId)

    if (!user)
      throw new Error('user not found')

    delete user.password

    return user
  }


  logoutUser() {
    this.sessionUserId = null
  }


  changeUserEmail(newEmail, confirmNewEmail, password) {
    validateText(newEmail, 'new email')
    validateText(confirmNewEmail, 'new email confirm')
    validateText(password, 'new email')

    const user = db.users.findById(this.sessionUserId)

    if (!user || user.password !== password) {
      throw new Error('wrong credentials')
    }

    if (newEmail !== confirmNewEmail) {
      throw new Error('New email and your confirm doesnt match each other')
    }

    user.email = newEmail

    db.users.update(user)
  }


  changeUserPassword(password, newPassword, againNewPassword) {
    validateText(password, 'password')
    validateText(newPassword, 'new password')
    validateText(againNewPassword, 'the repeat password')

    const user = db.users.findById(this.sessionUserId)

    if (!user || user.password !== password) {
      throw new Error('wrong credentials')
    }
    if (newPassword !== againNewPassword) {
      throw new Error('New pass and his confirmation are not correct. Try again')
    }

    user.password = newPassword

    db.users.update(user)
  }


  retrievePosts() {
    const user = db.users.findById(this.sessionUserId)

    if (!user)
      throw new Error('user not found')

    const posts = db.posts.getAll()

    posts.forEach(post => {
      post.liked = post.likes.includes(this.sessionUserId)

      const author = db.users.findById(post.author)

      post.fav = user.favs.includes(post.id)

      post.author = {
        email: author.email,
        id: author.id
      }
    })

    return posts
  }


  retrieveFavPosts() {

    const user = db.users.findById(this.sessionUserId)

    if (!user)
      throw new Error('user not found')

    const posts = db.posts.getAll()

    const favPosts = posts.filter(post => user.favs.includes(post.id))

    favPosts.forEach(post => {
      post.liked = post.likes.includes(this.sessionUserId)

      const author = db.users.findById(post.author)

      post.fav = user.favs.includes(post.id)

      post.author = {
        email: author.email,
        id: author.id
      }
    })

    return favPosts
  }


  publishPost(image, text) {
    validateText(image, 'image')
    validateText(text, 'text')

    db.posts.insert(new Post(null, this.sessionUserId, image, text, []))
  }

  toggleLikePost(postId) {
    validateText(postId, 'post id')

    const post = db.posts.findById(postId)

    if (!post) {
      throw new Error('post not found')
    }

    const likeIndex = post.likes.indexOf(this.sessionUserId)

    if (likeIndex < 0) {
      post.likes.push(this.sessionUserId)
    } else {
      post.likes.splice(likeIndex, 1)
    }

    db.posts.update(post)
  }


  deletePost(postId) {
    validateText(postId, 'post id')

    const post = db.posts.findById(postId)
    const user = db.users.findById(this.sessionUserId)
    const index = user.favs.indexOf(postId)

    if (!post) {
      throw new Error('post not found')
    }

    if (!user) {
      throw new Error('user not found')
    }

    db.posts.deleteById(post.id)
    user.favs.splice(index, 1)

    db.users.update(user)
  }


  toggleFavPost(postId) {
    validateText(postId, 'post id')

    const post = db.posts.findById(postId)

    if (!post) {
      throw new Error('post not found')
    }

    const user = db.users.findById(this.sessionUserId)

    if (!user) {
      throw new Error('user not found')
    }

    const index = user.favs.indexOf(postId)

    if (index < 0) {
      user.favs.push(post.id)
    } else {
      user.favs.splice(index, 1)
    }

    db.users.update(user)
  }
}