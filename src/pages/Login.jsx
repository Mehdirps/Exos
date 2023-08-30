import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            Login
            {
                error !== '' ?
                    <p style={{ color: 'red' }}>{error}</p>
                    : null
            }
            <form action="" onSubmit={(e) => {
                e.preventDefault();

                axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=login&userName=${userName}&password=${password}`)
                    .then(response => {
                        if(response.data === 'Nom d\'utilisateur ou mot de passe incorrect.'){
                            setError('Les identifiants sont incorrects !')
                        }else{
                            const token = response.data;
                            localStorage.setItem('token', token);
                            localStorage.setItem('name', userName);
                            navigate('/tasklist');
                        }
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });

            }}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' onChange={(e) => setuserName(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="text" id='password' onChange={(e) => setPassword(e.target.value)} />
                <button>login</button>
            </form>
        </div>
    );
};

export default Login;