import React, { useState } from 'react';
import axios from 'axios';

const ExoSixDeleteTable = ({ tableItems, deleteTable }) => {

    const [tableId, setTableId] = useState('');

    console.log(tableId);
    return (
        <form action="" style={{ margin: '50px' }} onSubmit={(e) => {
            e.preventDefault();
            if(localStorage.getItem('token') !== ''){

                axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=deleteTable&id_table=${tableId}`)
                .then(response => {
                    console.log('Table supprimé');
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            }
        }}>
            <h2>Supprimer une table</h2>
            <select name="table" id="table" onChange={(e) => setTableId(e.target.value)}>
                <option disabled selected >--- Choisissez une table ---</option>
                {
                    tableItems.map((item, i) => (
                        <option key={i} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
            <button>Supprimer</button>
        </form>
    );
};

export default ExoSixDeleteTable;