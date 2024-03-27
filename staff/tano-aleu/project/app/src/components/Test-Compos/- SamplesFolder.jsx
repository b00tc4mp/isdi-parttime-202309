import { Button } from '../library'
import { useContext } from "../hooks";
import { useState, useEffect } from "react";
import getSamples from "../logic/getSamples";

export default function SamplesFolder() {
    console.log('SamplesFolder')

    const [samplesList, setSamplesList] = useState([]);
    const [favorites, setFavorites] = useState(() => {
        // Intenta cargar los favoritos guardados del almacenamiento local
        const savedFavorites = localStorage.getItem('sampleFavorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        getSamples().then(samples => {
            setSamplesList(samples.map(sample => ({
                ...sample,
                isFavorite: favorites.includes(sample.id) // Añade una propiedad isFavorite basada en los favoritos guardados
            })));
        });
    }, [favorites]); // Dependencia de favorites para actualizar la lista cuando cambie

    const toggleFavorite = (sampleId) => {
        const newFavorites = favorites.includes(sampleId) ?
            favorites.filter(id => id !== sampleId) :
            [...favorites, sampleId];

        setFavorites(newFavorites);
        // Guarda los favoritos actualizados en el almacenamiento local
        localStorage.setItem('sampleFavorites', JSON.stringify(newFavorites));
    };

    return (
        <div className="samples-folder">
            {samplesList.map(sample => (
                <div key={sample.id} className="sample-item">
                    {sample.name}
                    <button onClick={() => toggleFavorite(sample.id)}>
                        {sample.isFavorite ? '★' : '☆'} {/* Icono de favorito, cambia según el estado */}
                    </button>
                </div>
            ))}
        </div>
    );
};
