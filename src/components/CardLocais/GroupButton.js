import React, { Component } from 'react';

import Botao from './Botao'

class Card extends Component {
    render() {
        return (
            <div class="card p-3 align-items-center">
                <Botao tipo="submit" value="Não Amigável" nome="Não Amigável" class=""/>
            </div>
        );
    };
}

export default Card;
