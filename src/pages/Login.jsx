import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    return (
        <div>
            Login
            <form action="" onSubmit={(e) => {
                e.preventDefault();

                if (e.target.name.value !== '' && e.target.password.value !== '') {
                    return navigate('/tasklist');
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