import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import ExoUn from '../pages/ExoUn';
import ExoDeux from '../pages/ExoDeux';
import ExoTrois from '../pages/ExoTrois';
import ExoQuatre from '../pages/ExoQuatre';
import ExoCinq from '../pages/ExoCinq';
import ExoSix from '../pages/ExoSix';


const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path='/' element={<ExoUn />} />
                    <Route index path='/exoDeux' element={<ExoDeux />} />
                    <Route index path='/exoTrois' element={<ExoTrois />} />
                    <Route index path='/exoQuatre' element={<ExoQuatre />} />
                    <Route index path='/exoCinq' element={<ExoCinq />} />
                    <Route index path='/exoSix' element={<ExoSix />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default index;