import React, { useState } from 'react';
import People from './People';

const ExoCinqExo = () => {

    const indenityArray = [
        { fistName: 'Mehdi', lastName: 'Raposo', gender: 'Homme', age: '23 ans' },
        { fistName: 'Samy', lastName: 'Sebahi', gender: 'Homme', age: '25 ans' },
        { fistName: 'Mendy', lastName: 'Vye', gender: 'Homme', age: '45 ans' },
        { fistName: 'Manuel', lastName: 'Elhadide', gender: 'Homme', age: '54 ans' },
    ]

    const [indenity, setIdentity] = useState(indenityArray[0]);

    return (
        <div>
            <h2>{indenity.fistName} {indenity.lastName} {indenity.age}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 150px 150px 150px', gap: '10px' }}>
                {
                    indenityArray.map((item, i) => (
                        <People key={i} item={item} itemSelected={indenity} onClick={() => setIdentity(item)} />
                    ))
                }
            </div>
        </div>
    );
};

export default ExoCinqExo;