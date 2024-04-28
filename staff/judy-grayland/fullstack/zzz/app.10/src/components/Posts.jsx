import { Post } from '.'

// we get refreshPosts function from Home.jsx where it's declared
function Posts({ posts, refreshPosts, onError }) {
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
