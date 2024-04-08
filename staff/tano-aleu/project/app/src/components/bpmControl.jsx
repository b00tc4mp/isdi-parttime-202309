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
            <div className="w-1/2 relative flex flex-col items-center  mb-4"> {/* Añade espacio verticalmente entre elementos */}
                {/* Texto sobre los inputs */}
                <div className="text-white text-1sm"></div> {/* Ajusta el tamaño del texto y el color según necesites */}

                <div className="relative w-full bg-purple-800 p-2 rounded-full text-center shadow-lg mb-3 ">
                    <input
                        type="number"
                        className="w-medium bg-transparent text-3xl"
                        value={bpm}
                        onChange={handleBpmChange}
                        min="40"
                        max="240"
                        step="0.1"
                        style={{ paddingRight: "30px" }} // Asegúrate de ajustar este valor según el tamaño de tu texto "BPM"
                    />
                    <span className="absolute right-0 mr-10 text-white text-1xl" style={{ top: "59%", transform: "translateY(-50%)" }}>BPM</span>
                </div>

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

