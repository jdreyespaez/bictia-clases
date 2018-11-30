// Estamos haciendo uso de ES6, por eso ya no se necesita
// var React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// PRUEBA 1
// ReactDOM.render(<App />, document.getElementById('root'));

// PRUEBA 2
// ReactDOM.render(<App nombre="Juan" email="jdreyespaez@gmail.com"/>, document.getElementById('root'));

// PRUEBA 3
// var miCerveza = {nombre: 'Poker'}
// ReactDOM.render(<App cerveza={miCerveza}/>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
