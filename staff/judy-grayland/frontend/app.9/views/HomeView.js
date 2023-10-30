class HomeView extends Component {
  constructor() {
   super(document.getElementById('home-view'))

    this.container.style.display = 'none'

    this.logoutBtn = this.container.querySelector('#logout-btn')

    this.logoutBtn.onclick = function () {
      this.container.style.display = 'none'
      this.profileView.container.style.display = 'none'
      this.newPostView.style.display = 'none'
      this.postsView.style.display = ''
      loginView.container.style.display = ''

      logic.logoutUser()
    }.bind(this)

    
    this.profileView = new ProfileView
    
    this.homeLink = this.container.querySelector('#home-link')

    this.homeLink.onclick = function (event) {
      event.preventDefault()

      this.profileView.container.style.display = 'none'
      this.newPostView.style.display = 'none'
      this.postsView.style.display = ''
    }.bind(this)

    // profile

    this.profileView.container.style.display = 'none'

    this.profileLink = this.container.querySelector('#profile-link')

    this.profileLink.onclick = function (event) {
      event.preventDefault()

      this.newPostView.style.display = 'none'
      this.postsView.style.display = 'none'
      this.profileView.container.style.display = ''
    }.bind(this)

    this.postsView = this.container.querySelector('#posts-view')

    this.newPostView = this.container.querySelector('#new-post-view')
    this.newPostView.style.display = 'none'

    this.newPostButton = this.container.querySelector('#new-post-btn')

    this.newPostButton.onclick = function () {
      this.profileView.container.style.display = 'none'
      this.postsView.style.display = ''
      this.newPostView.style.display = ''
    }.bind(this)

    this.newPostForm = this.newPostView.querySelector('#new-post-form')

    this.cancelNewPostButton = this.newPostView.querySelector(
      '#cancel-new-post-button'
    )

    this.cancelNewPostButton.onclick = function (event) {
      event.preventDefault()

      this.newPostView.style.display = 'none'
      this.newPostForm.reset()
    }.bind(this)

    this.newPostForm.onsubmit = function (event) {
      event.preventDefault()

      const imageInput = this.newPostForm.querySelector('#image-input')
      const textInput = this.newPostForm.querySelector('#text-input')

      const image = imageInput.value
      const text = textInput.value

      try {
        logic.publishPost(image, text)

        this.newPostForm.reset()

        this.newPostView.style.display = 'none'

        // re-render posts
        this.renderPosts()
      } catch (error) {
        alert(error.message)
      }
    }.bind(this)
  }

  renderPosts() {
    this.postsView.innerHTML = ''

    try {
      const posts = logic.retrievePosts()

      posts.forEachReverse(
        function (post) {
          const article = document.createElement('article')
          article.setAttribute('class', 'post')

          const h2 = document.createElement('h2')
          h2.innerText = post.author

          const img = document.createElement('img')
          img.setAttribute('class', 'post-image')
          img.src = post.image

          const p = document.createElement('p')
          p.innerText = post.text

          article.append(h2, img, p)

          this.postsView.append(article)
        }.bind(this)
      )
    } catch (error) {
      alert(error.message)
    }
  }
}
