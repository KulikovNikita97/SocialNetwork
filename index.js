import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PonjectApp from './App';
import reportWebVitals from './reportWebVitals';

window.history.pushState(null, null, '/profile');

ReactDOM.render(
    <PonjectApp />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
