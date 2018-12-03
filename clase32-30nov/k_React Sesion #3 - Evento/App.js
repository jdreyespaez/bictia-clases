// CREAR COMPONENTE

/* import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h1>Hola React</h1>
    );
  }
}

export default App; */





//PROPS SENCILLO

/* import React, { Component } from 'react';

class User extends Component {
  render () {
    return (

      
      <li>
        {this.props.nombre} - {this.props.email}
      </li>
    )
  }
}

export default User; */







//PROPS VARIABLES

/* import React, { Component } from 'react';

class User extends Component {
  render () {
    return (
      <div>
        <p>Cerveza: {this.props.cerveza.nombre}</p>
      </div>
    )
  }
}

export default User; */


//
/* import React from 'react'

class Layout extends React.Component{
  render(){
    return(
    <h1>Hola Bictia</h1>
    )
  }
}

export default Layout */

/* import React from 'react'

class Layout extends React.Component{
  constructor(){
    super()
    this.nombre='instituto'
  }
  render(){
    return(
    <h1>Hola {this.nombre}</h1>
    )
  }
}

export default Layout */





import React, {Component} from 'react'
import {lista} from './lista.json'
import Listado from './components/lista'
import './App.css'
//NUEVA LÍNEA ----------------------------------
import Formulario from './components/formulario'
// ---------------------------------------------

class App extends Component{
  constructor(){
    super();
    this.state = {
      lista
    }
    
    //NUEVA LÍNEA -----------------------------------------------
    this.handleAgregarTarea = this.handleAgregarTarea.bind(this)
    // ----------------------------------------------------------

  }

  //NUEVA LÍNEA -------------------------------------
  handleAgregarTarea(listaNueva){
    this.setState({
      lista: [...this.state.lista, listaNueva]
    })
  }
  //--------------------------------------------------

  render(){
    const lista = this.state.lista.map((tarea, i) => {
      return(
        <Listado tareas={tarea} key={i}/>
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
            <Formulario onAgregarTarea={this.handleAgregarTarea}/>
          </div>

          <div>
             {lista}
          </div>
      </div>
    );
  }
}

export default App
