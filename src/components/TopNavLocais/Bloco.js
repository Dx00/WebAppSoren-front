import React, { Component } from 'react'
import Card from './Card.js'
import Restaurant from 'C:/Desenvolvimento/soren-bootstrap/src/images/Restaurant.jpg'
import Cafe from 'C:/Desenvolvimento/soren-bootstrap/src/images/Cafe.jpg'
import Bar from 'C:/Desenvolvimento/soren-bootstrap/src/images/Bar.jpg'


class Bloco extends Component {
    render() {
        return (
            <section className="container-fluid bg-dark pt-3">
                <div className="container">
                    <div className="card-columns">
                    <Card imagem = {Cafe} titulo="CAFÉS"/>
                    <Card imagem = {Restaurant} titulo="RESTAURANTES"/>
                    <Card imagem = {Bar} titulo="BARES"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Bloco