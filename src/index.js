import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/font.css';
import './css/default.css';
import {Navigator} from './Navigator';
import {Channel} from './Channel';
import DepthDetail from './DepthDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/channel' element = {<Channel />}/>
        <Route path='/detail' element = {<DepthDetail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
