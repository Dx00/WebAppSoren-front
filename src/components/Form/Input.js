import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <section className="container input-group input-group-lg">
                    <input type={this.props.tipo} class="form-control w-100 mb-1 mt-1" placeholder={this.props.placeholder} aria-describedby="button-addon2" required />
            </section>
        )
    }
}

export default Input