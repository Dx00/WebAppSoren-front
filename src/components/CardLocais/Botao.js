import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <section className="container">
                <button name="botao" type={this.props.tipo} class="btn w-100 px-0 mt-2  text-light" id="button-addon2" style={{ backgroundColor: this.props.cor }}>{this.props.nome}</button>
            </section>
        )
    }
}

export default Button