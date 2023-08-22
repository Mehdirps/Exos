import React from 'react';

const People = ({ item, itemSelected, onClick }) => {

    return (
        <div onClick={onClick} style={{ opacity: item.fistName === itemSelected.fistName ? 1 : 0.5 }} >
            <h3>{item.fistName}</h3>
            <p>{item.lastName}</p>
            <p>{item.gender}</p>
            <p>{item.age}</p>
        </div>
    );
};

export default People;