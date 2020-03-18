import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'

class Register extends Component {
    render() {
        return (
            <section className="container w-100 p-3">
                <div class="text-center my-5" style={{fontFamily:"Montserrat"}}>
                    <h1>Crie uma conta</h1>
                </div>
                <Input tipo="text" placeholder="Nome"/>
                <Input tipo="text" placeholder="E-mail"/>
                <Input tipo="password" placeholder="Senha"/>
                <Input tipo="password" placeholder="Confirme sua senha"/>
                <Button tipo="button" value="Cadastrar" nome="Cadastrar"/>
            </section>
        )
    }
}

export default Register