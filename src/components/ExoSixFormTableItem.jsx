import React, { useState } from 'react';

const ExoSixFormTableItem = ({ addTable }) => {

    const [name, setName] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (name !== '') {
            const table = {
                name: name,
                tasks: []
            }
            addTable(table)
        }
    }

    return (
        <form action="" style={{ margin: '50px' }} onSubmit={(e) => submit(e)}>
            <h2>Ajouter un tableau</h2>
            <label htmlFor="name">Nom du nouveau tableau</label>
            <input type="text" id='name' onChange={(e) => setName(e.target.value)} />
            <button>Ajouter</button>
        </form>
    );
};

export default ExoSixFormTableItem;