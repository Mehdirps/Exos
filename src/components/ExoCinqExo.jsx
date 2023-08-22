import React, { useState } from 'react';

const ExoCinqExo = () => {

    const indenityArray = [
        ['Mehdi', 'Raposo', 'Homme', '23 ans'],
        ['Samy', 'Sebahi', 'Homme', '25 ans'],
        ['Mendy', 'Vye', 'Homme', '45 ans'],
        ['Manuel', 'Elhadide', 'Homme', '54 ans'],
    ]

    const [indenity, setIdentity] = useState(indenityArray[0]);


    return (
        <div>
            <h2>{indenity[0]} {indenity[1]} {indenity[3]}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '150px 150px 150px 150px ', gap: '10px' }}>
                {
                    indenityArray.map((item, i) => (
                        <div style={{ opacity: indenity[0] === item[0] ? 1 : 0.5 }} onClick={() => setIdentity(item)}>
                            <h3>{item[0]}</h3>
                            <p>{item[1]}</p>
                            <p>{item[2]}</p>
                            <p>{item[3]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ExoCinqExo;