import { useState, useEffect } from 'react'
import logic from '../logic'



import { Button, Form, Link, Field } from '../library'
import { Posts, Profile, NewPost } from '../components'


function Home(props) {
    console.log('Home')

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [stamp, setStamp] = useState(null)






    function handleLogoutClick() {
        logic.logoutUser(error => {
            if (error) {
                alert(error.message)
                return
            }
        })

        props.onLogoutClick()
    }

    //use.Effect es un hook de React que permite realizar efectos secundarios en componentes funcionales
    // () => { ... } es el cuerpo de la función que representa el efecto secundario. Este código se
    //ejecuta después de que el componente se haya renderizaddo en el DOM
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
    }, []) //es un array de dependencias, indica a React qué variables o propiedades deben cambiar
    // para que el efecto secundario se vuelva a ejecutar. Si el array está vacío [] significa
    // que sólo se ejecutará una vez.

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

    function handleNewPostCancel() {
        setView(null)
    }


    function handleNewPostPublish() {
        setStamp(Date.now())
        setView(null)
        window.scrollTo(0, 0)
    }



    function handleDeletePostClick(postId) {
        console.log(db.posts.author);
        if (confirm('Are you sure you want to delete this post?')) {
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


    function handleFavPostsClick(event) {
        event.preventDefault()


        setView('favs')

    }

    return <div>
        <header className="header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <div>

                <Link onClick={handleProfileClick}>{name}</Link>
                <Link onClick={handleFavPostsClick}>Favs</Link>


                <Button onClick={handleLogoutClick}>Logout</Button>
            </div>
        </header>
        {view === 'profile' && <Profile />}

        {(view === null || view === 'new-post') && < Posts loadPosts={logic.retrievePosts.bind(logic)} stamp={stamp} />}
        {/* {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}


        {view === 'favs' && < Posts loadPosts={logic.retrieveFavPosts.bind(logic)} />}
        {/* {favs.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}






        <footer className="footer">

            {view === 'new-post' && <NewPost onPublish={handleNewPostPublish} onCancel={handleNewPostCancel} />}
            {view !== 'new-post' && <Button onClick={handleNewPostClick}>+</Button>}

        </footer>

    </div >

}

export default Home