import { useState, useEffect } from 'react';
import * as Tone from 'tone';
import logic from '../logic';
import { Button } from '../library';

let currentPlayer = null;
let onSamplePlayListeners = new Set();

const subscribeToSamplePlay = (listener) => {
    onSamplePlayListeners.add(listener);
};

const unsubscribeFromSamplePlay = (listener) => {
    onSamplePlayListeners.delete(listener);
};

const notifySamplePlay = (sampleId) => {
    onSamplePlayListeners.forEach((listener) => listener(sampleId));
};

function SampleItem({ sample, onToggleFav }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSampleId, setCurrentSampleId] = useState(null);

    useEffect(() => {
        return () => {
            if (currentPlayer) {
                currentPlayer.stop();
                currentPlayer = null;
            }
        };
    }, []);

    useEffect(() => {
        if (currentSampleId === sample._id && currentPlayer) {
            currentPlayer.onstop = () => {
                setIsPlaying(false);
            };
        }
    }, [currentSampleId, sample._id]);

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

    const handlePlayPauseClick = async () => {
        if (currentSampleId === sample._id && currentPlayer && currentPlayer.state === 'started') {
            currentPlayer.stop();
            setIsPlaying(false);
            setCurrentSampleId(null);
        } else {
            if (currentPlayer) {
                currentPlayer.stop();
            }

            currentPlayer = new Tone.Player().toDestination();
            await currentPlayer.load(sample.filePath);
            currentPlayer.start();
            setIsPlaying(true);
            setCurrentSampleId(sample._id);
            notifySamplePlay(sample._id);
        }
    };

    return (
        <div className="sample flex items-center justify-between">
            <h2 className='flex-1'>{sample.name}</h2>
            <Button className='mx-4' onClick={handlePlayPauseClick}>
                {currentSampleId === sample._id && isPlaying ? '⏸' : '▶️'}
            </Button>
            <Button className='mx-4' onClick={handleToggleFavClick}>
                {sample.fav ? '⭐️' : '✩'}
            </Button>
        </div>
    );
}

export default SampleItem;
