import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ExoUn from '../pages/ExoUn';
import ExoDeux from '../pages/ExoDeux';
import ExoTrois from '../pages/ExoTrois';


const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path='/' element={<ExoUn />} />
                    <Route index path='/exoDeux' element={<ExoDeux />} />
                    <Route index path='/exoTrois' element={<ExoTrois />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default index;