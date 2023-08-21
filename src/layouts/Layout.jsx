import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <header>
                <nav style={{display: 'flex', gap:'20px'}}>
                    <NavLink exact="true" to="/">
                        <p>Exo 1</p>
                    </NavLink>
                    <NavLink exact="true" to="/exoDeux">
                        <p>Exo 2</p>
                    </NavLink>
                    <NavLink exact="true" to="/exoTrois">
                        <p>Exo 3</p>
                    </NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;