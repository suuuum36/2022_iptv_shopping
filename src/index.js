import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/font.css';
import './css/default.css';
import {Navigator} from './Navigator';
import {Channel} from './Channel';
import { ChannelMenu } from './Channel_Menu';
import DepthDetail from './DepthDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Channel />}/>
        <Route path='/channel_menu' element = {<ChannelMenu/>}/>
        <Route path='/detail' element = {<DepthDetail/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
