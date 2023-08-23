import React from 'react';

const ExoSixAddTask = ({ tableItems, setTableItems }) => {

    return (
        <form action="" style={{ margin: '50px' }} onSubmit={(e) => {
            e.preventDefault();

            const tableName = e.target.name.value;

            const newTable = e.target.task.value;

            const tableCopy = [...tableItems];

            const table = tableCopy.find((item) => item.name === tableName);

            table.tasks.push(newTable);

            setTableItems(tableCopy);

        }}>
            <h2>Ajouter une tache a un tableau</h2>
            <select name="name" id="name">
                <option disabled selected>--- Choisissez une table ---</option>
                {
                    tableItems.map((item, i) => (
                        <option key={i} value={item.name}>{item.name}</option>
                    ))
                }
            </select>
            <div style={{ margin: '20px 0' }}>
                <label htmlFor="task">Nom de la tache</label>
                <input type="text" id="task" />
            </div>
            <button>Ajouter</button>
        </form>
    );
};

export default ExoSixAddTask;