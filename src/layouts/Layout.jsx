import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Layout = () => {

    

    return (
        <>
            <header>
                <nav style={{display: 'flex', gap:'20px'}}>
                    <NavLink exact="true" to="/homepage">
                        <p>Home page</p>
                    </NavLink>
                    <NavLink exact="true" to="/">
                        <p>Login</p>
                    </NavLink>
                    <NavLink exact="true" to="/exoUn">
                        <p>Exo 1</p>
                    </NavLink>
                    <NavLink exact="true" to="/exoDeux">
                        <p>Exo 2</p>
                    </NavLink>
                    <NavLink exact="true" to="/exoTrois">
                        <p>Exo 3</p>
                    </NavLink>
                    <NavLink exact="true" to="/exoQuatre">
                        <p>Exo 4</p>
                    </NavLink>
                    <NavLink exact="true" to="/exoCinq">
                        <p>Exo 5</p>
                    </NavLink>
                    <NavLink exact="true" to="/tasklist">
                        <p>Exo 6 : Tasklist</p>
                    </NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    );
};

export default Layout;