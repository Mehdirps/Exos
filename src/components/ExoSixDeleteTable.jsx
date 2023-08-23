import React, { useState } from 'react';

const ExoSixDeleteTable = ({ tableItems, deleteTable }) => {


    return (
        <form action="" style={{ margin: '50px' }} onSubmit={(e) => {
            e.preventDefault();

            deleteTable(e.target.table.value);
        }}>
            <h2>Supprimer une table</h2>
            <select name="table" id="table">
                <option disabled selected>--- Choisissez une table ---</option>
                {
                    tableItems.map((item, i) => (
                        <option key={i} value={item.name}>{item.name}</option>
                    ))
                }
            </select>
            <button>Supprimer</button>
        </form>
    );
};

export default ExoSixDeleteTable;