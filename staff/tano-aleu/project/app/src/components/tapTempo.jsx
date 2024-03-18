import React, { useState } from 'react';

const TapTempo = ({ onBPMChange }) => {
    const [lastTapTime, setLastTapTime] = useState(0);
    const [taps, setTaps] = useState([]);

    const handleTap = () => {
        const currentTime = Date.now();
        if (lastTapTime !== 0) {
            const interval = currentTime - lastTapTime;
            const newTaps = [...taps, 60000 / interval];
            if (newTaps.length > 4) { // Conservar solo los últimos 4 taps
                newTaps.shift();
            }
            setTaps(newTaps);

            if (newTaps.length > 1) { // Calcula el BPM solo si hay al menos 2 taps
                const averageBPM = newTaps.reduce((a, b) => a + b) / newTaps.length;
                onBPMChange(Math.round(averageBPM));
            }
        }
        setLastTapTime(currentTime);
    };

    return (
        <div className="flex justify-around">

            <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow" onClick={handleTap}>
                Tap
            </button>
        </div>
    );
};

export default TapTempo;