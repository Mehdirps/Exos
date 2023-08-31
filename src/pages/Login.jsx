import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=checkToken&userNameCheck=${id}&token=${token}`)
            .then(response => {
                if (!response.data) {
                    navigate('/');
                    return
                } else {
                    navigate('/tasklist');
                    return
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])
    return (

        <div class="container">
            <div class="card">
                <img style={{width:'100px', margin:'auto'}} src="https://maplaque-nfc.fr/q/LOGO-CARRE.svg" alt="Logo maplaque" />
                <h2>Connexion</h2>
                {
                    error !== '' ?
                        <p style={{ color: 'red' }}>{error}</p>
                        : null
                }
                <form action="" onSubmit={(e) => {
                    e.preventDefault();

                    axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=login&userName=${userName}&password=${password}`)
                        .then(response => {
                            if (response.data === 'Nom d\'utilisateur ou mot de passe incorrect.') {
                                setError('Les identifiants sont incorrects !')
                            } else {
                                const token = response.data.token;
                                localStorage.setItem('token', token);
                                localStorage.setItem('name', response.data.name);
                                localStorage.setItem('id', response.data.id);
                                navigate('/tasklist');
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });

                }}>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id='name' name='username' onChange={(e) => setuserName(e.target.value)} />
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
                    <button>Me connecter</button>
                </form>
            </div>
        </div>
    );
};

export default Login;