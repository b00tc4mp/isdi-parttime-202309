import React from 'react';

const BpmControl = ({ bpm, onChangeBpm }) => {
    const handleBpmChange = (e) => {
        const newBpm = Number(e.target.value);
        console.log(`BPM cambiado a: ${newBpm}`);
        if (onChangeBpm) {
            onChangeBpm(newBpm);
        }
    };
    return (
        <div className="flex justify-around">
            {/* BPM selector */}
            <div className="w-1/2 p-2 relative">

                <input
                    type="number"
                    className="numeric-input w-[100%] bg-purple-800 p-10 rounded-full text-center shadow-lg mt-3"
                    value={bpm}
                    onChange={handleBpmChange}
                    min="40"
                    max="240"
                    step="0.1"
                />


                <input
                    type="range"
                    className="range-input w-[100%]"
                    value={bpm}
                    onChange={handleBpmChange}
                    min="40"
                    max="240"
                    step="0.1"
                />
            </div>
        </div>
    );

};

export default BpmControl;

