import React from 'react';

const ExoSixItemTask = ({ task, tableItems, setTableItems }) => {

    const deleteTask = (task) => {
        const copy = [...tableItems];

        let table = copy.find((item) => item.tasks.includes(task))

        const filteredFiltered = table.tasks.filter((item) => item !== task);
        table.tasks = filteredFiltered;

        setTableItems(copy);
    }

    return (
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '20px', color: 'black', textAlign: 'left' }}>
            <p>{task} </p>
            <span onClick={() => {
                deleteTask(task)
            }}>X</span>
        </div>
    );
};

export default ExoSixItemTask;