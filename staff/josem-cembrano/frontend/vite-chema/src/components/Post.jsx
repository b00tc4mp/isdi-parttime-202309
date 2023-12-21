   import logic from "../logic"
   import { Button } from "../library"

   function Post(props) {
       // LIKE BUTTON
        function handleToggleLikeClick(postId) {
            try {
                logic.toggleLikePost(postId, error => {
                    if (error) {
                        alert(error.message)
    
                        return
                    }
    
                    refreshPosts()
                    // Hacemos un repintado de los posts-favs
                })
    
            } catch (error) {
                alert(error.message)
            }
        }
        // FAVS POST BUTTON
        function handleToggleFavClick(postId) {
            try {
                logic.toggleFavPost(postId, error => {
                    if (error) {
                        alert(error.message)
    
                        return
                    }
    
                    refreshPosts()
                    // Hacemos un repintado de los posts-favs
                })
    
            } catch (error) {
                alert(error.message)
            }
        }

        return 
   }

export default Post