/* import React from 'react'

class Tareas extends React.Component{
    getInitialState(){
        return{
            tareas : ['bañarse', 'comer', 'cagar']
        }
        
    }

  render(){
    return(
    <div id="lista">
        <ul>
            <li>{this.state.tareas[0]}</li>
            <li>{this.state.tareas[1]}</li>
            <li>{this.state.tareas[2]}</li>
        </ul>
    </div>
    )
  }
}

export default Tareas */

/* //ESTO VA EN EL ARCHIVO APP.JS
<Nav titulo="Inicio"/>
<Nav titulo="Tareas"/>
<Nav titulo="Contacto"/>  */



import React, {Component} from 'react'

class Nav extends Component{
    render(){
        return(
            <nav >
                <a href="" >
                    {this.props.titulo}
                </a>
            </nav>
        );
    }
}

export default Nav