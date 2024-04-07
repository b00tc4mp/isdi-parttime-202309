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
            <div className="w-1/2 relative flex flex-col items-center space-y-1 mb-4"> {/* Añade espacio verticalmente entre elementos */}
                {/* Texto sobre los inputs */}
                <div className="text-white text-1sm">BPM</div> {/* Ajusta el tamaño del texto y el color según necesites */}

                <input
                    type="number"
                    className="w-full bg-purple-800 p-2 rounded-full text-center shadow-lg text-3xl"
                    value={bpm}
                    onChange={handleBpmChange}
                    min="40"
                    max="240"
                    step="0.1"
                />

                <input
                    type="range"
                    className="range-input w-full mb-4"
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

