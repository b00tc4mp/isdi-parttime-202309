import React from 'react';

const BpmControl = ({ bpm, onChangeBpm }) => {
    const handleBpmChange = (newBpm) => {

        if (onChangeBpm) {
            onChangeBpm(newBpm);
        }

    };

    const handleIncreaseBpm = () => {
        handleBpmChange(bpm + 1);
    };

    const handleDecreaseBpm = () => {
        handleBpmChange(bpm - 1);
    };

    return (
        <div className="flex items-center justify-around ">
            <button className="text-3xl relative w-1/6 bg-purple-800 rounded-full text-center shadow-lg" onClick={handleDecreaseBpm}>-</button>
            <div className="w-1/2 relative flex flex-col items-center mb-4">
                <div className="text-white text-1sm"></div>
                <div className="relative w-full bg-purple-800 p-2 rounded-full text-center shadow-lg mb-3 ">
                    <input
                        type="number"
                        className="w-medium bg-transparent text-3xl"
                        value={bpm}
                        onChange={(e) => handleBpmChange(Number(e.target.value))}
                        min="40"
                        max="240"
                        step="0.1"
                        style={{ paddingRight: "30px" }}
                    />
                    <span className="absolute right-0 mr-10 text-white text-1xl" style={{ top: "59%", transform: "translateY(-50%)" }}>BPM</span>
                </div>
                <input
                    type="range"
                    className="range-input w-full mb-4"
                    value={bpm}
                    onChange={(e) => handleBpmChange(Number(e.target.value))}
                    min="40"
                    max="240"
                    step="0.5"
                />
            </div>
            <button className="text-3xl relative w-1/6 bg-purple-800 rounded-full text-center shadow-lg" onClick={handleIncreaseBpm}>+</button>
        </div>
    );

};

export default BpmControl;
