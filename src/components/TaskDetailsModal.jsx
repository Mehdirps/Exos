import React from 'react';

const TaskDetailsModal = ({ taskToSee, setOpenDetailsModal, setTaskToSee }) => {
    const html = taskToSee.description;
    const parsedHtml = React.createElement('div', { dangerouslySetInnerHTML: { __html: html } });

    let taskImages = [];
    if (taskToSee.images) {
        taskImages = JSON.parse(taskToSee.images);
    }

    return (
        <div className='details_modal'>
            <div className="details">
                {
                    taskToSee.urgent == 1 ?
                        <h1 style={{ color: 'red' }}>URGENT</h1>
                        : null
                }
                <h2>{taskToSee.name}</h2>
                <small style={{ opacity: '0.8', whiteSpace: 'pre-line' }}><em>{parsedHtml}</em></small>
                {
                    taskImages.length > 0 ?
                        <div className="images">
                            <h3>Pièces jointes</h3>
                            <div className="images-container" style={{ backgroundColor: '#e3e3e3', borderRadius: '10px' }}>
                                {
                                    taskImages.map((image, index) => (
                                        <a href={'http://task.cagu0944.odns.fr/tasks/uploads/' + taskImages[0]}><img key={index} src={'http://task.cagu0944.odns.fr/tasks/uploads/' + image} style={{ width: '100px', margin: "10px" }} alt={`Pic ${index}`} /></a>
                                    ))
                                }
                            </div>
                        </div>
                        : null
                }
                <p>Ajouté par <strong>{taskToSee.user}</strong></p>
                <p onClick={() => {
                    setOpenDetailsModal(false)
                    setTaskToSee([])
                }}>Fermer</p>
            </div>
            <div className="opacity_modal"></div>
        </div>
    );
};

export default TaskDetailsModal;