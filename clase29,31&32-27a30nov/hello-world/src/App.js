// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// // Aquí es donde inicia React y es donde App hereda del Component de React
// class App extends Component {
//   render() {
//     return (
//       // Todo lo siguiente es JSX
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//       // Lo anterior es JSX
//     );
//   }
// }

//P1: CREAMOS un COMPONENTE
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <h1>Hola React</h1>
//     )
//   }
// }

// export default App;

//P2: USANDO las PROPS
// import React, { Component } from 'react';

// class User extends Component {
//   render () {
//     return (

//       <li>
//         {/* Envía los atributos de una etiqueta HTML */}
//         {this.props.nombre} - {this.props.email}
//       </li>

//     )
//   }
// }

// export default User;

//P3: PROPS VARIABLES
// import React, { Component } from 'react';

// class User extends Component {
//   render () {
//     return (

//       <div>
//         <p>Cerveza: {this.props.cerveza.nombre}</p>
//       </div>

//     )
//   }
// }

// export default User;

// INICIO CLASE 31 EL 29 NOV, 2018
// + CLASE 32 del 30 NOV, 2018
import React, {Component} from 'react'
import {lista} from './lista.json'
import Listado from './components/lista'
// Nueva línea clase 32
import Formulario from './components/formulario'

class App extends Component{
  constructor(){
    super();
    this.state = {
      lista
    }

    // Nueva línea clase 32
    // El objetivo es que nos tome handleAgregarTarea como un objeto global
    this.handleAgregarTarea = this.handleAgregarTarea.bind(this)

  }


  // Nueva línea clase 32 ----------------------------
  handleAgregarTarea(listaNueva){
    this.setState({
      lista: [...this.state.lista, listaNueva]
    })
  }
  // -------------------------------------------------

render(){
  const lista = this.state.lista.map((tarea, i) => {
    return(
      <Listado tareas = {tarea} key = {i} />
    );
  })

  return(
    <div className="container">
      <div>
        <span className="contador">
          {this.state.lista.length}
        </span>
      </div>

      <div>
        <Formulario onAgregarTarea = {this.handleAgregarTarea} />
      </div>

      <div>
        {lista}
      </div>

    </div>
  );
}
}

export default App;