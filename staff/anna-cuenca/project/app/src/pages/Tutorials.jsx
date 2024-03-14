import { useEffect, useState } from 'react'
import Tutorial from '../components/Tutorial'
import NewTutorial from '../components/NewTutorial'
import { Button, Form, Link, Field } from '../library'

import { useContext } from '../hooks'

function Tutorials(props) {
    console.log('Tutorials')
    const context = useContext()
    const { userRole } = context
    console.log(userRole)
    const [view, setView] = useState(null)
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

            context.handleError(error)
        }
    }

    useEffect(() => {
        console.log('Tutorials effect')

        refreshTutorials()
    }, [props.stamp])

    function handleNewTutorialClick() {
        setView('new-tutorial')
    }

    function handleNewTutorialPublish() {
        setView(null)

        window.scrollTo(0, 0)
        refreshTutorials()
    }

    function handleNewTutorialCancel() {
        setView(null)
    }








    return <div className="tutorials">
        <h2>Tutorials</h2>
        {/* {posts.map((post) => <Post key={post.id} post={post} onToggleLikeClick={handleLikeClick} onToggleFavClick={handleFavPostClick} onToggleDeleteClick={handleDeletePostClick} />)} */}
        {tutorials.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial} onToggleLikeClick={refreshTutorials} onToggleDeleteClick={refreshTutorials} onUpdate={refreshTutorials} />)}
        {/* {tutorials.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial} onToggleLikeClick={refreshPosts} onToggleFavClick={refreshPosts} onToggleEditClick={refreshPosts} onToggleDeleteClick={refreshPosts} onError={context.handleError} />)} */}
        {/* con React necesitamos crear una Key para renderizar una lista de
         elementos. Esta lista de elementos se renderiza con .map, porque .map
         devuelve un arrays */}


        <footer className="footer">

            {view === 'new-tutorial' && <NewTutorial onPublish={handleNewTutorialPublish} onCancel={handleNewTutorialCancel} onError={context.handleError} />}
            {userRole === 'admin' && <Button onClick={handleNewTutorialClick}>+</Button>}

        </footer>
    </div>

}

export default Tutorials