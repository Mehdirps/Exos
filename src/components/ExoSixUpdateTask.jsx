import React, { useState } from 'react';
import axios from 'axios';

const ExoSixUpdateTask = ({ tableItems, setTableItems, setOpenForm, setTaskAdded, taskToUp, setUpdateTaskModal, setTaskToUp }) => {

    const [tableId, setTableId] = useState(taskToUp.table_id);
    const [taskName, setTaskName] = useState(taskToUp.name);
    const [taskDesc, setTaskDesc] = useState(taskToUp.description);
    const [errorMsg, setErrorMsg] = useState('');
    const [checkbox, setCheckbox] = useState(taskToUp.urgent);

    return (
        <div className='add_modal'>
            <form className='add_task_modal' action="" style={{ margin: '50px' }} onSubmit={(e) => {
                e.preventDefault();
                if (tableId !== '' && taskName !== '' && localStorage.getItem('token') !== '') {
                    axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=updateTask&tasknameUp=${taskName}&descUp=${taskDesc}&table_idUp=${tableId}&id_taskUp=${taskToUp.id}&urgentUp=${checkbox}`)
                        .then(response => {
                            setTaskToUp([]);
                            setTaskAdded(true);
                            setUpdateTaskModal(false);
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                } else {
                    setErrorMsg('Veuillez remplir obligatoirement les champs "Choisir une table" et "Nom de la tache"')
                }
            }}>
                <h2>Modifier la tache {taskToUp.name} </h2>
                {
                    errorMsg !== '' ?
                        <p style={{ color: 'red' }}>{errorMsg}</p>
                        : null
                }
                <div>
                    <label htmlFor="name">Table</label>
                    <br />
                    <select name="name" id="name" onChange={(e) => setTableId(e.target.value)}>
                        {
                            tableItems.map((item, i) => (
                                taskToUp.table_id === item.id ?
                                    <option key={i} selected value={item.id}>{item.name}</option>
                                    :
                                    <option key={i} value={item.id}>{item.name}</option>
                            ))

                        }
                    </select>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <label htmlFor="task">Nom de la tache</label>
                    <br />
                    <input type="text" id="task" defaultValue={taskToUp.name} onChange={(e) => setTaskName(e.target.value)} />
                </div>
                <div style={{ margin: '20px 0' }}>
                    <label htmlFor="desc">Description de la tache</label>
                    <br />
                    <textarea name="" id="desc" defaultValue={taskToUp.description} onChange={(e) => setTaskDesc(e.target.value)} cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label htmlFor="checkbox">Urgent ?</label>
                    <input type="checkbox" name="checkbox" id="checkbox" defaultChecked={taskToUp.urgent == 1 ? true : null} onClick={(e) => {
                        if (checkbox == 1) {
                            setCheckbox(0);
                        } else {
                            setCheckbox(1);
                        }
                    }} />
                </div>
                <button>Modifier</button>
                <button style={{ margin: '10px' }} onClick={(e) => {
                    e.preventDefault();
                    setUpdateTaskModal(false);
                }}>Annuler</button>
            </form>
            <div className="opacity_modal"></div>
        </div>
    );
};

export default ExoSixUpdateTask;