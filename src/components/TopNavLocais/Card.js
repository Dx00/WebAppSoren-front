import React, { Component } from 'react'


class Card extends Component {
    render() {
        return (
            <section>
                <div class="bg-secondary card align-items-center sr-class" style={{ width: 13 + "rem" }}>
                    <img class="card-img-top text-center img-fluid" src={this.props.imagem} alt="Icone" />
                    <div class="card-body text-center text-light">
                        <h5>{this.props.titulo}</h5>
                    </div>
                </div>    
            </section>
                )
            }
        }
        
        export default Card
        
