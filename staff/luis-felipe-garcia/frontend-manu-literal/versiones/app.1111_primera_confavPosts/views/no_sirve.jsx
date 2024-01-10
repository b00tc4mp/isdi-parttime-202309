{view === 'fav-posts' && favPosts !== null && <div>
{console.log(`posts to show: ${postsToShow}`)}
{console.log(postsToShow)}
{console.log(`favPosts:`)}
{console.log(favPosts)}

{favPosts.map((post) => {

    return <article key={post.id} className="post">
        <h2>{post.author.name}</h2>
        <img className="post-image" src={post.image} />
        <p>{post.text}</p>
        <div className='buttons-posts'>
            <button className='button-submit' onClick={() => handleToggleLikePostClick(post.id)}>{post.liked ? '❤️' : '🤍'} {post.likes.length} likes</button>
            <button className='button-submit' onClick={() => handleFavPostClick(post.id)}>{post.fav ? '⭐️' : 'Fav'}</button>

            {post.author.id === logic.sessionUserId && <button className='button-submit' onClick={() => handleDeletePostClick(post.id)}>Delete post</button>}
        </div>
    </article>
})}
</div>
}