import React, { useEffect, useState } from 'react';
import ExoSixTableItem from './ExoSixTableItem';
import ExoSixAddTask from './ExoSixAddTask';
import axios from 'axios';
import ExoSixUpdateTask from './ExoSixUpdateTask';

const ExoSixExo = () => {
    const [openForm, setOpenForm] = useState(false);

    const [tableItems, setTableItems] = useState([]);

    const [taskAdded, setTaskAdded] = useState(false);

    const [updateTaskModal, setUpdateTaskModal] = useState(false);

    const [taskToUp, setTaskToUp] = useState([]);

    useEffect(() => {
        axios.get('http://task.cagu0944.odns.fr/tasks/app.php?action=getTables')
            .then(response => {
                setTableItems(response.data);
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

    return (
        <>
            <nav className="navbar board" ><p style={{padding:'10px 20px', backgroundColor:'#2fc2e2', borderRadius:'5px', margin:'auto', cursor:'pointer'}} onClick={() =>{
                openModal(true)
            }}>Ajouter une tache</p></nav>
            {/* <ExoSixFormTableItem addTable={addTable} /> */}
            <div className="lists">
                {
                    tableItems.length > 0 ?
                        tableItems.map((item, i) => (
                            <ExoSixTableItem key={i} item={item} tableItems={tableItems} setTableItems={setTableItems} openModal={openModal} taskAdded={taskAdded} setTaskAdded={setTaskAdded} setTaskToUp={setTaskToUp} setUpdateTaskModal={setUpdateTaskModal} />
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
            </div>
        </>
    );
};

export default ExoSixExo;