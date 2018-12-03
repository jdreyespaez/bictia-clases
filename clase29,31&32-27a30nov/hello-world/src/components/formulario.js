import React, {Component} from 'react';

// Inicia la construcción del componente
class Formulario extends Component{
    constructor(){
        super()
        this.state = {
            titulo: '',
            nombre: ''
        }

        // Con .bind() estamos escalando el evento que viene de handleCampo y handleEnvio
        this.handleCampo = this.handleCampo.bind(this)
        this.handleEnvio = this.handleEnvio.bind(this)
    
    }

    handleCampo(e) {
        const { value, name } = e.target
        this.setState({
            [name] : value
        })
    }

    handleEnvio(e){
        e.preventDefault()
        this.props.onAgregarTarea(this.state)
    }

    render(){
        return(
            <div>
                {/* onSubmit evento propio de JS */}
                <form method="POST" onSubmit={this.handleEnvio}>
                    <div>
                        <input
                            type="text"
                            name="titulo"
                            placeholder="Título"
                            onChange={this.handleCampo}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            onChange={this.handleCampo}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}
// Finaliza la construcción del componente

export default Formulario