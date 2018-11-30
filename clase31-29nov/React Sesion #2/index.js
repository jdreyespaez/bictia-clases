import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


//ReactDOM.render(<App nombre="Kamilo" email="kamilo.munevar@bit.institute"/>, document.getElementById('root'));



/* var miCerveza = {nombre: 'Poker'}
ReactDOM.render(<App cerveza={miCerveza}/>, document.getElementById('root')); */

ReactDOM.render(<App/>, document.getElementById('root'))

serviceWorker.unregister();


