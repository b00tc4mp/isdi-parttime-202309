import { useContext } from '../hooks';

import logic from '../logic';
import { Button } from '../library';

function SampleItem({ sample, onToggleFav }) {
    const context = useContext();

    const handleToggleFavClick = () => {
        try {
            logic.toggleFavSample(sample._id).then(() => {
                onToggleFav(sample._id);
            }).catch(error => {
                context.handleError(error);
            });
        } catch (error) {
            context.handleError(error);
        }
    };

    return (
        <div className="sample flex items-center justify-between">
            <h2 className='flex-1'>{sample.name}</h2>
            <Button className='m1-4' onClick={handleToggleFavClick}>
                {sample.fav ? '⭐️' : '✩'}
            </Button>


        </div>
    );
}

export default SampleItem;
