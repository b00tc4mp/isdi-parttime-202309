


function Home(props) {
  

console.log('Home') // esto lo hicimos para saber cuando se carga home

const viewState = React.useState(null) //inicializo la variable viewState

const view = viewState[0]
const setView = viewState[1]

function handleLogoutClick() {
  logic.logoutUser()

  props.onLogoutClik()
}

let name = null

try {
  const user = logic.retrieveUser()

  name = user.name
 


} catch (error){
  alert(error.message)
}

function handleProfileClick(event) { //cuando se clicke a profile
  event.preventDefault()

  setView('profile') //cambio a la vista de profile
}

function handleHomeClick(event){
  event.preventDefault()

  setView(null)
}

function handleNewPostClick() {
  setView('new-post')
}

function handleCancelNewPostClick(event){
  event.preventDefault()

  setView(null)
}

let posts = null

try {
  posts = logic.retrievePosts()

  posts.reverse()

}catch (error){
  alert(error.message)
}

function handleNewPostSubmit(event){
  event.preventDefault()

  const imageInput = event.target.querySelector('#image-input')
  const textInput = event.target.querySelector('#text-input')

  const image = imageInput.value
  const text = textInput.value

  try {

    logic.publishPost(image, text)

    setView(null)

  } catch (error) {

    alert(error.message)

  }
}



function handleLikeClick(event, index){
  event.preventDefault()



  try {
  const user = logic.retrieveUser() //me devuelve el user que ha hecho login
  const userEmail = user.email //de user cojo la información que me interesa, el email

// tengo que revertir los índices porque se muestran al revés
  const reversedIndex = db.posts.length - 1 - index;

//miro si el usuario ya le había dado like o no
  logic.toggleLikePost(reversedIndex)
  // pongo los posts en la variable posts
 


    // Renderiza los posts actualizados
    root.render(<App />)
    setView('home')

    

  } catch (error){
    alert(error.message);
  }
}


function handleChangeEmailSubmit (event) {

  event.preventDefault()

      const newEmailInput = event.target.querySelector('#new-email-input')
      const confirmNewEmailInput = event.target.querySelector('#new-email-confirm-input')
      const passwordInput = event.target.querySelector('#password-input')

      const newEmail = newEmailInput.value
      const confirmNewEmail = confirmNewEmailInput.value
      const password = passwordInput.value

      try {

        logic.changeUserEmail(newEmail, confirmNewEmail, password)
        

       
        setView(null)
        
    } catch (error) {
        alert(error.message)
    }

}


function handleChangePasswordSubmit (event){
  event.preventDefault()

  const passwordInput = event.target.querySelector('#password-input')
  const newPasswordInput = event.target.querySelector('#new-password-input')
  const newPasswordConfirmInput = event.target.querySelector('#new-password-confirm-input')

  const password = passwordInput.value
  const newPassword = newPasswordInput.value
  const newPasswordConfirm = newPasswordConfirmInput.value

  try {

    logic.changeUserPassword(newPassword, newPasswordConfirm, password)


    
    setView(null)
    
} catch (error) {
    alert(error.message)
}

}

function handleDeletePostClick (event){
  event.preventDefault()



}

return   <div>
  
<header className="home-header">
    <h1><a href="" onClick={handleHomeClick}>Home</a></h1>

    <div>
        <button onClick={handleNewPostClick}>+</button>
        <a href="" onClick={handleProfileClick}>{name}</a>
        <button onClick={handleLogoutClick}>Logout</button>
    </div>
</header>

{view === 'profile' && <div className="view">

    <h2>Update e-mail</h2>

    <form className="form"  onSubmit={handleChangeEmailSubmit}>
        <label htmlFor="new-email-input">New e-mail</label>
        <input id="new-email-input" type="email"/>

        <label htmlFor="new-email-confirm-input">Confirm new e-mail</label>
        <input id="new-email-confirm-input" type="email"/>

        <label htmlFor="password-input">Password</label>
        <input type="password" id="password-input"/>

        <button type="submit">Update e-mail</button>
    </form>

   

    <h2>Update password</h2>

    <form className="form" onSubmit={handleChangePasswordSubmit}>

        <label htmlFor="password-input">Current password</label>
        <input type="password" id="password-input"/>

        <label htmlFor="new-password-input">New password</label>
        <input id="new-password-input" type="password"/>

        <label htmlFor="new-password-confirm-input">Confirm new password</label>
        <input id="new-password-confirm-input" type="password"/>

        <button type="submit">Update password</button>

       </form>
</div>}


{view === 'new-post' && <div className="view">
    <h2>New post</h2>

    <form className="form" onSubmit={handleNewPostSubmit}>
        <label htmlFor="image-input">Image</label>
        <input type="url" id="image-input"/>

        <label htmlFor="text-input">Text</label>
        <input type="text" id="text-input"/>

       

        <button type="submit">Post</button>
        <button onClick={handleCancelNewPostClick}>Cancel</button>

       
       
    </form>
    

</div>}

{view !== 'profile' && posts !== null && <div>
  
    {posts.map((post, index)=> <article key={index} className="post">
    <h2>{post.author}</h2>
    <img className="post-image" src={post.image} />
    <p>{post.text}</p>

    <button onClick={(event) => handleLikeClick(event, index)}>{post.isFav ? '❤️' : '🤍'} {post.likes.length} likes</button>
    
    </article>)}
    </div>}
    </div>

  }
  
  
  