import React, { useEffect, useState } from 'react';
import ExoSixItemTask from './ExoSixItemTask';
import axios from 'axios';

const ExoSixTableItem = ({ item, tableItems, setTableItems, openModal, taskAdded, setTaskAdded, setTaskToUp, setUpdateTaskModal, setTaskToSee, setOpenDetailsModal, seeArchived }) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=getTasksTables&id=${item.id}`)
                .then(response => {
                    setTasks(response.data);
                    setTaskAdded(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };

        fetchData();
        const interval = setInterval(() => {
            fetchData();
        }, 15000);

        return () => {
            clearInterval(interval);
        };
    }, [taskAdded, seeArchived]);

    return (
        <div className='list'>
            <header>{item.name}</header>
            <ul>
                {
                    tasks.map((task, i) => (
                        task.table_id == item.id ?
                            <ExoSixItemTask task={task} key={i} tableItems={tableItems} setTableItems={setTableItems} setTaskAdded={setTaskAdded} setTaskToUp={setTaskToUp} setUpdateTaskModal={setUpdateTaskModal} setTaskToSee={setTaskToSee} setOpenDetailsModal={setOpenDetailsModal} />
                            : null
                    ))
                }
            </ul>
            <footer onClick={() => openModal()}>Ajouter une tache </footer>
        </div>
    );
};

export default ExoSixTableItem;