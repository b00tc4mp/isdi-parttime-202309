import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

const FilterControl = ({ currentSamplePlayer }) => {
    const [filterValue, setFilterValue] = useState(50); // Valor inicial del filtro en el medio
    const filterRef = useRef(null);

    useEffect(() => {
        // Inicializa el filtro solo si no existe aún
        if (!filterRef.current) {
            filterRef.current = new Tone.Filter(500, "lowpass").toDestination();
        }

        // Función para aplicar cambios al filtro basado en el valor
        const handleFilterChange = (value) => {
            const filter = filterRef.current;

            if (value < 33) {
                // Bajo: lowpass de 20 a 500 Hz
                filter.type = "lowpass";
                filter.frequency.value = 20 + (480 * (value / 32));
            } else if (value < 66) {
                // Medio: allpass (manteniendo frecuencia en 500 Hz como ejemplo)
                filter.type = "allpass";
            } else {
                // Alto: highpass de 500 a 5000 Hz
                filter.type = "highpass";
                filter.frequency.value = 500 + (4500 * ((value - 66) / 34));
            }
        };

        handleFilterChange(filterValue);
    }, [filterValue]);

    useEffect(() => {
        // Conecta el currentSamplePlayer al filtro
        if (currentSamplePlayer && filterRef.current) {
            currentSamplePlayer.disconnect();
            currentSamplePlayer.connect(filterRef.current);
        }
    }, [currentSamplePlayer]);

    return (
        <div>
            <div className="text-center text-white mt-4 ">Filter Control</div>
            <input
                className="w-full cursor-pointer mb-4"
                type="range"
                id="filterControl"
                min="0"
                max="100"
                value={filterValue}
                onChange={(e) => setFilterValue(parseFloat(e.target.value))}
            />
        </div>
    );
};

export default FilterControl;


