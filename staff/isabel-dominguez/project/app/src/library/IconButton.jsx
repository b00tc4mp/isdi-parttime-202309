import React from 'react'

export default function IconButton({ imageSrc, alt, onClick }) {
    return (
        <button onClick={onClick}>
            <img src={imageSrc} alt={alt} />
        </button>
    )
}