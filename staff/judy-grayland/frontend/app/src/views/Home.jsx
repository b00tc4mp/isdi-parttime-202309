import { useState, useEffect } from 'react'

import logic from '../logic'

import { Button, Link } from '../library'

import { Post, NewPost, Profile, Posts } from '../components'

function Home(props) {
  console.log('Home')

  const [view, setView] = useState(null)
  const [name, setName] = useState(null)
  const [posts, setPosts] = useState(null)
  const [favs, setFavs] = useState(null)

  //LOG OUT
  function handleLogoutClick() {
    logic.logoutUser((error) => {
      if (error) {
        alert(error.message)

        return
      }
    })
    props.onLogoutClick()
  }

  useEffect(() => {
    console.log('Home -> effect (name)')

    try {
      logic.retrieveUser((error, user) => {
        if (error) {
          alert(error.message)

          return
        }

        setName(user.name)
      })
    } catch (error) {
      alert(error.message)
    }
  }, [])

  // USER SETTINGS BUTTON
  function handleProfileClick(event) {
    event.preventDefault()

    setView('profile')
  }

  function handleHomeClick(event) {
    event.preventDefault()

    setView(null)
  }

  function handleNewPostClick() {
    setView('new-post')
  }

  function handleCancelNewPostClick(event) {
    event.preventDefault()

    setView(null)
  }

  function refreshPosts() {
    if (view === null || view === 'new-post') {
      try {
        logic.retrievePosts((error, posts) => {
          if (error) {
            alert(error.message)

            return
          }

          posts.reverse()

          setPosts(posts)
        })
      } catch (error) {
        alert(error.message)
      }
    } else if (view === 'favs') {
      try {
        logic.retrieveFavPosts((error, favs) => {
          if (error) {
            alert(error.message)

            return
          }

          favs.reverse()

          setFavs(favs)
        })
      } catch (error) {
        alert(error.message)
      }
    }
  }

  useEffect(() => {
    console.log('Home -> effect (posts)')

    refreshPosts()
  }, [view])

  function handleNewPostSubmit(event) {
    event.preventDefault()

    const imageInput = event.target.querySelector('#image-input')
    const textInput = event.target.querySelector('#text-input')

    const image = imageInput.value
    const text = textInput.value

    try {
      logic.publishPost(image, text, (error) => {
        if (error) {
          alert(error.message)

          return
        }

        try {
          logic.retrievePosts((error, posts) => {
            if (error) {
              alert(error.message)

              return
            }

            posts.reverse()

            setPosts(posts)
            setView(null)

            window.scrollTo(0, 0)
          })
        } catch (error) {
          alert(error.message)
        }
      })
    } catch (error) {
      alert(error.message)
    }
  }

  // CHANGE EMAIL
  function handleChangeEmailSubmit(event) {
    event.preventDefault()

    const newEmailInput = event.target.querySelector('#new-email-input')
    const newEmailConfirmInput = event.target.querySelector(
      '#new-email-confirm-input'
    )
    const passwordInput = event.target.querySelector('#password-input')

    const newEmail = newEmailInput.value
    const newEmailConfirm = newEmailConfirmInput.value
    const password = passwordInput.value

    try {
      logic.changeUserEmail(newEmail, newEmailConfirm, password)

      alert('Email changed correctly')
    } catch (error) {
      alert(error.message)
    }
  }

  // CHANGE PASSWORD
  function handleChangePasswordSubmit(event) {
    event.preventDefault()

    const passwordInput = event.target.querySelector('#password-input')
    const newPasswordInput = event.target.querySelector('#new-password-input')
    const newPasswordConfirmInput = event.target.querySelector(
      '#new-password-confirm-input'
    )

    const password = passwordInput.value
    const newPassword = newPasswordInput.value
    const newPasswordConfirm = newPasswordConfirmInput.value

    try {
      logic.changeUserPassword(password, newPassword, newPasswordConfirm)

      alert('Password changed correctly')
    } catch (error) {
      alert(error.message)
    }
  }

  function handleFavPostsClick() {
    try {
      logic.retrieveFavPosts((error, favs) => {
        if (error) {
          alert(error.message)

          return
        }

        favs.reverse()

        setFavs(favs)
        setView('favs')
      })
    } catch (error) {
      alert(error.message)
    }
  }

  // TEMPLATE
  return (
    <div>
      <header className="header">
        <h1>
          <Link onClick={handleHomeClick}>Home</Link>
        </h1>

        <div>
          <Link onClick={handleProfileClick}>{name}</Link>{' '}
          <Button onClick={handleFavPostsClick}>🌟 My Favs</Button>{' '}
          <Button onClick={handleLogoutClick}>Log out</Button>
        </div>
      </header>

      {view === 'profile' && (
        <Profile
          onEmailSubmit={handleChangeEmailSubmit}
          onPasswordSubmit={handleChangePasswordSubmit}
        />
      )}

      {(view === null || view === 'new-post') && posts !== null && (
        <Posts posts={posts} refreshPosts={refreshPosts} />
      )}

      {view === 'favs' && <Posts posts={favs} refreshPosts={refreshPosts} />}

      <footer className="footer">
        {view === 'new-post' && (
          <NewPost
            onSubmit={handleNewPostSubmit}
            onCancel={handleCancelNewPostClick}
          />
        )}

        {view !== 'new-post' && <Button onClick={handleNewPostClick}>+</Button>}
      </footer>
    </div>
  )
}

/* 
An alternative way of showing a post: using arrow functions inside the button onClicks, instead of declaring separate functions. 

It also uses a div to group together the buttons (Likes and delete)

{view !== 'profile' && posts !== null && <div className='view'>
{posts.map((post) => <article key={post.id} className="post">
    <h2>{post.author.email}</h2>
    <img className='post-img' src={post.image} />
    <p>{post.text}</p>
    <div className="buttons-post">
        <button className= "button" className='button-submit' onClick={() => handleLikeClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</button>
        {post.author.id === user.id && (<button className= "button" className='button-submit' onClick={() => handleDeletePostClick(post.id)}>Delete post</button>)}
    </div>
</article>)}
</div>}
*/

export default Home
