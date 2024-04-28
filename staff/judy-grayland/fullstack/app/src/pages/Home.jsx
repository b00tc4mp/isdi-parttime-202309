import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import logic from '../logic'

import { Button, Link } from '../library'
import { NewPost, Profile, Posts } from '../components'

import { useContext } from '../hooks'

function Home(props) {
  console.log('Home')

  const context = useContext()

  const [view, setView] = useState(null)
  const [name, setName] = useState(null)
  const [posts, setPosts] = useState(null)
  const [favs, setFavs] = useState(null)

  const navigate = useNavigate()
  const location = useLocation()

  //LOG OUT
  const handleLogoutClick = () => {
    logic.logout((error) => {
      if (error) {
        context.handleError(error)

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
          context.handleError(error)

          return
        }

        setName(user.name)
      })
    } catch (error) {
      context.handleError(error)
    }
  }, [])

  // USER SETTINGS BUTTON
  const handleProfileClick = (event) => {
    event.preventDefault()

    navigate('/profile')
  }

  const handleHomeClick = (event) => {
    event.preventDefault()

    navigate('/')
  }

  const handleNewPostClick = () => {
    setView('new-post')
  }

  const handleCancelNewPostClick = (event) => {
    event.preventDefault()

    setView(null)
  }

  const refreshPosts = () => {
    if (view === null || view === 'new-post') {
      try {
        logic.retrievePosts((error, posts) => {
          if (error) {
            context.handleError(error)

            return
          }

          posts.reverse()

          setPosts(posts)
        })
      } catch (error) {
        context.handleError(error)
      }
    } else if (view === 'favs') {
      try {
        logic.retrieveFavPosts((error, favs) => {
          if (error) {
            context.handleError(error)

            return
          }

          favs.reverse()

          setFavs(favs)
        })
      } catch (error) {
        context.handleError(error)
      }
    }
  }

  useEffect(() => {
    console.log('Home -> effect (posts)')

    refreshPosts()
  }, [view])

  const handleNewPostSubmit = (event) => {
    event.preventDefault()

    const imageInput = event.target.querySelector('#image-input')
    const textInput = event.target.querySelector('#text-input')

    const image = imageInput.value
    const text = textInput.value

    try {
      logic.createPost(image, text, (error) => {
        if (error) {
          context.handleError(error)

          return
        }

        try {
          logic.retrievePosts((error, posts) => {
            if (error) {
              context.handleError(error)

              return
            }

            posts.reverse()

            setPosts(posts)
            setView(null)

            window.scrollTo(0, 0)
          })
        } catch (error) {
          context.handleError(error)
        }
      })
    } catch (error) {
      context.handleError(error)
    }
  }

  // CHANGE EMAIL
  const handleChangeEmailSubmit = (event) => {
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
      logic.changeUserEmail(newEmail, newEmailConfirm, password, (error) => {
        if (error) {
          context.handleError(error)
        }
        alert('Email changed correctly')
      })
    } catch (error) {
      context.handleError(error)
    }
  }

  // CHANGE PASSWORD
  const handleChangePasswordSubmit = (event) => {
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
      context.handleError(error)
    }
  }

  const handleFavPostsClick = () => {
    try {
      logic.retrieveFavPosts((error, favs) => {
        if (error) {
          context.handleError(error)

          return
        }

        favs.reverse()

        setFavs(favs)
        setView('favs')
      })
    } catch (error) {
      context.handleError(error)
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

      <Routes>
        {/* {view === 'profile' && (
        <Profile
          onEmailSubmit={handleChangeEmailSubmit}
          onPasswordSubmit={handleChangePasswordSubmit}
        />
      )} */}
        <Route
          path="/profile"
          element={
            <Profile
              onEmailSubmit={handleChangeEmailSubmit}
              onPasswordSubmit={handleChangePasswordSubmit}
            />
          }
        />
        {/* {(view === null || view === 'new-post') && posts !== null && (
        <Posts posts={posts} refreshPosts={refreshPosts} />
      )} */}

        <Route path="/" element={<Posts />} />

        <Route path="/favs" element={<Posts />} />
      </Routes>

      {view === 'favs' && <Posts posts={favs} refreshPosts={refreshPosts} />}

      <footer className="footer">
        {view === 'new-post' && (
          <NewPost
            onSubmit={handleNewPostSubmit}
            onCancel={handleCancelNewPostClick}
          />
        )}

        {view !== 'new-post' &&
          location.pathname != '/profile' &&
          location.pathname != '/favs' && (
            <Button onClick={handleNewPostClick}>+</Button>
          )}
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
