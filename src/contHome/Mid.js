import React, { Component } from 'react'

//Importando o componente Bloco
import Bloco from '../components/Card/Bloco'


class Mid extends Component {
    render() {
        return (
            <section className="bg-gray pt-5">
                <div className="container pt-4">
                    <div className="text-center pb-lg-4" style={{fontFamily:"Montserrat"}}>
                        <h1 className="mb-5">Como utilizar o SOREN?</h1>
                        <Bloco/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Mid