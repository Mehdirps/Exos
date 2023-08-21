import React, { useState } from 'react';

const ExoUnForm = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const valideForm = (e) => {
        e.preventDefault();

        setError('');

        if (name === '') {
            setError('Vous n\'avez pas saisi de nom');
            return;
        }

        alert('Salut ' + name + ' !');
    }

    return (
        <>
            <br />
            <p style={{ color: 'red' }}>{error ? error : ''}</p>
            <form action="" onSubmit={(e) => valideForm(e)}>
                <div>
                    <label htmlFor="name">Votre nom</label>
                    <input type="text" name='name' id='name' onChange={(e) => setName(e.target.value)} />
                </div>
                <button>Valider</button>
            </form>
        </>
    );
};

export default ExoUnForm;