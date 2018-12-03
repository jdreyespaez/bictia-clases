import React, {Component} from 'react'
import '../lista.css'

class Listado extends Component{
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="lista">
                                {this.props.tareas.titulo}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="lista">{this.props.tareas.nombre}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Listado