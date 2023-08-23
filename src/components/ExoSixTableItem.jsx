import React from 'react';
import ExoSixItemTask from './ExoSixItemTask';

const ExoSixTableItem = ({ item }) => {
    return (
        <div style={{ backgroundColor: 'grey', padding: '15px 15px 50px 15px', borderRadius: '20px', color: 'white', textAlign: 'center' }}>
            <h2>{item.name}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {
                    item.tasks.map((task, i) => (
                        <ExoSixItemTask task={task} key={i} />
                    ))
                }
            </div>
        </div>
    );
};

export default ExoSixTableItem;