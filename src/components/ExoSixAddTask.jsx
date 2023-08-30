import React, { useState } from 'react';
import axios from 'axios';

const ExoSixAddTask = ({ tableItems, setTableItems, setOpenForm, setTaskAdded }) => {

    const [tableId, setTableId] = useState('');
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [checkbox, setCheckbox] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <div className='add_modal'>
            <form className='add_task_modal' action="" style={{ margin: '50px' }} onSubmit={(e) => {
                e.preventDefault();
                if (tableId !== '' && taskName !== '' && localStorage.getItem('token') !== '') {
                    axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=addTask&taskname=${taskName}&desc=${taskDesc}&table_id=${tableId}&urgent=${checkbox}`)
                        .then(response => {
                            setTableId('');
                            setTaskName('');
                            setTaskDesc('');
                            setErrorMsg('');
                            setOpenForm(false);
                            setTaskAdded(true);
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                } else {
                    setErrorMsg('Veuillez remplir obligatoirement les champs "Choisir une table" et "Nom de la tache"')
                }
            }}>
                <h2>Ajouter une tache a un tableau</h2>
                {
                    errorMsg !== '' ?
                        <p style={{ color: 'red' }}>{errorMsg}</p>
                        : null
                }
                <select name="name" id="name" onChange={(e) => setTableId(e.target.value)}>
                    <option disabled selected>--- Choisissez une table ---</option>
                    {
                        tableItems.map((item, i) => (
                            <option key={i} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
                <div style={{ margin: '20px 0' }}>
                    <label htmlFor="task">Nom de la tache</label>
                    <br />
                    <input type="text" id="task" defaultValue={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </div>
                <div style={{ margin: '20px 0' }}>
                    <label htmlFor="desc">Description de la tache</label>
                    <br />
                    <textarea name="" id="desc" defaultValue={taskDesc} onChange={(e) => setTaskDesc(e.target.value)} cols="30" rows="10"></textarea>
                </div>
                <div>
                    <label htmlFor="checkbox">Urgent ?</label>
                    <input type="checkbox" name="checkbox" id="checkbox" onClick={(e) => {
                        if (checkbox == 1) {
                            setCheckbox(0);
                        } else {
                            setCheckbox(1);
                        }
                    }} />
                </div>
                <button>Ajouter</button>
                <button style={{ margin: '10px' }} onClick={(e) => {
                    e.preventDefault();
                    setOpenForm(false);
                }}>Annuler</button>
            </form>
            <div className="opacity_modal"></div>
        </div>
    );
};

export default ExoSixAddTask;