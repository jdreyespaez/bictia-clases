import React, {Component} from 'react'

class Listado extends Component{
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {this.props.tareas.titulo}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                {this.props.tareas.nombre}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Listado