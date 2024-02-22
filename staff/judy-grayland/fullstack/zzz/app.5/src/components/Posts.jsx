import { Post } from '.'

function Posts({ posts, refreshPosts }) {
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
        />
      ))}
    </div>
  )
}

export default Posts
