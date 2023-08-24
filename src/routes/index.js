import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ExoUn from '../pages/ExoUn';
import ExoDeux from '../pages/ExoDeux';
import ExoTrois from '../pages/ExoTrois';
import ExoQuatre from '../pages/ExoQuatre';
import ExoCinq from '../pages/ExoCinq';
import ExoSix from '../pages/ExoSix';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';


const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route element={<Layout />}>
                    <Route path='/homepage' element={<HomePage />} />
                    <Route path='/exoUn' element={<ExoUn />} />
                    <Route path='/exoDeux' element={<ExoDeux />} />
                    <Route path='/exoTrois' element={<ExoTrois />} />
                    <Route path='/exoQuatre' element={<ExoQuatre />} />
                    <Route path='/exoCinq' element={<ExoCinq />} />
                    <Route path='/tasklist' element={<ExoSix />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default index;