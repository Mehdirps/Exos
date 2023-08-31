import React, { useEffect, useState } from 'react';
import ExoSixTableItem from './ExoSixTableItem';
import ExoSixAddTask from './ExoSixAddTask';
import axios from 'axios';
import ExoSixUpdateTask from './ExoSixUpdateTask';
import TaskDetailsModal from './TaskDetailsModal';

const ExoSixExo = () => {
    const [openForm, setOpenForm] = useState(false);

    const [tableItems, setTableItems] = useState([]);

    const [taskAdded, setTaskAdded] = useState(false);

    const [updateTaskModal, setUpdateTaskModal] = useState(false);

    const [taskToUp, setTaskToUp] = useState([]);

    const [openDetailsModal, setOpenDetailsModal] = useState(false);

    const [taskToSee, setTaskToSee] = useState('');

    const [seeArchived, setSeeArchived] = useState(false);

    const [tablesFiltered, setTablesFiltered] = useState([]);

    useEffect(() => {
        axios.get('http://task.cagu0944.odns.fr/tasks/app.php?action=getTables')
            .then(response => {
                setTableItems(response.data);
                const filteredTables = response.data.filter((item) => item.id != 12)
                setTablesFiltered(filteredTables);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
            
    }, []);

    const openModal = () => {
        if (openForm) {
            setOpenForm(false)
        } else {

            setOpenForm(true)
        }
    }

    const seeArchive = () => {
        setSeeArchived(true)
        const filteredTables = tableItems.filter((item) => item.id == 12)
        setTablesFiltered(filteredTables);
    }
    const seeAll = () => {
        setSeeArchived(false)
        const filteredTables = tableItems.filter((item) => item.id != 12)
        setTablesFiltered(filteredTables);
    }

    return (
        <>
            <nav className="navbar board" style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                <p style={{ padding: '10px 20px', backgroundColor: '#2fc2e2', borderRadius: '5px', cursor: 'pointer' }} onClick={() => {
                    openModal(true)
                }}>Ajouter une tache</p>
                {
                    !seeArchived ?
                    <p style={{ padding: '10px 20px', backgroundColor: '#dc3545', borderRadius: '5px', cursor: 'pointer' }} onClick={() => {
                        seeArchive()
                    }}>Archivé</p>
                    :
                    <p style={{ padding: '10px 20px', backgroundColor: '#dc3545', borderRadius: '5px', cursor: 'pointer' }} onClick={() => {
                        seeAll()
                    }}>Voir tout</p>
                }
                
            </nav>
            {/* <ExoSixFormTableItem addTable={addTable} /> */}
            <div className="lists">
                {
                    tablesFiltered.length > 0 ?
                        tablesFiltered.map((item, i) => (
                            <ExoSixTableItem key={i} item={item} tableItems={tableItems} setTableItems={setTableItems} openModal={openModal} taskAdded={taskAdded} setTaskAdded={setTaskAdded} setTaskToUp={setTaskToUp} setUpdateTaskModal={setUpdateTaskModal} setTaskToSee={setTaskToSee} setOpenDetailsModal={setOpenDetailsModal} seeArchived={seeArchived} />
                        ))

                        : <p>Aucune tables pour le moment !</p>
                }
                {
                    openForm ?
                        <ExoSixAddTask tableItems={tableItems} setTableItems={setTableItems} setOpenForm={setOpenForm} setTaskAdded={setTaskAdded} />
                        : null
                }
                {
                    updateTaskModal ?
                        <ExoSixUpdateTask tableItems={tableItems} taskToUp={taskToUp} setUpdateTaskModal={setUpdateTaskModal} setTaskAdded={setTaskAdded} setTaskToUp={setTaskToUp} />
                        : null
                }
                {
                    openDetailsModal ?
                        <TaskDetailsModal taskToSee={taskToSee} setOpenDetailsModal={setOpenDetailsModal} setTaskToSee={setTaskToSee} />
                        : null
                }
            </div>
        </>
    );
};

export default ExoSixExo;