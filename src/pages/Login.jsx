import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
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

                if (e.target.name.value === 'cloudcampus' && e.target.password.value === '0000') {
                    return navigate('/tasklist');
                } else {
                    setError('Identifants incorrects')
                }

            }}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' />
                <label htmlFor="password">Password</label>
                <input type="text" id='password' />
                <button>login</button>
            </form>
        </div>
    );
};

export default Login;