import React, {Component} from 'react'

class Formulario extends Component{
    constructor(){
        super()
        this.state = {
            titulo: '',
            nombre: ''
        }

        this.handleCampo = this.handleCampo.bind(this)
        this.handleEnvio = this.handleEnvio.bind(this)
    }

    handleCampo(e){
        const { value, name } = e.target
        this.setState({
            [name]: value
        }) 
    }

    handleEnvio(e){
        e.preventDefault()
        this.props.onAgregarTarea(this.state)
    }

    render(){
        return(
            <div>
                <form method="POST" onSubmit={this.handleEnvio}>
                    <div>
                        <input
                            type="text" 
                            name="titulo" 
                            placeholder="Titulo" 
                            onChange={this.handleCampo}/>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="nombre" 
                            placeholder="Nombre" 
                            onChange={this.handleCampo}/>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }

}

export default Formulario