import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ExoSix from '../pages/ExoSix';
import Login from '../pages/Login';


const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route element={<Layout />}>
                    <Route path='/tasklist' element={<ExoSix />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default index;