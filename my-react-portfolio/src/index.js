import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/bootstrap.min.css';
import './styles/all.min.css';
import './styles/style.css';
import './styles/responsive.css';

if (typeof global.fetch === 'undefined') {
  global.fetch = require('node-fetch');
}


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);