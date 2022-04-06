import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './App';
import {NavBarByClass} from './AppByClass'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <NavBarByClass />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
