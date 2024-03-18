

export default function Metronome() {
    console.log('Metronome')

    return <div>

        {/* Format & Background */}
        <div className="bg-[#5F5784]] text-white h-screen p-5">
            <div className="flex flex-col space-y-4">

                {/* LP-HP Filter  */}
                <div>
                    <input
                        type="range"
                        className="w-full p-3 rounded bg-purple-800 placeholder-gray-300"
                    />
                </div>


                {/* Select the sample */}
                <div className="relative">
                    <button
                        className="text-left w-full bg-purple-800 p-3 rounded shadow">Samples</button>

                    <div className="absolute w-full bg-purple-600 rounded shadow mt-1 z-10">
                        {/* Map through your samples here */}
                        <a href="#" className="block px-4 py-2 hover:bg-purple-500">Drum 1</a>
                        <a href="#" className="block px-4 py-2 hover:bg-purple-500">Drum 2</a>
                        <a href="#" className="block px-4 py-2 hover:bg-purple-500">Drum 3</a>
                        <a href="#" className="block px-4 py-2 hover:bg-purple-500">Drum 4</a>
                        {/* ...more samples */}
                    </div>

                </div>

                {/* Sample - Volume control */}
                <div className="volume-samples">
                    <div className="w-10/12 p-2 mt-40">
                        <input type="range" className="w-[120%]" />
                    </div>

                </div>



                {/* Loop length buttons */}
                <div className="flex justify-between">
                    {['1', '2', '4', '8', '16', '32', '64'].map((value) => (
                        <button
                            key={value}
                            className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow mt-0"
                        >
                            {value}
                        </button>
                    ))}
                </div>


                {/* BPM selector */}
                <div className="flex space-x-2">
                    <div className="w-1/2 p-2 relative">
                        <div className="knob bg-purple-800 p-10 rounded-full text-center shadow-lg mt-3">120</div>
                        <input type="range" className="range-input w-[100%]" min="0" max="100" />
                    </div>
                    <div className="w-1/2 p-2 relative">
                        <div className="knob bg-purple-800 p-10 rounded-full text-center shadow-lg mt-3">.00 BPM</div>
                        <input type="range" className="range-input w-[100%]" min="0" max="100" />
                    </div>
                </div>


                {/* Beat Transposition - Placeholder for your sliders */}
                <div className="flex justify-around">
                    <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow">
                        | | ||
                    </button>
                    <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow">
                        || | |
                    </button>

                </div>


                {/* Metronome - Placeholder for your metronome controls */}
                <div>
                    <div className="flex justify-around mt-5">
                        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow">
                            Play
                        </button>
                        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow">
                            Stop
                        </button>
                        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow">
                            Tap
                        </button>
                        <button className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded shadow">
                            On/Off
                        </button>
                    </div>


                    {/* Metronome - Volume controls */}
                    <div className="volume-metronome mt-5">
                        <div className="w-10/12 p-1 items-center justify-center mt-3">
                            <input type="range" className="w-[120%] items-center justify-center" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}