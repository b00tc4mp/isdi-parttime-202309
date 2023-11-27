import logic from "../logic"

// RENDER POSTS & FAVS POSTS
export const refreshPosts = (view, setPosts, setFavs) => {

    if (view === null || view === 'new-post') {
        try {
            logic.retrievePosts((error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                posts.reverse()

                setPosts(posts)
                // Renderizamos la vista de los posts
            })
        } catch (error) {
            alert(error.message)
        }
    } else if (view === 'favs') {
        try {
            logic.retrieveFavUserPosts((error, favs) => {
                if (error) {
                    alert(error.message)

                    return
                }

                favs.reverse()

                setFavs(favs)
                // Renderizamos la vista de los favoritos
            })
        } catch (error) {
            alert(error.message)
        }
    }
}