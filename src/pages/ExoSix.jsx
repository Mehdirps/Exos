import React from 'react';
import ExoSixExo from '../components/ExoSixExo';

const ExoSix = () => {
    return (
        <div className="ui">
            <nav className='navbar app' ><img style={{width:'150px'}} src="./img/logo-web.svg" alt="" /> Tasks Manager </nav>
            <ExoSixExo />
            <div className="opacity"></div>
        </div>
    );
};

export default ExoSix;