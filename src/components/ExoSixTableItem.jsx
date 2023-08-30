import React, { useEffect, useState } from 'react';
import ExoSixItemTask from './ExoSixItemTask';
import axios from 'axios';

const ExoSixTableItem = ({ item, tableItems, setTableItems, openModal, taskAdded, setTaskAdded, setTaskToUp,setUpdateTaskModal }) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=getTasksTables&id=${item.id}`)
            .then(response => {
                setTasks(response.data);
                setTaskAdded(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [taskAdded]);

    return (
        <div className='list'>
            <header>{item.name}</header>
            <ul>
                {
                    tasks.map((task, i) => (
                        <ExoSixItemTask task={task} key={i} tableItems={tableItems} setTableItems={setTableItems} setTaskAdded={setTaskAdded} setTaskToUp={setTaskToUp} setUpdateTaskModal={setUpdateTaskModal} />
                    ))
                }
            </ul>
            <footer onClick={() => openModal()}>Ajouter une tache </footer>
        </div>
    );
};

export default ExoSixTableItem;