import React, { useState } from 'react';
import axios from 'axios';

const ExoSixFormTableItem = ({ addTable }) => {

    const [name, setName] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (name !== '') {
            axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=addTable&name=${name}`)
                .then(response => {
                    console.log('Table ajouté');
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
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