import React, { useState } from 'react';
import ExoSixTableItem from './ExoSixTableItem';
import ExoSixFormTableItem from './ExoSixFormTableItem';
import ExoSixDeleteTable from './ExoSixDeleteTable';
import ExoSixAddTask from './ExoSixAddTask';

const ExoSixExo = () => {

    const [tableItems, setTableItems] = useState([
        {
            name: 'Web',
            tasks: [
                'Site',
                'Logo',
                'Back'
            ]
        },
        {
            name: 'Barbecue',
            tasks: [
                'Poulet',
                'Chipolata',
            ]
        },
        {
            name: 'Jeux',
            tasks: [
                'Lol',
                'BO2',
                'Pokemon'
            ]
        },
        {
            name: 'Voiture',
            tasks: [
                'C63 AMG',
                'RS6',
                'GTR R34'
            ]
        }
    ]);

    const addTable = (table) => {
        const tableItemsCopy = [...tableItems];

        tableItemsCopy.push(table);

        setTableItems(tableItemsCopy);
    }

    const deleteTable = (name) => {
        const tableItemsCopy = [...tableItems];

        if (tableItems.length === 1 && tableItems[0].name === name) {
            setTableItems([]);
        }

        const tableItemsFiltered = tableItemsCopy.filter((item) => item.name !== name);

        setTableItems(tableItemsFiltered);
    }

    return (
        <>
            <ExoSixFormTableItem addTable={addTable} />
            {
                tableItems.length > 0 ?
                    <>
                        <ExoSixDeleteTable tableItems={tableItems} deleteTable={deleteTable} />
                        <ExoSixAddTask tableItems={tableItems} setTableItems={setTableItems} />
                    </>
                    : null
            }
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 250px)', gap: '10px' }}>
                {
                    tableItems.length > 0 ?
                        tableItems.map((item, i) => (
                            <ExoSixTableItem key={i} item={item} tableItems={tableItems} setTableItems={setTableItems} />
                        ))

                        : <p>Aucune tables pour le moment !</p>
                }
            </div>
        </>
    );
};

export default ExoSixExo;