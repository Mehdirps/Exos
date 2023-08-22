import React, { useState } from 'react';

const ExoQuatreExo = () => {

    const [count, setCount] = useState(1);
    const [images, setImages] = useState(Array(count).fill());

    const addImage = () => {
        const inc = count + 1;
        setCount(inc);
        setImages(Array(inc).fill())
    }

    const deleteImage = () => {
        if (images.length > 1) {
            const dec = count - 1;
            setCount(dec);
            setImages(Array(dec).fill())
        }
    }

    return (
        <div>
            <div className="images" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,300px)', gap: '10px' }}>
                {images.map((image, index) => (
                    <img key={index} src="https://placehold.co/300" alt="Carre" />
                ))}            </div>

            <button onClick={() => addImage()}>Ajouter</button>
            <button onClick={() => deleteImage()}>Supprimer</button>
        </div>
    );
};

export default ExoQuatreExo;