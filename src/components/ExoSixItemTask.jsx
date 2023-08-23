import React from 'react';

const ExoSixItemTask = ({ task }) => {
    return (
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '20px', color: 'black', textAlign: 'left' }}>
            <p>{task}</p>
        </div>
    );
};

export default ExoSixItemTask;