import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Layout = () => {

    const navigate = useNavigate();
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');

    const [change, setChange] = useState(false);

    useEffect(() => {
        axios.get(`http://task.cagu0944.odns.fr/tasks/app.php?action=checkToken&userNameCheck=${id}&token=${token}`)
            .then(response => {
                if (!response.data) {
                    navigate('/');
                    return
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <>
            <Outlet />
        </>
    );
};

export default Layout;