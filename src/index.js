import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/font.css';
import './css/default.css';
import {Navigator} from './Navigator';
import {Channel} from './Channel';
import { ChannelMenu } from './Channel_Menu';
import DepthDetail from './DepthDetail';
import {CheckControllable, RemoteEffect} from './function_remote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigator/>
    <Routes>
      <Route path='/channel' element = {<Channel />}/>
      <Route path='/menu' element = {<ChannelMenu />}/>
      <Route path='/detail' element = {<DepthDetail/>}/>
    </Routes>
  </BrowserRouter>
);
