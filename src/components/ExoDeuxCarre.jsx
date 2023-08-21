import React, { useState } from 'react';

const ExoDeuxCarre = () => {

    const [squares, setSquares] = useState(Array(8).fill(false));

    const handleSquareHover = (index) => {
        if (!squares[index]) {
            const newSquares = [...squares];
            newSquares[index] = true;
            setSquares(newSquares);

            if (newSquares.every(square => square)) {
                alert("Tous colorés");
            }
        }
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '150px 150px 150px 150px ', gap: '10px' }}>
            {squares.map((isColored, index) => (
                <div
                    style={{ width: '150px', height: '150px', backgroundColor: isColored ? 'red' : 'black' }}
                    key={index}
                    onMouseEnter={() => handleSquareHover(index)}
                ></div>
            ))}
        </div>
    );
};

export default ExoDeuxCarre;