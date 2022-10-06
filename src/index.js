import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
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
