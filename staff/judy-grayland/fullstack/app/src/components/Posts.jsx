import { useEffect, useState } from 'react'

import logic from '../logic'

import { Post } from '.'

// we get refreshPosts function from Home.jsx where it's declared
function Posts() {
  const [posts, setPosts] = useState([])

  const refreshPosts = () => {
    try {
      logic.retrievePosts((error, posts) => {
        if (error) {
          console.log(error)

          return
        }

        posts.reverse()

        setPosts(posts)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    refreshPosts()
  }, [])

  const onError = (error) => {
    console.log(error)
  }

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onToggleLikeClick={refreshPosts}
          onToggleFavClick={refreshPosts}
          onDeletePostClick={refreshPosts}
          onEditPostClick={refreshPosts}
          onError={onError}
        />
      ))}
    </div>
  )
}

export default Posts
