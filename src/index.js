import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/font.css';
import './css/default.css';
import {Navigator} from './navigator';
import Channel from './channel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigator />
    <Channel />
  </React.StrictMode>
);
