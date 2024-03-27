// import React, { createContext, useContext, useState } from 'react';

// const AudioContext = createContext();

// export const useAudioContext = () => useContext(AudioContext);

// export const AudioProvider = ({ children }) => {
//     const [isGlobalPlaying, setGlobalPlaying] = useState(false);
//     // Otros estados y funciones que necesites
//     const [currentBPM, setCurrentBPM] = useState(120);

//     return (
//         <AudioContext.Provider value={{ isGlobalPlaying, setGlobalPlaying, currentBPM, setCurrentBPM }}>
//             {children}
//         </AudioContext.Provider>
//     );
// };