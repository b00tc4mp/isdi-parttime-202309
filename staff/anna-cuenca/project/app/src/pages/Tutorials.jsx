import { useEffect, useState } from 'react'
import Tutorial from '../components/Tutorial'

import { useContext } from '../hooks'

function Tutorials(props) {
    console.log('Tutorials')
    const context = useContext()
    const [tutorials, setTutorials] = useState([])


    const refreshTutorials = () => {
        try {
            props.loadTutorials()
                .then(tutorials => {

                    tutorials.reverse()

                    setTutorials(tutorials)

                })

                .catch(error => context.handleError(error))



        } catch (error) {
            //alert(error.message)
            context.handleError(error)
        }
    }

    useEffect(() => {
        console.log('Tutorials effect')

        refreshTutorials()
    }, [props.stamp])




    return <div className="tutorials">
        {/* {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}
        {tutorials.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial} />)}
        {/* {tutorials.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleEditClick={refreshPosts} onToggleDeleteClick={refreshPosts} onError={context.handleError} />)} */}
        {/* con React necesitamos crear una Key para renderizar una lista de
         elementos. Esta lista de elementos se renderiza con .map, porque .map
         devuelve un arrays */}
    </div>

}

export default Tutorials