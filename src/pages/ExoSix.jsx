import React from 'react';
import ExoSixExo from '../components/ExoSixExo';
import { useNavigate } from 'react-router-dom';

const ExoSix = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="ui">
            <nav className='navbar app' >
                <img style={{ width: '150px' }} src="./img/logo-web.svg" alt="" />
                <p style={{ marginLeft: 'auto', marginRight: '30px', fontSize: '16px', color: '#2fc2e2', cursor: 'pointer' }} onClick={() => {
                    logout()
                }}>Deconnexion</p>
            </nav>
            <ExoSixExo />
            <div className="opacity"></div>
        </div>
    );
};

export default ExoSix;