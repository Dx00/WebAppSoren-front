import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <section className="container">
                <button type={this.props.tipo} class="btn btn-primary w-100 mt-2 mb-3 btn-lg" id="button-addon2" value={this.props.value}>{this.props.nome}</button>
            </section>
        )
    }
}

export default Button