import React from "react"

import logic from "../logic"

import { Button, Link } from '../library'

import { Post } from "../components"

import Profile from "../components/profile"


function Home(props) {
    console.log('Home')

    const [view, setView] = React.useState(null)
    const [name, setName] = React.useState(null)
    const [posts, setPosts] = React.useState(null)
    const [favs, setFavs] = React.useState(null)

   /*  
   Arriba reescribimos el useState hook que cambia las vistas, usando destructuring. Luego añadimos otros para cambiar otras vistas 
   const viewState = React.useState(null)
   const view = viewState[0]
   const setView = viewState[1] */

    //LOG OUT
    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)

                return
            }
        })
        props.onLogoutClick()
    }

    React.useEffect(() => {
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

    function handleCancelNewPostClick (event){
        event.preventDefault()

        setView(null)
    }

   function refreshPosts() {
        if(view === null || view === 'new-post') {
            try {
                logic.retrievePosts((error, posts) => {
                    if(error) {
                        alert(error.message)

                        return
                    }

                    posts.reverse()
                
                    setPosts(posts)
                })
            } catch(error) {
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

    React.useEffect(() => {
        console.log('Home -> effect (posts)')

        refreshPosts()
    }, [view])

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const text = textInput.value

        try{
            logic.publishPost(image, text, error => {
                if (error) {
                    alert(error.message)

                    return
            }

                try{
                    logic.retrievePosts((error, posts) => {
                        if (error) {
                            alert(error.message)

                            return
                        }

                        posts.reverse()

                        setPosts(posts)
                        setView(null)
                    })
                } catch(error) {
                    alert(error.message)
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleToggleLikePostClick(postId) {
        try {
            logic.toggleLikePost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    // DELETE BUTTON
    function handleDeletePostClick(postId) {
        if(confirm('Are you sure you want to delete this post?')) {

            try {
                logic.deletePost(postId, error => {
                    if (error) {
                        alert(error.message)

                        return
                    }
                    refreshPosts()
                })
            } catch (error) {
                alert(error.message)
            }
        }
    }

    // FAV POST BUTTON
    function handleToggleFavPostClick(postId) {
        try {
            logic.toggleFavPost(postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                refreshPosts()
            })
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
    return <div>
        <header className="home-header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>
    
            <div>
                <button className= "button" onClick={handleNewPostClick}>+</button> <Link onClick={handleProfileClick}>{name}</Link> <button className= "button" onClick={handleFavPostsClick}>🌟 My Favs</button> <button className= "button" onClick={handleLogoutClick}>Log out</button>
            </div>
        </header>

        {view === 'profile' && <Profile setView={setView}/>}

        {view === 'new-post' && <NewPost refreshPosts={refreshPosts} onSuccess= {handleHomeClick} onCancel={handleCancelNewPostClick}/>}

        {(view === null || view === 'new-post') && posts !== null && <div>
            {posts.map(post => <Post key={post.id} post={post} onToggleLikeClick={handleToggleLikePostClick} onToggleFavClick={handleToggleFavPostClick} onDeletePostClick={handleDeletePostClick}/>)}
        </div>}
        
        {view === 'favs' && <div>
            {favs.map(post => <Post key={post.id} post={post} onToggleLikeClick={handleToggleLikePostClick} onToggleFavClick={handleToggleFavPostClick} onDeletePostClick={handleDeletePostClick}/>)}
        </div>}
    </div>
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