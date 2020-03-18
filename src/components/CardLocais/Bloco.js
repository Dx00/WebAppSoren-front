import React, { Component } from 'react';
import axios from 'axios';

import './Bloco.css';


class Bloco extends Component {

    constructor(){
        super();
        this.state = {
            locais: '',
            texto : '',
            categoria: ''
        }
    }

    componentDidMount(){
        this.renderPlaces()
    }


    renderPlaces = async() => {
        let dados = await axios.get('https://websorenapp-backend.herokuapp.com/dados')
        
        let resposta = [dados.data.response][0]

        let itens = resposta.map((itens) => (<li className="locais" key={itens.id}>{itens.rua} - {itens.categoria}</li>))

        this.setState({
            locais: itens,
        });
    };

    render() {

        return (
            <section className="container" style={{marginBottom:"8%"}}>
                <section className="container m-0 mt-4 mb-4">
                    <div class="row w-auto">
                        <div class="col-sm p-0">
                            <input onInput={(e) => this.setState({texto: e.target.value})} id="inp" type="text" class="form-control w-100" placeholder="Onde você quer ir?" aria-label="Procurar local amigável" aria-describedby="button-addon2" />
                        </div>
                            <div class="col-sm p-0">
                                <select onInput={(e) => this.setState({categoria: e.target.value})} class="custom-select w-100" id="inputGroupSelect01">
                                    <option value='0' selected>Categorias</option>
                                    <option value="1">Restaurantes</option>
                                    <option value="lanchonete">Lanchonetes</option>
                                    <option value="cafe">Cafés</option>
                                    <option value="bares">Bares</option>
                                    <option value="baladas">Baladas</option>
                                </select>
                            </div>
                            <div class="col-sm p-0">
                                <button type="button" class="btn btn-primary w-100" id="button-addon2" value='Buscar'>Buscar</button>
                        </div>
                    </div>
                </section>
                <div className="card">
                    <ul className="listaLocais">
                        {this.state.locais}
                    </ul>
                </div>
            </section>
                )
            }
        }

export default Bloco;
